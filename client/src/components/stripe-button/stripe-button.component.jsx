import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_BoxtTc1QNzZLYIvfU3tQy5U200j5ZIJrym";

    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token
          }
        }).then(response => {
          alert('Payment Successful')
        }).catch(error => {
          console.log('Payment error: ', JSON.parse(error))
          alert(
            'There was an issue with your payment. Please make sure you are using the test credit card information provided'
          )
        })
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