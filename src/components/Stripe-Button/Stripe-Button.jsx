import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
	const priceforStripe = price*100;
	const publishKey = 'pk_test_51Jemj7JuNvlr0BgnBVfb6INJGWdxbSLLtu4kDpPkP9aabRggE7hBbsT6hBTvXI2KFJhwHfwR74DKwSGC6J5SNK3q00zhNL38wz';
	const onToken = token => {
    axios({
        url : 'https://flx-stripe-api.herokuapp.com/payment',
        method : 'post',
        headers : {'Content-Type': 'application/json'},
        data : {
            amount : priceforStripe,
            token
        }
    }).then(response => {
        console.log(response)
        alert('Payment Successful')
    }).catch(err => {
        console.log('Payment error:', JSON.parse(err))
        alert('There was an issue with your payment, please make sure you use the provided credit card');
    })
	}
	return (
     <StripeCheckout
      label = 'Pay Now'
      name = ' Flx Clothing Ltd'
      billingAddress
      shppingAddress
      image='https://flxwallet.com/images/flx_logo.png'
      description = {`Your Total is $${price}`}
      amount = {priceforStripe}
      panelLabel = 'Pay Now'
      token ={onToken}
      stripeKey = {publishKey}
      />
		)
}

export default StripeCheckoutButton;
