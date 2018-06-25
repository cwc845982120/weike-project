import { Modal } from 'antd-mobile';

// 获取url参数值
export function getQueryString(name) {
	const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	const r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

// 存储信息至sessionStorage
export function setStorage(key, val) {
	if (window.sessionStorage) {
		if (typeof val === 'object') {
			let valStr = JSON.stringify(val);
			window.sessionStorage.setItem(key, valStr);
			return;
		}
		window.sessionStorage.setItem(key, val);
	}
}

// 从sessionStorage获取数据
export function getStorage(key) {
	if (window.sessionStorage) {
		window.sessionStorage.getItem(key);
	}
}

// 验证登录是否失效
export function checkSession(key) {
	if (window.sessionStorage) {
		let info = window.sessionStorage.getItem(key);
		if (!info) {
			Modal.alert('提示', '登录已失效，请重新登录', [
				{ text: '确定', onPress: () => {
					window.location.href = "/getwxcode";
				}}
			]);
		}
	}
}
