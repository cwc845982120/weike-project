import React from 'react';
import { appId, redirectUrl, wxScope, redirectState } from '../config/config';

class GetWxCode extends React.Component {

    // 获取code
    componentDidMount() {
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=${wxScope}&state=${redirectState}#wechat_redirect`;
    }

    render() {
      	return (
        	<div></div>
      	);
    }
}

export default GetWxCode;
