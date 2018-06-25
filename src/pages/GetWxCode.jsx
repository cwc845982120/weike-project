import React from 'react'
import Base from '../config/Base'
import { appId, redirectUrl, wxScope, redirectState } from '../config/config'

class GetWxCode extends Base {
    // 获取code
    componentDidMount() {
        this.setTitle('申请授权');
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=${wxScope}&state=${redirectState}#wechat_redirect`;
    }

    render() {
      	return (
        	<div></div>
      	);
    }
}

export default GetWxCode;
