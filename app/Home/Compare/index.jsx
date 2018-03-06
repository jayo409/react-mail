import React from 'react'
import { Link } from 'react-router'

export default class Compare extends React.Component{

	constructor(){
		super();
		this.state ={
			calOut: 0,
			calIn: '',
			notice: ''
		}
	}

	ChangeVal(e){
		this.setState({
			calIn: e.target.value
		})
		let val = e.target.value,
			reg = /^[1-9][0-9]*$/,
			count = val%10 > 5 ? 1 : 0 ;
		if(reg.test(val)){
			if(val<5){
				this.setState({
					calOut: 0,
					notice: "购买数必须大于等于5！"
				})
			}else if(val>500){
				this.setState({
					calOut: 0,
					notice: "用户数过大，请直接与经销商联系！"
				})				
			}else{
				this.setState({
					notice: "",
					calOut: (150-parseInt(val/10)-count)*val
				})
			}
		}else{
			this.setState({
				calOut: 0,
				notice: "请输入正整数！"
			})
		}
	}

	render(){
		return (
			<div className="compare">
				<div className="comWidth">
					<div className="compare-tit">专业、安全、专属定制的企业邮箱服务</div>
					<div className="compare-con">
						<div className="compare-con-box box1">
							<div className="t1">5位用户</div>
							<div className="t3">
								<span className="sp1 fl">750</span>
								<span className="sp2 fr">RMB<br  />元起</span>
							</div>
							<Link className="link amn3" to="/about">了解更多</Link>
        		            <ul>
        		                <li>无限邮箱容量</li>
        		                <li>32G个人中转站</li>
        		                <li>5G企业网盘</li>
        		            </ul>
						</div>
						<div className="compare-con-box box2">
							<div className="t1">20位用户</div>
							<div className="t3">
								<span className="sp1 fl">2960</span>
								<span className="sp2 fl">RMB<br  />元起</span>
							</div>
							<Link className="link amn3" to="/about">了解更多</Link>
        		            <ul>
        		                <li>无限邮箱容量</li>
        		                <li>32G个人中转站</li>
        		                <li>20G企业网盘</li>
        		            </ul>
						</div>
						<div className="compare-con-box box3">
							<div className="t1">50位用户</div>
							<div className="t3">
								<span className="sp1 fl">7250</span>
								<span className="sp2 fr">RMB<br  />元起</span>
							</div>
							<Link className="link amn3" to="/about">了解更多</Link>
        		            <ul>
        		                <li>无限邮箱容量</li>
        		                <li>32G个人中转站</li>
        		                <li>50G企业网盘</li>
        		            </ul>
						</div>
					</div>
        		    <div className="compare-bot">
        		        <div className="calculation-top">
        		            购买流程
        		        </div>
        		        <div className="calculation-mid">
        		        	<ul className="fl">
        		        	    <li className="a">查询价格</li>
        		        	    <li className="b">申请登记</li>
        		        	    <li className="c">联系经销商</li>
        		        	    <li className="d">购买成功</li>
        		        	</ul>
        		        	<div className="calculation fr" >
        		        	    <span className="cal-icon"></span>
        		        	    <div className="cal-txt1">专业安全的邮箱服务，最低仅需
        		        	    <span className="cal-txt1a">750</span>
        		        	    元/年，帐号越多，优惠更多
        		        	    </div>
        		        	    <div className="cal-txt2">
        		        	        我想要购买
        		        	        <input type="text" className="cal-val" onChange={this.ChangeVal.bind(this)} value={this.state.calIn} />
        		        	        个用户
        		        	        <span className="cal-txt2a">{this.state.notice}</span>
        		        	    </div>
        		        	    <div className="cal-txt3">
        		        	        参考价格为：
        		        	        <span className="cal-result">{this.state.calOut}</span>
        		        	        <span className="cal-txt3a">元/年</span>
        		        	    </div>
        		        	</div>
        		        </div>
        		        <Link className="calculation-bot" to="/Buy">购买登记</Link>
        		    </div>
				</div>
			</div>
		)
	}
}