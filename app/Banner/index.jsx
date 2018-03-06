import React from 'react'

import './style.scss'

class Banner extends React.Component{

	constructor(){
		super();
		this.state = {
			left: 0
		}
	}
	nextRun(){
		let i = -(this.state.left-100)/100 < this.props.bannerList.length ? this.state.left-100 : 0;
		this.setState({
			left: i
		})	
	}
	prevRun(){
		let i = -(this.state.left+100)/100 < 0 ? -(this.props.bannerList.length-1)*100 : this.state.left+100;
		this.setState({
			left: i
		})
	}
	handleMouse(e){
		switch(e.type){
			case 'mouseenter':
				clearInterval(this.timer);
				break;
			case 'mouseleave':
				this.timer = setInterval(() => {
					this.nextRun()
				},3000)
				break;
		}
	}
	render(){
		let index = 0,
			bannerList = [],
			ulW = this.props.bannerList.length*100+"%",
			ulStyle = {
				width: ulW,
				left: this.state.left+"%"
			},
			liStyle = {
				width: 100/this.props.bannerList.length+"%"
			};
			this.props.bannerList.forEach((v,i) => {
				bannerList.push(<li key={i} className={`banner${v}`} style={liStyle} ><img src={require(`../static/images/banner${v}.png`)} /></li>)
			})

		return(
			<div className="banner" onMouseEnter={this.handleMouse.bind(this)} onMouseLeave={this.handleMouse.bind(this)}>
				<ul className="banner-box" style={ulStyle} >
					{bannerList}
				</ul>
				<div className="banlBtn banBtn" onClick={this.prevRun.bind(this)}></div>
				<div className="banrBtn banBtn" onClick={this.nextRun.bind(this)}></div>
			</div>
		)
	}
	componentDidMount(){
		this.timer = setInterval(() => {
			this.nextRun()
		},3000)
	}
	componentWillUnmount(){
        clearInterval(this.timer);
    }
}

export default Banner