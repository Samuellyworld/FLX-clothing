import React, {Component} from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './Error-Boundary-Styles'
import ErrorPage from '../../assets/404page.png';


class ErrorBoundary extends Component {
	constructor( ) {
		super();
		this.state = {
           error : false
		}

	}

   static getDerivedStateFromError(error) {
   	 return {
   	 	error : true
   	 }
   }

	componentDidCatch(error) {
		console.log(error)
	}

	render(){
	  if(this.state.error ){
	  	 	return(
               <ErrorImageOverlay>
                <ErrorImageContainer imageUrl ={ErrorPage} />
                <ErrorImageText> Sorry, This Page is Broken </ErrorImageText>
               </ErrorImageOverlay>
 
			)
	  }
	  return this.props.children
	}
}


export default ErrorBoundary;