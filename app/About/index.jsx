import React from 'react'


import PageBan from '../PageBan/index.jsx'
import AboutNav from './AboutNav/index.jsx'
import AboutCon from './AboutCon/index.jsx'
import './style.scss'

class About extends React.Component{

	constructor(){
		super();
		this.state ={
			aboutNavList : [
				{tit: "产品优势",key: 0,className: "ac"},
				{tit: "详细功能",key: 1,className: ""},
				{tit: "整合方案",key: 2,className: ""}
			],
			aboutLine : 0,
			aboutConH : "1740px",
			aboutConL : 0
		}
	}

	clickNav(key){
		switch (key){
			case 0:
				this.setState({
					aboutNavList : [
						{tit: "产品优势",key: 0,className: "ac"},
						{tit: "详细功能",key: 1,className: ""},
						{tit: "整合方案",key: 2,className: ""}
					],
					aboutLine: key*235+'px',
					aboutConH: "1740px",
					aboutConL: 0
				})
				break;
			case 1:
				this.setState({
					aboutNavList : [
						{tit: "产品优势",key: 0,className: ""},
						{tit: "详细功能",key: 1,className: "ac"},
						{tit: "整合方案",key: 2,className: ""}
					],
					aboutLine: key*235+'px',
					aboutConH: "1800px",
					aboutConL: "-1200px"
				})
				break;
			case 2:
				this.setState({
					aboutNavList : [
						{tit: "产品优势",key: 0,className: ""},
						{tit: "详细功能",key: 1,className: ""},
						{tit: "整合方案",key: 2,className: "ac"}
					],
					aboutLine: key*235+'px',
					aboutConH: "750px",
					aboutConL: "-2400px"
				})
				break;
		}
	}

	render(){
		return (
			<div>
				<PageBan />
				<AboutNav 
					aboutNavList={this.state.aboutNavList}
					clickNav={this.clickNav.bind(this)}
					aboutLine={this.state.aboutLine}
				/>
				<AboutCon
					aboutConH={this.state.aboutConH}
					aboutConL={this.state.aboutConL}
				/>
			</div>
		)
	}
}

export default About