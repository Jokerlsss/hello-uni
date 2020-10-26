<template>
	<view class="background">
		<image src="../../static/img/indexImg.png" style="width: 100%;height: 750rpx;"></image>
		<text>智能化生产及集团管控系统</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			console.log(this.$store.state.isLogin)
			this.login()
		},
		methods: {
			// 判断是否有登录缓存-->判断账号密码是否过期-->跳转对应页面
			async login() {
				let that = this
				let user = uni.getStorageSync('userInfo')
				if (user !== {}) {
					this.$request({
						url: '/login',
						method: 'POST',
						data: {
							userName: user.username,
							password: user.password
						}
					}).then(res => {
						if (res.data.isSuccess) {
							setTimeout(() => {
								// 跳转主页
								this.$store.commit('set_login_flag');
								uni.switchTab({
									url: '../form/index'
								});
							}, 3000);
						} else {
							setTimeout(() => {
								// 跳转登陆界面
								uni.redirectTo({
									url: '/pages/login/index'
								})
							}, 3000)
						}

					}).catch((err) => {
						setTimeout(() => {
							// 跳转登陆界面
							uni.redirectTo({
								url: '/pages/login/index'
							})
						}, 3000)
					})
				} else {
					setTimeout(() => {
						// 跳转登陆界面
						uni.redirectTo({
							url: '/pages/login/index'
						})
					}, 3000)
				}
			}
		}
	}
</script>

<style>
	.background {
		width: 100%;
		height: 750rpx;
		/* 	background-image: url(../../static/img/indexImg.png);
	background-size:auto; */
		text-align: center;
	}
</style>
