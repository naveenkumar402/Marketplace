import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Payment = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    setLoading(false);

    if (error) {
      console.error(error);
    } else {
      console.log(token);
      onSuccess(); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={loading}>
        Pay
      </button>
    </form>
  );
};

export default Payment;
