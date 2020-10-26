import Vue from 'vue'
import App from './App'
import { request } from './util/request.js'
// 提示框
import * as Toast from './util/toast.js'
// 通用文本
import * as TEXT from './common/text.js'
// 骨架屏
import skeleton from './components/xinyi-skeleton/skeleton.vue'
// uView-UI
import uView from 'uview-ui'
// 全局参数
import store from './store'
Vue.use(uView)

// ----- 组件注册 ----- 
Vue.component("v-skeleton",skeleton)

// ----- 原型挂载 ----- 
Vue.prototype.$request = request
Vue.prototype.$TEXT = TEXT
Vue.prototype.$Toast = Toast
Vue.prototype.$store = store

Vue.config.productionTip = false

// mpType 为了区分小程序页面组件
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()

export default {
	// 这部分相当于原生小程序的 app.json
	config: {
		pages: [],
		window: {
			backgroundTextStyle: 'light',
			navigationBarBackgroundColor: '#fff',
			navigationBarTitleText: 'first-uni-app',
			navigationBarTextStyle: 'black'
		}
	}
}
