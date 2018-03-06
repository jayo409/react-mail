import React from 'react'

export default class AboutNav extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
    }

    clickNav(key){
        this.props.clickNav(key)
    }

	render(){

        let aboutNavList = [];
        this.props.aboutNavList.forEach((v,i) =>{
            aboutNavList.push(<li key={v.key} className={v.className} onClick={this.clickNav.bind(this,v.key)}><span></span>{v.tit}</li>);
        })

		return(
			<div className="about-nav">
                <div className="comWidth">
                	<ul ref="aboutNav">
                        {aboutNavList}
                	</ul>
                	<div className="about-nav-line" style={{left: this.props.aboutLine}}>
                	    <span className="amn3" ></span>
                	</div>
                </div>
			</div>
		)
	}
}