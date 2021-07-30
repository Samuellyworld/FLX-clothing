import React from 'react';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart-selectors';
import {createStructuredSelector} from 'reselect'

import CartItem from '../Cart-Item/Cart-Item';
import CustomButton from '../Custom-Button/Custom-Button';
import './Cart-Dropdown.scss';

const CartDropdown =({cartItems}) => (
	 <div className='cart-dropdown'>
	  <div className='cart-items'>
	  {
	  	cartItems.map(cartItem => 
	  		<CartItem key={cartItem.id} item={cartItem} />
	  		)
	  }
	  </div>

	  <CustomButton> GO TO CHECKOUTS </CustomButton>
	 </div>
		);

const mapStateToProps = createStructuredSelector({
   cartItems : selectCartItems
	})
export default connect(mapStateToProps)(CartDropdown)
;