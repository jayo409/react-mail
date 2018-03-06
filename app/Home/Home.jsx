import React from 'react'

import Banner from '../Banner/index.jsx'
import Purpose from './Purpose/Purpose.jsx'
import Compare from './Compare/index.jsx'
import Experience from './Experience/index.jsx'
import IExh from './IExh/index.jsx'
import './style.scss'

class Home extends React.Component{
	constructor(props, context){
		super(props, context);
	}

	render(){
		let bannerList = [1,2,3];
		return(
			<div>
				<Banner bannerList={bannerList} />
				<Purpose />
				<Compare />
				<Experience />
				<IExh />
			</div>
		)
	}
}

export default Home