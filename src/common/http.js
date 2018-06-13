import axios from 'axios';

let mode = process.env.NODE_ENV === 'production' ? 2 : 1; // 0:本地 1:测试 2:生产;

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers = {
	'Content-Type': 'application/json;charset=utf-8'
};

if (mode === 0) {
	axios.defaults.baseURL = 'https://mock.caowencheng.cn/mock';
} else if (mode === 1) {
	axios.defaults.baseURL = 'https://mock.caowencheng.cn/mock'; // 测试
} else if (mode === 2) {
	axios.defaults.baseURL = 'https://mock.caowencheng.cn/mock'; // 生产
}

// http request 拦截器
axios.interceptors.request.use(
	config => {
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
		let errResult = {
			code: -1,
			msg: '连接服务器失败'
		};
		return Promise.reject(errResult);
	});

export default axios;
