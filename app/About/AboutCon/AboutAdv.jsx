import React from 'react'

export default class AboutAdv extends React.Component{

	render(){
		return (
            <div className="about-adv about-list">
        		<div className="comWidth">
            		<div className="adv-box1">
            		   <div className="adv-box1-txt">
            		       <div className="adv-t1">微信：唯一能用微信收发的企业邮箱</div>
            		       <div className="adv-t2">
            		           <div className="adv-logo wechat"></div>
            		           <span>无需安装App，腾讯企业邮箱小程序随时随地收发邮件</span>        
            		       </div>
            		       <div className="adv-t3">
            		           <div className="adv-logo scan"></div>
            		           <span>微信扫一扫登录，无需登录密码，更加安全便捷</span>         
            		       </div>        
            		   </div>     
            		   <div className="adv-box1-img fr" style={{margin:'35px 0',position: 'relative',width:"365px",height:"450px"}}>          
            		       <img id="gif_1" src={require("../../static/images/adv-box1.gif")} style={{width: '555px',height: '480px'}} />       
            		   </div>
            		</div>
            		<div className="adv-box2">
            		    <div className="index_content_advantage_logo fl">
            		        <div className="advantage_logo advantage_logo_mobile"></div>
            		        <div className="advantage_logo advantage_logo_mail_card_bg"></div>
            		        <div className="advantage_logo advantage_logo_mail_card_list"></div>
            		        <div className="advantage_logo advantage_logo_mail_card_detail"></div>
            		        <div className="advantage_logo_mail_mask"></div>
            		        <div className="mouse_focus mouse_focus_3"></div>
            		        <div className="mouse_focus mouse_focus_4"></div>
            		    </div>
            		    <div className="adv-box1-txt">          
            		        <div className="adv-t1">整合：不仅是邮箱，更是一套整合方案</div>  
            		        <div className="adv-t2">           
            		            <div className="adv-logo ww"></div>            
            		            <span>企业微信内收发邮件，并转工作群讨论</span>         
            		        </div>         
            		        <div className="adv-t3">            
            		            <div className="adv-logo plat"></div>            
            		            <span>支持多平台、多终端和丰富的开放接口</span>         
            		        </div>        
            		    </div>     
            		</div>

            		<div className="adv-box3">
            		    <div className="index_content_advantage_logo fr">       
            		        <div className="advantage_logo advantage_logo_safe_mask" ></div>        
            		        <div className="advantage_logo advantage_logo_safe"></div>        
            		        <div className="advantage_logo advantage_logo_safe_line" ></div>        
            		        <div className="advantage_logo advantage_logo_mail" ></div>      
            		        <div className="advantage_logo advantage_logo_user" ></div>      
            		        <div className="advantage_logo advantage_logo_lock" ></div> 
            		    </div>
            		    <div className="adv-box1-txt">          
            		        <div className="adv-t1">整合：不仅是邮箱，更是一套整合方案</div>  
            		    
            		        <div className="adv-t2">           
            		            <div className="adv-logo ww"></div>            
            		            <span>企业微信内收发邮件，并转工作群讨论</span>         
            		        </div>         
            		        <div className="adv-t3">            
            		            <div className="adv-logo plat"></div>            
            		            <span>支持多平台、多终端和丰富的开放接口</span>         
            		        </div>        
            		    </div> 
            		</div>
        		</div>
         	</div>
  
		)
	}
}