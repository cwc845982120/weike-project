import axios from 'axios';
const querystring = require('querystring');

let mode = process.env.NODE_ENV === 'production' ? 1 : 0; // 0:本地 1:生产;

// axios 配置
axios.defaults.timeout = 30000;
axios.defaults.headers = {
	"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
};

if (mode === 0) {
	axios.defaults.baseURL = 'http://192.168.0.105:8080';
} else if (mode === 1) {
	axios.defaults.baseURL = 'https://mock.caowencheng.cn/mock'; // 生产
}

// http request 拦截器
axios.interceptors.request.use(
	config => {
		if (config.headers["Content-Type"] === "application/x-www-form-urlencoded;charset=UTF-8") {
			config.transformRequest = data => {
				return querystring.stringify(data);
			};
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	});

// http response 拦截器
axios.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		console.log(error);
		let errResult = {
			code: -1,
			msg: '连接服务器失败'
		};
		return Promise.reject(errResult);
	});

export default axios;
