import wepy from 'wepy'
export default class HttpRequest {
	
	static getMusicList = (type) => {
		let size = 20;
		wepy.request({
			url: "https://tingapi.ting.baidu.com/v1/restserver/ting",
			method: "GET",
			data: {
				"type": type,
				"method": "baidu.ting.billboard.billList",
				"size": size,
				"offset": (size - 20)
			},
			dataType: "json",
			success: function(res) {
				console.log(res);
			},
			fail: function(res) {
				console.log(res);
			},
			complete: function(res) {
				console.log(res);
			}
		});
	}
}