import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItemsCount} from '../../redux/cart/cart-selectors';
import {toggleCartHidden} from '../../redux/cart/cart-action';


import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './Cart-Icon.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
   <ShoppingIcon className='shopping-icon'/> 
   <span className='item-count'>{itemCount}</span>
  </div>
	);

const mapStateToProps = createStructuredSelector({
  itemCount : selectCartItemsCount
})
const mapDispatchToProps = dispatch =>  ({
	toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);