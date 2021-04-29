import React from 'react';

import './Directory.scss';
import MenuItem from '../Menu-Item/MenuItem';
import DIRECTORY_DATA from './directory.data';

class Directory extends React.Component {
	constructor() {
		super();
        this.state = {
        	sections: DIRECTORY_DATA
        }
	}
	render() {
		return(
			<div className = 'directory-menu'>
			{
		      this.state.sections.map(({id, ...otherSectionProps}) => (
		      	<MenuItem key = {id}
		      	  {...otherSectionProps}
		      	  />
		      	))
			}
			</div>
			)
	}
}

export default Directory; 