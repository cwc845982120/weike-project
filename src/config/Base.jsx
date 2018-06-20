import React from 'react'
import axiox from '../common/http'
import { Toast } from 'antd-mobile';

export default class Base extends React.Component {

    //toast
    $toast(msg = "内容", durition = 3) {
        Toast.info(msg, durition);
    }

    //单个axios请求
    getResponse(url, params){
        // 开启Loading
        Toast.loading("加载中...", 0, () => {}, true);
        return new Promise( (resolve, reject) => {
            axiox.post(url, params).then( res => {
                // 关闭Loading
                Toast.hide();
                resolve(res);
            })
            .catch(e => {
                // 关闭Loading
                Toast.hide();
                Toast.offline("网络开小差...", 1, () => {}, true);
                resolve(e);
            })
        })
    }

    //多个个axios请求
    getAnyResponses(requests){
        const promises = Promise.all(requests);
        // 开启Loading
        Toast.loading("加载中...", 0, () => {}, true);
        return new Promise( (resolve, reject) => {
            promises.then( results => {
                // 关闭Loading
                Toast.hide();
                resolve(results);
            })
            .catch(e => {
                // 关闭Loading
                Toast.hide();
                Toast.offline("网络开小差...", 1, () => {}, true);
                resolve(e);
            })
        })
    }

}