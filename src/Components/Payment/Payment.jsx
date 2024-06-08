import SectionTitle from "../../Shared/SectionTitle";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY)

const Payment = () => {
    return (
        <div className="pt-24">
            <SectionTitle heading='Payment now' subHeading="This is payment page" />
            <div className='flex flex-col mb-10 mx-auto md:w-1/2 px-5'>
                <Elements stripe={stripePromise}>
                    {/* checkout form */}
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;