
import wepy from 'wepy'
import testMixin from '../mixins/test'

export default class BasePage extends wepy.page {
  config = {
    
  }
  components = {
    
  }

  mixins = [testMixin]

  data = {
    userInfo: {
      nickName: '加载中...'
    }
  }

  computed = {
  }

  methods = {
    
  }

  onLoad() {
   
  }

  onShareAppMessage(res) {
    return {
      title: 'Mini-Music:超级好听的在线歌曲~',
      path: '/pages/network',
      imageUrl: '../images/logo.png'
    }
  }
}
