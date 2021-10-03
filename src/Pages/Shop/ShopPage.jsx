 import React,{Component} from 'react';
import CollectionOverview from '../../components/Collection-Overview/Collection-Overview';
import {Route} from 'react-router-dom';
import CollectionPage from '../Collection/CollectionPage';
import WithSpinner from '../../components/With-Spinner/With-Spinner';

import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop-selectors';
import {connect} from 'react-redux';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop-action';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class ShopPage extends Component {
	

  
componentDidMount() {
	 const {fetchCollectionsStartAsync} = this.props
       fetchCollectionsStartAsync()
	}

 render () {
 
   const {match, isCollectionFetching, isCollectionsLoaded} = this.props

     return (
			<div className='shop-page'>
			 <Route exact path={`${match.path}`} render={props=> 
			 	(<CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}
			 	 />
			 	 )}
			  />
             <Route path={`${match.path}/:collectionId`} render={props => 
             	(<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}
             	/>
             	) }
              />
			</div> 
			)

 }




	
	}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching : selectIsCollectionFetching,
	isCollectionsLoaded : selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);