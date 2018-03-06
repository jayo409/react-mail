import React from 'react'

export default class BuyForm extends React.Component{

	render(){
		return (
			<div className="comWidth">
            	<form className="apply" id="apply">
            	    <div className="apply-tit">
            	        <span>购买登记</span>
            	    </div>
            	        <input type="text" name="" placeholder="姓名：" className="apply-name" />                   	 
            	        <input type="text" name="" placeholder="联系号码：" className="apply-num fr" />           	             	    
            	        <textarea placeholder="备注：如购买数、公司名称地点等" className="apply-txt"></textarea>    
            	    <input type="submit" name="" value="提交"  className="apply-btn" />
            	</form>
            </div>
		)
	}
}