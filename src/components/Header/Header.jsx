import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart-selectors';
import {selectCurrentUser} from '../../redux/user/user-selectors';
import {clearCart} from '../../redux/cart/cart-action';

import './Header.scss';
import {auth} from '../../firebase/firebase';
import {Link} from 'react-router-dom';
import CartIcon from '../Cart-Icon/Cart-Icon';
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown';
import img from '../../assets/logo.png';



const Header = ({currentUser, hidden, clearCart}) => (
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
		  {
		  	currentUser ? (
		  	  <Link className='option' onClick={()=> {
		  	  	auth.signOut()
		  	  	clearCart()
		  	  }}>
		  	    SIGN OUT
		  	   </Link>
		  		) :
		  		(
		  		<Link className='option' to='/signin' >
		  			 SIGN IN
     			</Link>
		  		)
		  }
		     <CartIcon/>
		  </div>
		  {
		  	hidden ? null : <CartDropdown/>
		  }
       
		</div>

	)
const mapDispatchToProps = (dispatch) => ({
	clearCart : clear => dispatch(clearCart(clear))
})
const mapStateToProps = createStructuredSelector({
	currentUser : selectCurrentUser,
	hidden : selectCartHidden
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);