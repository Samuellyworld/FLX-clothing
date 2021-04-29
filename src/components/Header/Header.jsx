import React from 'react';
import './Header.scss';

import {Link} from 'react-router-dom';
import img from '../../assets/logo.png';



const Header = () => (
		<div className='header'>
		  <Link className='logo-container' to='/'>
		  	<img src={img} alt='logo' className='logo'/>
		  </Link>
		  <div className='options'>
		  <Link className='option' to='/shop'>
		  	SHOP
		  </Link>
		  <Link className='option' to='/shop'>
		  	CONTACT
		  </Link> 
		  </div>

		</div>

	)

export default Header;