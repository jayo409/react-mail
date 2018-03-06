import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
class Footer extends React.Component{
	render(){
		return (
			<div className="footer">
    			<div className="footTop">
    			    <div className="comWidth">
    			        <div className="ftTxt fl">
    			            <ul className="footNav">

    			            	{this.props.nav}
    			            </ul>
    			            <ul className="footCon">
    			                <li className="a">温州市龙湾区科技创新大楼11楼</li>
    			                <li className="b">www.tenk.cn</li>
    			                <li className="c">0577-86859991</li>
    			                <li className="d">zhengfuyong@tenk.cn</li>
    			            </ul>
    			        </div>
    			        <div className="ftCode fr">
    			            <span>腾科网络小程序</span>
    			        </div>
    			    </div>

    			</div>
    			<div className="footBot">
    			        <div className="comWidth">
    			        <p>© 2009-2017 腾讯企业邮箱官方授权商- 温州腾科网络科技有限公司 版权所有</p>
    			    </div>
    			</div>      
    		</div>
		)
	}
}

export default Footer