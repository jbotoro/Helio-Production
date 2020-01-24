import React from 'react';
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_BoxtTc1QNzZLYIvfU3tQy5U200j5ZIJrym";

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return (
      <StripeCheckout
        label="Pay Now"
        name="Helio"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is  $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    );
}

export default StripeCheckoutButton;