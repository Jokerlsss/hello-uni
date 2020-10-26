import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		isLogin: false,
		userInfo: {}
	},
	mutations:{
		// set是否登录标识
		set_login_flag(state){
			state.isLogin = true;
			console.log(state.isLogin)
		},
		// 登陆界面登录成功触发
		set_login(state, provider) {
			state.isLogin = true;
			state.userInfo = provider;
			uni.setStorage({
				key: 'userInfo',
				data: provider
			})
			console.log(state.userInfo)
		},
		// 主动退出登录
		set_logout(state){
			state.isLogin = false;
			state.userInfo = {}
			uni.removeStorage({
				key: 'userInfo'
			})
		}
	}
})

export default store