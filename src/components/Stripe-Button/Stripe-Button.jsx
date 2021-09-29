import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
	const priceforStripe = price*100;
	const publishKey = 'pk_test_51Jemj7JuNvlr0BgnBVfb6INJGWdxbSLLtu4kDpPkP9aabRggE7hBbsT6hBTvXI2KFJhwHfwR74DKwSGC6J5SNK3q00zhNL38wz';
	const onToken = token => {
		console.log(token);
       alert('Payment Successful')
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
