import React from 'react';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart-selectors';
import {createStructuredSelector} from 'reselect'
import {toggleCartHidden} from '../../redux/cart/cart-action';

import CartItem from '../Cart-Item/Cart-Item';
import CustomButton from '../Custom-Button/Custom-Button';

import './Cart-Dropdown.scss';

const CartDropdown =({cartItems, history, dispatch}) => (
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
		  	 history.push('/checkout')
		  	 dispatch(toggleCartHidden())
		  	}}>
	  			  GO TO CHECKOUTS </CustomButton>
	 </div>
		);

const mapStateToProps = createStructuredSelector({
   cartItems : selectCartItems
	})
export default withRouter(connect(mapStateToProps)(CartDropdown))
;