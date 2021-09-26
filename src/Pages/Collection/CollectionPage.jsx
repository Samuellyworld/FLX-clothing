import React from 'react';
import './CollectionPage.scss';

import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop-selectors';


const CollectionPage = ({collection}) => {
  console.log(collection);
	return (
		<div className='category'>
           <h1> category page </h1>
       </div>	
		)
  
} 
	

const mapStateToProps = (state, ownProps) => ({
	collection : selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);