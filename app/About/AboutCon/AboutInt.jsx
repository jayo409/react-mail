import React from 'react'

export default class AboutInt extends React.Component{

	render(){
		return (
			<div className="about-list integration">
        		<div className="comWidth">
        		    <ul>
        		        <li>
        		            <span className="integration-img integration-img1"></span>
        		            <span className="integration-tit">微信</span>
        		            <p>绑定微信，启用即时邮件提醒、安全动态密码、扫描登录等快捷功能</p>
        		        </li>
        		        <li>
        		            <span className="integration-img integration-img2"></span>
        		            <span className="integration-tit">企业微信</span>
        		            <p>开通可从腾讯企业邮箱导入通讯录、 内嵌邮件收发，一体化办公体验</p>
        		        </li>
        		        <li className="li-last">
        		            <span className="integration-img integration-img3"></span>
        		            <span className="integration-tit">Foxmail</span>
        		            <p>新版Foxmail免去帐号配置，还可实时同步地址本和日历</p>
        		        </li>
        		        <li>
        		            <span className="integration-img integration-img4"></span>
        		            <span className="integration-tit">腾讯云</span>
        		            <p>腾讯云提供域名托管和解析、SSL证书申请等服务</p>
        		        </li>
        		        <li>
        		            <span className="integration-img integration-img5"></span>
        		            <span className="integration-tit">qq邮箱</span>
        		            <p>与腾讯企业邮帐号关联，实现邮件代收，获得即时邮件提醒</p>
        		        </li>
        		        <li className="li-last">
        		            <span className="integration-img integration-img6"></span>
        		            <span className="integration-tit">QQ</span>
        		            <p>与QQ绑定，QQ面板即时邮件提醒，还可一键登录腾讯企业邮箱</p>
        		        </li>
        		    </ul>
        		</div>
            </div>
		)
	}
}