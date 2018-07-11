import { Modal } from 'antd-mobile';
import moment from 'moment';

// 获取url参数值
export function getQueryString(name) {
	const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	const r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

// 存储信息至localStorage 默认2小时有效
export function setStorage(key, val, expireTime = 2) {
	if (window.localStorage) {
		if (typeof val === 'object' && !(val instanceof Array)) {
			val.expireDate = moment().add(expireTime, 'hours').format("YYYY-MM-DD HH:mm:ss");
			let valStr = JSON.stringify(val);
			window.localStorage.setItem(key, valStr);
			return;
		} else {
			throw new Error('请存储Object类型数据');
		}
	}
}

// 存储信息至localStorage 永久有效
export function setForeverStorage(key, val) {
	if (window.localStorage) {
		if (typeof val === 'object' && !(val instanceof Array)) {
			let valStr = JSON.stringify(val);
			window.localStorage.setItem(key, valStr);
			return;
		} else {
			throw new Error('请存储Object类型数据');
		}
	}
}

// 从localStorage获取数据 过期删除
export function getStorage(key) {
	if (window.localStorage) {
		let objStr = window.localStorage.getItem(key);
		let obj = JSON.parse(objStr);
		let expireDate = obj ? obj.expireDate : moment().format("YYYY-MM-DD HH:mm:ss");
		if (moment().diff(moment(expireDate)) > 0) {
			return obj;
		} else {
			window.localStorage.removeItem(key);
			return null;
		}
	}
}

// 从localStorage获取永久数据
export function getForeverStorage(key) {
	if (window.localStorage) {
		let objStr = window.localStorage.getItem(key);
		let obj = JSON.parse(objStr);
		if (obj) {
			return obj;
		} else {
			return null;
		}
	}
}

// 验证登录是否失效
export function checkSession(key) {
	if (window.localStorage) {
		let info = window.localStorage.getItem(key);
		if (!info) {
			Modal.alert('提示', '登录已失效，请重新登录', [
				{ text: '确定', onPress: () => {
					window.location.href = "/getwxcode";
				}}
			]);
		}
	}
}
