import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollections} from '../../redux/shop/shop-selectors';

import './Collection-Overview.scss';
import CollectionPreview from '../Collection-Preview/Collection-Preview';

const CollectionOverview = ({collections}) => {
	return (
     <div className='collections-overview'>
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
})

export default connect(mapStateToProps)(CollectionOverview);