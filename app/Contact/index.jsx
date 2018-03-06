import React from 'react'
import PageBan from '../PageBan/index.jsx'
import './style.scss'


export default class Contact extends React.Component{

	componentDidMount () {
		var BMap = window.BMap
		var map = new BMap.Map("allmap"); 
		map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); 
		map.addControl(new BMap.MapTypeControl()); 
		map.setCurrentCity("北京"); 
		map.enableScrollWheelZoom(true); 
	}

	render(){
		return (
			<div>
				<PageBan />
    			<div className="page-contact">
    			    <div className="comWidth">
    			        <div className="contact-map fl" id="allmap">
    			        </div>
    			 
    			        <div className="contact-txt fr">
			
			
    			            <div>
    			            腾讯企业邮箱授予温州腾科网络科技有限公司，负责腾讯企业邮箱推广、销售及渠道拓展，多年来秉承以用户价值为依归的经营理念，将最优质的企业邮箱产品推荐给最需要的客户，同时为客户提供更专业的信息化指导和建议，提高客户企业的工作效率，取得客户的高度认同。 <br  />
    			            腾讯企业邮箱是一种邮件托管服务。企业仅需要将自己的域名进行简单的设置，就能够创建属于自己的邮局。并管理以自己域名结尾的邮箱帐号，把它们分给员工使用。秉承QQ邮箱一贯的稳定、简洁和快速，同时还整合了多种企业应用，涵盖资源共享、消息发布、组织管理等方面。无论你的企业是上千员工的跨国公司，还是几百人的中型企业，甚至是十几人的创业团队，腾讯企业邮箱都将帮助你的企业高效地开展每天的工作。<br  />
    			            <br  />
    			            电话：0577-86859991 <br  />
    			            邮箱：zhengfuyong@tenk.cn<br  />
    			            网址：www.tenk.cn
    			            </div>
    			        </div>
    			    </div>
    			</div>
			

			</div>
		)
	}
}