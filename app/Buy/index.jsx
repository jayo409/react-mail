import React from 'react'

import PageBan from '../PageBan/index.jsx'
import BuyTable from './BuyTable/index.jsx'
import BuyForm from './BuyForm/index.jsx'
import './style.scss'

export default class Buy extends React.Component{

	render(){
		return (
			<div>
				<PageBan />
				<BuyTable />
				<BuyForm />
			</div>
		)
	}
}