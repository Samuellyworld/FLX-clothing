 import React,{Component} from 'react';
import CollectionOverview from '../../components/Collection-Overview/Collection-Overview';
import {Route} from 'react-router-dom';
import CollectionPage from '../Collection/CollectionPage';
import WithSpinner from '../../components/With-Spinner/With-Spinner';

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop-action';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class ShopPage extends Component {
	
  state = {
  		loading : true
  	}
 
 unsubscribeFromSnapshot = null;
  
componentDidMount() {
	const {updateCollections} = this.props
	 const collectionRef = firestore.collection('collections')
	  collectionRef.onSnapshot(async snapshot => {
       const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        updateCollections(collectionsMap);
       this.setState({loading : false})
	  })

	}

 render () {
  const {loading} = this.state
   const {match} = this.props

     return (
			<div className='shop-page'>
			 <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner IsLoading={loading} {...props}/>} />
             <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner IsLoading={loading} {...props}/> } />
			</div> 
			)

 }




	
	}
const mapDispatchToProps = dispatch => ({
	updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);