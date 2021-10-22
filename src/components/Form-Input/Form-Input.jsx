import React,{Component} from 'react';

import hide from '../../assets/hide.png';
import seen from '../../assets/seen.jpg'

import './Form-Input.scss';



class FormInput extends Component {
  constructor ( ) {
  	super()
  	this.state= {
  		showPassword : false
  	}
  }


 handleClickShowPassword = () => {
    this.setState({showPassword : !this.state.showPassword})
  }
  
  render(){
   const {handleChange, label, type, ...otherProps} = this.props;
   const {showPassword} = this.state

  	return (
      <div className='group'>

      {
      	label==='Display Name'  ? (
      		<input 
		    type= "text" 
		    className='form-input' 
		     onChange={handleChange}
		      {...otherProps}
		      /> 
      		) : null
        
      }

      {
      	 label==='Email' ? (
      		<input 
		    type= "email"
		    className='form-input' 
		     onChange={handleChange}
		      {...otherProps}
		      /> 
      		) : null
        
      }

         {
      	 label==='Email Address' ? (
      		<input 
		    type= "email"   
		    className='form-input' 
		     onChange={handleChange}
		      {...otherProps}
		      /> 
      		) : null
        
      }

      {
      	type==='password' ? (
          <input 
		    type= {showPassword? "text" : "password"  }
		    className='form-input' 
		     onChange={handleChange}
		      {...otherProps}
		      /> 
      		) : null
      }
		  

	     {
	     	label ?
	     	(<label 
	     	  className={`${
	     	  	otherProps.value.length ? 'shrink' : '' } form-input-label` }
	     	  	>
	     	  {label}
	     	  </label>
			) 
			  : null
	     }
	     {
	     	label==='Password' || label ==='Confirm Password' ? (
             <img alt='password hide' 
               src={showPassword? seen : hide}
               onClick={this.handleClickShowPassword} 
               /> 
	     		) : null
	     }
   </div>
	)
  }

}
	

	


export default FormInput;


