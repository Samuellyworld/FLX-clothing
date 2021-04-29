import React from 'react';

import './Collection-Preview.scss';
import CollectionItem from '../Collection-Item/Collection-Item';

const CollectionPreview = ({title, items}) => (
		<div className='collection-preview'>
		 <h1 className='title'>{title.toUpperCase()} </h1>
		 <div className='preview'>
		  {items
		  	.filter((item, i) => i < 4)
		  	.map(({id, ...otherItemProps}) => (
		  	 <CollectionItem key={id} {...otherItemProps} />
		  	 ))
		  }
		 </div>
		</div>


)


export default CollectionPreview;