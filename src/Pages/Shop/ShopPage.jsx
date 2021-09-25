 import React from 'react';
 import {createStructuredSelector} from 'reselect';
 import {connect} from 'react-redux';
 import {selectShopCollections} from '../../redux/shop/shop-selectors';
import CollectionPreview from '../../components/Collection-Preview/Collection-Preview';

const ShopPage = ({collections}) => {
		return (
			<div className='shop-page'>
			{
		      collections.map(({id, ...otherCollectionProps}) => (
		      	<CollectionPreview key={id} {...otherCollectionProps} />
		      	))
			}
			</div> 

			)
	}


const mapStateToProps = createStructuredSelector({
	collections : selectShopCollections
});


export default connect(mapStateToProps)(ShopPage);