import wepy from 'wepy'

export default class ToastUtil {
	static showToast(msg) {
		wepy.showToast({
			title: msg,
		});
	}
}