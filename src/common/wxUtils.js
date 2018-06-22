import * as wxUtils from '../lib/wx-jssdk';
import { isProd, appId } from '../config/config';

// 初始化 jssdk
export function wxUtilsInit(timestamp, nonceStr, signature) {
	wxUtils.config({
		debug: !isProd, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: appId, // 必填，公众号的唯一标识
		timestamp: timestamp, // 必填，生成签名的时间戳
		nonceStr: nonceStr, // 必填，生成签名的随机串
		signature: signature, // 必填，签名
		jsApiList: [
			'checkJsApi',
			'onMenuShareTimeline',
			'onMenuShareAppMessage',
			'onMenuShareQQ',
			'onMenuShareQZone',
			'hideMenuItems',
			'showMenuItems',
			'hideAllNonBaseMenuItem',
			'showAllNonBaseMenuItem',
			'translateVoice',
			'startRecord',
			'stopRecord',
			'onVoiceRecordEnd',
			'playVoice',
			'onVoicePlayEnd',
			'pauseVoice',
			'stopVoice',
			'uploadVoice',
			'downloadVoice',
			'chooseImage',
			'previewImage',
			'uploadImage',
			'downloadImage',
			'getNetworkType',
			'openLocation',
			'getLocation',
			'hideOptionMenu',
			'showOptionMenu',
			'closeWindow',
			'scanQRCode',
			'chooseWXPay',
			'openProductSpecificView',
			'addCard',
			'chooseCard',
			'openCard'
		] // 必填，需要使用的JS接口列表
	});

	// 初始化
	wxUtils.ready(() => {
		console.log(`jssdk初始化完成`);
	});

	// jssdk初始化异常
	wxUtils.error((error) => {
		console.log(error);
	});
}

export default wxUtils;
