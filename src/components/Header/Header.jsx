import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart-selectors';
import {selectCurrentUser} from '../../redux/user/user-selectors';
import {clearCart} from '../../redux/cart/cart-action';
import {selectMobileMedia} from '../../redux/media-query/query-selectors';

import './Header.scss';
import {auth} from '../../firebase/firebase';
import {Link} from 'react-router-dom';
import CartIcon from '../Cart-Icon/Cart-Icon';
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown';
import img from '../../assets/logo.png';



const Header = ({currentUser, hidden, clearCart, mobileMedia}) => (
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
		  	  
		  	  	mobileMedia === true?
		  	  	(
		  	    <div className="sign-in-options">
			  		<Link className='option ul' to='/signin' >
			  			 SIGN IN
	     			</Link>
	     			<Link className='option' to='/register' >
			  			 REGISTER
	     			</Link>
     			</div>
		  		) : 
		  		<Link className='option' to='/signin' >
		  			 SIGN IN
     			</Link>
		  	    		
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
	hidden : selectCartHidden,
	mobileMedia : selectMobileMedia
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);