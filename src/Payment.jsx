import { useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "./CheckoutForm.jsx"
import { Elements } from "@stripe/react-stripe-js"

function Payment() {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("")
    useEffect(() => {
        fetch('http://localhost:4500/api/config').then( async (r) => {
            const { publishableKey } = await r.json();
            console.log("You public key is : ", publishableKey)
            // recordar colocar el loadStripe
            setStripePromise(loadStripe(publishableKey))
        })
    },[])

    useEffect(() => {
        fetch('http://localhost:4500/api/create-payment-intent', {
            method: 'POST',
            body: JSON.stringify({})
        }).then( async (r) => {
            const { clientSecret } = await r.json();
            console.log("You secret key is : ", clientSecret)
            setClientSecret(clientSecret)
        })
    },[])

    
  return (
    <>
        <h1>React Stripe and the Payment Element</h1>
        <div>Payment</div>
        <p>Aqui vas a pagar</p>
        {
            stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }} >
                    <CheckoutForm/>
                </Elements>
            )}
    </>
  )
}

export default Payment