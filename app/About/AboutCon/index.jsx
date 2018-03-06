import React from 'react'

import AboutAdv from './AboutAdv.jsx'
import AboutDet from './AboutDet.jsx'
import AboutInt from './AboutInt.jsx'

export default class AboutCon extends React.Component{

	constructor(){
		super();
	}

	render(){
		return(
			<div className="about-con" style={{height: this.props.aboutConH}}>
				<div className="about-con-wrap" style={{left: this.props.aboutConL}}>
					<AboutAdv />
					<AboutDet />
					<AboutInt />
				</div>
			</div>
		)
	}
}