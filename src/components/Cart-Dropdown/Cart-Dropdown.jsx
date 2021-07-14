import React from 'react';
import CustomButton from '../Custom-Button/Custom-Button';
import './Cart-Dropdown.scss';

const cartDropdown =() => (
	 <div className='cart-dropdown'>
	  <div className='cart-items'/>
	  <CustomButton> GO TO CHECKOUTS </CustomButton>
	 </div>
		);

export default cartDropdown;