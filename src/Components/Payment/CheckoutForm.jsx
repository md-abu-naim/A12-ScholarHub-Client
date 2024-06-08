import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useQuery } from "@tanstack/react-query";
import './CheckoutForm.css'
import CommonBtn from '../../Shared/CommonBtn';
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosCommon from '../../Hooks/useAxiosCommon';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState()
    const [cardError, setCardError] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const { id } = useParams()
    const axiosCommon = useAxiosCommon()

    const { data: sessions = [] } = useQuery({
        queryKey: ['session'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/allSessions`)
            const sessionns = data.filter(session => session.status === "Approved")
            return sessionns
        }
    })
    const session = sessions.find(session => session._id === id)
    const { session_title: title, tutor_name, description,
        registration_start_date, registration_end_date, class_start_time,
        class_end_time, session_duration, registration_fee, category } = session || {}

    useEffect(() => {
        if (registration_fee > 0) {
            axiosCommon.post('/create-payment-intent', { registration_fee: registration_fee })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosCommon, registration_fee])

    const handleSubmit = async event => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('[error]', error)
            setCardError(error.message)
            return
        } else {
            console.log('[PaymentMethod]', paymentMethod)
            setCardError('')
        }

        const { error: confirmError, paymentIntent } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymouse',
                        name: user?.displayName || 'anonymouse'
                    }
                },
            })

        if (confirmError) {
            console.log(confirmError)
            setCardError(confirmError.message)
            return
        }

        if (paymentIntent.status === 'succeeded') {
            console.log(paymentIntent)
            setTransactionId(paymentIntent.id)

            const bookedData = {
                session_id: id, title, tutor_name, description, registration_start_date,
                registration_end_date, class_start_time, class_end_time, session_duration, registration_fee, category, email: user?.email
            }
            console.log(bookedData);

            axiosCommon.post('/booked-sesssion', bookedData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success('Session booking is complete')
                }
            })
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'white',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button type="submit" disabled={!stripe || !clientSecret}><CommonBtn title={`Pay ${session.registration_fee}`} /></button>
            </form>
            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
            {transactionId && <p className='text-green-700'>Transaction id: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm