import React from 'react';
import './Checkout-Item.scss';
import {connect} from 'react-redux';
import {addItem, removeItem} from '../../redux/cart/cart-action';
import {clearItemFromCart} from '../../redux/cart/cart-action';

const CheckoutItem = ({cartItem, clearItem,removeItem, addItem }) => {
    const {imageUrl, name, quantity, price} = cartItem
  return (
         <div className='checkout-item'>
             <div className='image-container'>
              <img alt='item' src={imageUrl}/>
             </div>
             <span className='name'>{name} </span>
             <span className='quantity'>
               <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                 <span className='value'> {quantity} </span>
               <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
              </span>
             <span className='price'> {price}</span>
             <span className='remove-button'
                  onClick ={() => clearItem(cartItem)}
                  > 
                    &#10005; </span>
    </div>
        )
}
  

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);