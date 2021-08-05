import React from 'react';
import './Checkout-Item.scss';

const CheckoutItem = ({cartItem : {imageUrl, name, quantity, price}}) => (
    <div className='checkout-item'>
     <div className='image-container'>
      <img alt='item' src={imageUrl}/>
     </div>
     <span className='name'>{name} </span>
     <span className='quantity'>{quantity} </span>
     <span className='price'> {price}</span>
     <span className='remove-button'>&#10005; </span>
    </div>
	);

export default CheckoutItem;