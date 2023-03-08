import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';





const CheckoutForm = () => {
    const [cardError,setcardError]=useState('');
    const stripe=useStripe();
    const elements =useElements();
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return

        }
        const card = elements.getElement(CardElement);
        if(card===null){
            return;
        }
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log(error);
            setcardError(error.message);

        }
        else{
            setcardError('');
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
                color: '#424770',
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
        <button className='btn btn-primary sm mt-4' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
          <p className='text-danger'>{cardError}</p>
        </>
    );
};

export default CheckoutForm;