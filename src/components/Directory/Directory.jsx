import React from 'react';

import './Directory.scss';
import MenuItem from '../Menu-Item/MenuItem';


 import {createStructuredSelector} from 'reselect';
 import {connect} from 'react-redux';
 import {selectDirectorySections} from '../../redux/directory/directory-selectors';

const Directory =({sections}) => {
		return(
			<div className = 'directory-menu'>
			{
		      sections.map(({id, ...otherSectionProps}) => (
		      	<MenuItem key = {id}
		      	  {...otherSectionProps}
		      	  />
		      	))
			}
			</div>
			)
	
}
	


const mapStateToProps = createStructuredSelector({
	sections : selectDirectorySections
})

export default connect(mapStateToProps)(Directory); 