 import React from 'react';
import CollectionOverview from '../../components/Collection-Overview/Collection-Overview';
import {Route} from 'react-router-dom';
import CollectionPage from '../Collection/CollectionPage';


const ShopPage = ({match}) => {
		return (
			<div className='shop-page'>
			 <Route exact path={`${match.path}`} component={CollectionOverview} />
             <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
			</div> 
			)
	}


export default ShopPage;