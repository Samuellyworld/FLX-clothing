 import React from 'react';
 import {createStructuredSelector} from 'reselect';
 import {connect} from 'react-redux';
 import {selectCartTotal, selectCartItems} from '../../redux/cart/cart-selectors'; 

 import StripeCheckoutButton from '../Stripe-Button/Stripe-Button'; 
 import CheckoutItem from '../Checkout-Item/Checkout-Item';
 import './Checkout.scss';

 const Checkout = ({cartItems, total}) => (
     <div  className='checkout-page'>
      <div className='checkout-header'>
          <div className='header-block'>
           <span> Product </span>
          </div>
          <div className='header-block'>
           <span> Description </span>
          </div>
          <div className='header-block'>
           <span> Quantity </span>
          </div>
          <div className='header-block'>
           <span> Price</span>
          </div>
          <div className='header-block'>
           <span> Remove </span>
          </div>
      </div>
      {
       cartItems.map(cartItem => 
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
           )
      }
      <div className = 'total'>
         <span> TOTAL: ${total}</span>
      </div>
      <div className='test-warning'>
           *Please use the following test credit card for payments*
           <br/>
           4242 4242 4242 4242 - Exp: 03/22 -CVV : 123
       </div> 
      <StripeCheckoutButton price={total} /> 
     </div>
     )

 const mapStateToProps = createStructuredSelector({
     cartItems : selectCartItems,
     total : selectCartTotal
 })

 export default connect(mapStateToProps)(Checkout);