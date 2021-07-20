import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart-action';
import CustomButton from '../Custom-Button/Custom-Button';
import './Collection-Item.scss';

const CollectionItem = ({addItem, item}) => {
	const {imageUrl, name, price} = item
 return (
 	<div className='collection-item'>
	 <div className='image'
	      style={{
             backgroundImage: `url(${imageUrl})`
	      }}/>
	    <div className='collection-footer'>
	      <span className='name'> {name} </span>
	      <span className ='price'> {price} </span>
	    </div>
	    <CustomButton onClick={() => addItem(item)} inverted> add to cart </CustomButton>
	</div>
	)
}
	
const mapDispatchToProps = dispatch => ({
  addItem : item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);


