
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useQuery } from "@tanstack/react-query";
import './CheckoutForm.css'
// import CommonBtn from '../../Shared/CommonBtn';
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosCommon from '../../Hooks/useAxiosCommon';
import { useParams } from 'react-router-dom';

const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState()
    const [cardError, setCardError] = useState('')
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
    const registration_fee = session?.registration_fee

    // useEffect(() => {
    //     // fetch client secret
    //     if (session?.registration_fee && session?.registration_fee > 1) {
    //         getClientSecret({ registration_fee: session?.registration_fee })
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [session?.registration_fee])

    // //   get clientSecret
    // const getClientSecret = async registration_fee => {
    //     const { data } = await axiosCommon.post(`/create-payment-intent`, registration_fee)
    //     console.log('clientSecret from server--->', data)
    //     setClientSecret(data.clientSecret)
    // }

    useEffect(() => {
        if (registration_fee > 0) {
            axiosCommon.post('/create-payment-intent', { registration_fee: registration_fee })
                .then(res => {
                    console.log(res.data.clientSecret);
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
                    billing_details:{
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
                <button className='btn bg-blue-600' type="submit" disabled={!stripe}>
                    Pay
                </button>
                {/* <button type="submit" disabled={!stripe || !clientSecret }><CommonBtn title='Pay' /></button> */}
            </form>
            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
        </>
    );
};

export default CheckoutForm