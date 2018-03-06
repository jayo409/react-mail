import React from 'react'
import { Link } from 'react-router'
import './style.scss'

import PageBan from '../PageBan/index.jsx'

export default class Questions extends React.Component{

	render(){
		return (
			<div>
				<PageBan />
				<div className="page-news">
        			<div className="comWidth">
            			<div className="page-news-nav fl">
            			    <ul>
            			        <li><Link to="#">热门问题</Link></li>
            			        <li><Link to="#">邮箱创建</Link></li>
            			        <li><Link to="#">特色功能</Link></li>
            			        <li><Link to="#">登录和退出</Link></li>
            			    </ul>
            			</div>
            			<div className="page-news-list fl">
            			    <div className="page-news-list-top">
            			        <div className="block fl"></div>
            			        <div className="page-news-tit fl">热门问题</div>
            			    </div>
            			    <div className="line"></div>
            			    <ul>
            			        <li><Link to="#">• oxmail提示错误: 由于连接方在一段有正确答复或连接的主机没有反应，连接尝试失败。</Link></li>
            			        <li><Link to="#">• oxmail提示错误: 由于连接方在一段连接的主机没有反应，连接尝试失败。</Link></li>
            			        <li><Link to="#">• oxmail提示错误: 由于连接方在一段答或连接的主机没有反应，连接尝试失败。</Link></li>
            			        <li><Link to="#">• oxmail提示错误: 由于连接方在一段答或连接的主机没有反应，连接尝试失败。</Link></li>
            			        <li><Link to="#">• oxm示错误: 由于连接方在一段时间答复或连接的主机没有反应，连接尝试失败。</Link></li>
            			        <li><Link to="#">• oxm示错误: 由于连接方在一段时间后没有正答复或连接的有反应，连接尝试失败。</Link></li>
            			        <li><Link to="#">• oxm示错误: 于连接方在一段时间连接的主机没有反应，连接尝试失败。</Link></li>
            			        <li><Link to="#">• oxm示错误: 于连接方在一段时间连接的主机没有反应，连接尝试失败。</Link></li>
            			        <li><Link to="#">• oxm示错误: 于连段时间连接的主机没有反应，连接尝试失败。</Link></li>
            			        <li><Link to="#">• oxm示错误: 由于连段时间连接的主机没有反应，连接尝试失败。</Link></li>
            			        <li><Link to="#">• oxm示错误: 由于连段时间机没有反应，连接尝试失败。</Link></li>
            			        <li><Link to="#">• oxm示错误: 由于连段时间机反应，连接尝试失败。</Link></li>
            			        <li><Link to="#">• oxmail提示错误: 由于连接方在一段时间机没有反应，连接尝试失败。</Link></li>
            			        <li><Link to="#">• oxmail提示错误: 由于连接方在一段时间没有正确答复连接的主机没有反应，连接尝试失败。</Link></li>
            			        <li><Link to="#">• oxmail提示错误: 由于连接段时间没有正确答复连接的主机没有反应，连接尝试失败。</Link></li>
            			    </ul>
            			</div>
    				</div>
    			</div>
			</div>
		)
	}
}