import React from 'react'

import { Link } from 'react-router'

class Header extends React.Component{

	constructor(){
		super();
		this.state ={
			headT: -67+'px'
		}
	}

	componentDidMount(){
		
		window.onscroll = () =>{
			let top  = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			this.setState({
				headT: top>30 ? 0 : -67+"px"
			})
		}
	}

	render(){
		return (
			<header className="header">
				<div className="header1">
					<div className="header-bg"></div>
					<div className="header-con">
						<div className="comWidth">
							<Link to="/" className="header-logo fl"></Link>
							<ul className="header-nav fl">
							{this.props.nav}
                			</ul>
                			<div className="header-tel fr">
                			    <span>0577-86859991</span>
                			</div>
                		</div>
                	</div>
				</div>
				<div className="header2" style={{top: this.state.headT}}>
					<div className="header-bg"></div>
					<div className="header-con">
						<div className="comWidth">
							<Link to="/" className="header-logo fl"></Link>
							<ul className="header-nav fl">
							{this.props.nav}
                			</ul>
                			<div className="header-tel fr">
                			    <span>0577-86859991</span>
                			</div>
                		</div>
                	</div>
				</div>
			</header>
		)
	}
}

export default Header