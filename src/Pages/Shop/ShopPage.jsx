 import React from 'react';
import CollectionOverview from '../../components/Collection-Overview/Collection-Overview';
import {Route} from 'react-router-dom';
import CategoryPage from '../Category/CategoryPage';


const ShopPage = ({match}) => {
		return (
			<div className='shop-page'>
			 <Route exact path={`${match.path}`} component={CollectionOverview} />
             <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
			</div> 
			)
	}



export default ShopPage;