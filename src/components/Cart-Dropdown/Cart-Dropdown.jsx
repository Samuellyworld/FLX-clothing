import React from 'react';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart-selectors';
import {selectCurrentUser} from '../../redux/user/user-selectors';
import {createStructuredSelector} from 'reselect'
import {toggleCartHidden} from '../../redux/cart/cart-action';

import CartItem from '../Cart-Item/Cart-Item';
import CustomButton from '../Custom-Button/Custom-Button';

import './Cart-Dropdown.scss';

const CartDropdown =({cartItems, history, dispatch, currentUser}) => (
	 <div className='cart-dropdown'>
	  <div className='cart-items'>
	  {
	  	 cartItems.length ? 
		   (cartItems.map(cartItem => 
		  		<CartItem key={cartItem.id} item={cartItem} />
		  		) ) :
		  ( <span className="empty-message"> Your cart is empty
          </span>	)
		}
	  </div>

	  <CustomButton 
	    onClick={ () => {
	    	currentUser ? history.push('/checkout') : alert('Please Kindly Login to process your payment') 
		  	 dispatch(toggleCartHidden())
		  	}}>
	  			  GO TO CHECKOUTS </CustomButton>
	 </div>
		);

const mapStateToProps = createStructuredSelector({
   cartItems : selectCartItems,
   currentUser : selectCurrentUser
	})
export default withRouter(connect(mapStateToProps)(CartDropdown))
;