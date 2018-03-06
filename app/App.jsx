import React from 'react'
import { Link } from 'react-router'

import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'

class App extends React.Component {
    render() {
    	let navData = [
		{path:"/",title:"首页",key:0},
		{path:"/about",title:"邮箱介绍",key:1},
		{path:"/buy",title:"邮箱购买",key:2},
		{path:"/questions",title:"热点问题",key:3},
		{path:"/contact",title:"联系我们",key:4},
		],
		nav = [];
		navData.forEach((d,i) => {
            nav.push(<li key={i}><Link to={d.path}>{d.title}</Link></li>)
        });

        return (
        	<div>
        		<Header nav={nav}/>
            	<div>{this.props.children}</div>
            	<Footer nav={nav}/>
            </div>
        )
    }
}

export default App