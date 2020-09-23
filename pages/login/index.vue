<template>
	<view class="container" :animation="animationData" :style="(ispdFocus || isuserFocus)?containerHeight.focus:containerHeight.blur">
		<view class="input-area">
			<view class="user-icon">
				<image :src="userImg" :style="isDisabledBtn?'opacity:0.5':'opacity:1'"></image>
			</view>
			<!-- input 框 -->
			<view class="input-text" :style="isuserFocus?input_boder_style.focus:input_boder_style.blur">
				<view :style="isuserFocus?label_style.focus:label_style.blur">
					帐 号
				</view>

				<u-input id="userInput" :focus="un" v-model="userLoginInfo.userName" type="text" class="input" :height="100"
				 placeholder="" :custom-style="customStyle" :clearable="false" @focus="userFocus" @blur="userBlur" />

				<view class="clear" @click="clearInput('userName')" v-show="userLoginInfo.userName!=='' && isuserFocus">
					<image :src="clearImg" class="img"></image>
				</view>
			</view>
			<view class="input-text" :style="ispdFocus?input_boder_style.focus:input_boder_style.blur">
				<view :style="ispdFocus?label_style.focus:label_style.blur">
					密 码
				</view>

				<u-input id="pdInput" :focus="pd" v-model="userLoginInfo.password" type="password" @input="inputEvent($event)"
				 :password-icon="false" class="input" :height="100" placeholder="" :maxlength="pdMaxLength" :custom-style="customStyle"
				 :clearable="false" @focus="pdFocus" @blur="pdBlur" />

				<view class="clear" @click="clearInput('password')" v-show="userLoginInfo.password!=='' && ispdFocus">
					<image :src="clearImg" class="img"></image>
				</view>
			</view>

			<!-- 登录按钮 -->
			<view class="btn">
				<u-button size="default" :loading="isLogining" :ripple="true" :custom-style="isDisabledBtn?login_btn_style.disabled:login_btn_style.able"
				 :disabled="isDisabledBtn" @click="login">{{isLogining?'':'登 录'}}</u-button>
			</view>

			<u-toast ref="uToast"></u-toast>
		</view>
		<view class="copy-right">CopyRight 2020.09.20 FZYK</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// ------------- 其他 -------------
				userLoginInfo: {
					userName: '',
					password: '',
					password_secret: ''
				},

				// 整体容器高度，单位 rpx

				// containerHeight: 1000,
				containerHeight: {
					focus: 'height:800rpx;transition:0.2s',
					blur: 'height:1300rpx;transition:0.2s'
				},

				// 获取焦点时，整体上移的动画效果
				animationData: {},

				// 登录界面的用户图标
				userImg: '../../static/img/user.png',

				// ------------- 输入框 -------------
				pdMaxLength: 10,
				// 输入框是否获取到焦点
				isuserFocus: false,
				ispdFocus: false,

				// 输入框自定义样式
				customStyle: {
					"padding-left": "40rpx",
					// 使光标消失（iOS无效果）
					"color": "transparent",
					"text-shadow": "0 0 0 #000"
				},

				// 清除按钮图标
				clearImg: '../../static/img/clear.png',

				// 输入框 label 样式
				label_style: {
					focus: 'width:100rpx;display:flex;justify-content:center;color:#FF5242;font-weight:bold;transform:scale(1.1)',
					blur: 'width:100rpx;display:flex;justify-content:center;color:#aaaaaa;transform:scale(1)'
				},

				input_boder_style: {
					focus: 'border-bottom: 1px solid #FF5242;',
					blur: 'border-bottom: 1px solid #e4e4e4;'
				},

				// ------------- 登录按钮 -------------
				// 登录按钮自定义样式
				login_btn_style: {
					able: {
						"width": "100%",
						"height": "100rpx",
						"border-radius": "20rpx",
						"border": "#e4e4e4",
						"background-color": "#FF5242",
						"color": "#fff"
					},
					disabled: {
						"width": "100%",
						"height": "100rpx",
						"border-radius": "20rpx",
						"border": "#e4e4e4",
						"background-color": "#FF5242",
						"color": "#fff",
						"opacity": "0.5"
					}
				},

				// 点击登录按钮后，接口返回数据前，对该操作上锁
				isLogining: false,

				un: false,
				pd: false
			}
		},
		computed:{
			// 按钮是否禁用
			// 注意：不能写在 data 中，否则当第一次进来就已经保存了上次登录的信息时，
			// 		不会触发 watch 中的 isDisabledBtn，导致按钮不可用
			isDisabledBtn(){
				if(this.userLoginInfo.userName!=='' && this.userLoginInfo.password!==''){
					return false
				}else{
					return true
				}
			}
		},
		methods: {
			// 输入时，将文本转换为密文
			/**
			 * e: 实时输入的内容
			 * password: 需要上传至后端的字符串
			 * password_secret: 展示加密样式的字符串
			 */
			inputEvent(e) {
				// 1. 判断当前是删除还是新输入（新输入：e.length > password.length）
				// if (e.length <= this.pdMaxLength) {
				// 	if (e.length > this.userLoginInfo.password.length) {
				// 		// 2. 	新输入：取最新输入的最后一位
				// 		// 3.   附加给 password 上
				// 		this.userLoginInfo.password += e.substring(e.length - 1)
				// 	} else {
				// 		// 4.	删除：按 password 最后一位开始减
				// 		this.userLoginInfo.password = this.userLoginInfo.password.substring(0, e.length)
				// 	}
				// }
				// 	// 5. 在输入并在数据更新后，再进行加密
				// 	// 必须要用 nextTick，否则会导致可能丢失部分字符
				// this.$nextTick(() => {
				// 		this.userLoginInfo.password_secret = this.userLoginInfo.password.replace(/./g, '●')
				// })
			},
			userFocus() {
				// 是否在焦点上
				this.isuserFocus = true
				this.ispdFocus = false
				console.log('user 获取焦点')
			},
			userBlur() {
				this.un = false
				
				setTimeout(() => {
					console.log('user 延迟失去焦点')
					this.isuserFocus = false
				}, 1)
			},

			pdFocus() {
				this.ispdFocus = true
				console.log('pd 获取焦点')
				// this.isuserFocus = false
			},
			pdBlur() {
				this.pd = false
				// 失去焦点事件先于清除事件触发，因此让其延迟即可先触发 clearInput 事件
				setTimeout(() => {
					console.log('pd 延迟失去焦点')
					this.ispdFocus = false
				}, 1)
			},

			// 清除 input 内容
			clearInput(value) {
				switch (value) {
					case 'userName':
						// 清空后让输入位置继续保持移动后的位置
						setTimeout(() => {
							this.userLoginInfo.userName = ''
							// 控制清空后，焦点仍停留在当前
							this.un = true
						}, 2)
						break
					case 'password':
						setTimeout(() => {
							this.userLoginInfo.password = ''
							this.pd = true
						}, 2)
						break
				}
			},

			async login() {
				if (this.isDisabledBtn) {
					// 登录按钮被禁用时
					this.$Toast.unCompleteToast()
				} else {
					// isLogining：显示按钮 loading 样式
					this.isLogining = true

					this.$request({
						url: '/login',
						method: 'POST',
						data: {
							userName: this.userLoginInfo.userName,
							password: this.userLoginInfo.password
						}
					}).then(res => {
						// 密码正确
						this.isLogining = false
						if (res.data.isSuccess) {
							this.$refs.uToast.show({
								title: '登录成功',
								type: 'success'
							})
							// todo 登录成功后跳转到首页
						}
					}).catch(() => {
						// 密码错误
						this.isLogining = false
						this.$refs.uToast.show({
							title: '帐号或密码错误',
							type: 'error'
						})
					})
				}
			}
		},
		onShow() {
			// 去除状态栏
			plus.navigator.setFullscreen(true);
		},
		watch: {
			userLoginInfo: {
				handler(newVal, oldVal) {
					if ((newVal.userName !== '') && (newVal.password !== '')) {
						this.isDisabledBtn = false
					} else {
						this.isDisabledBtn = true
					}
				},
				deep: true
			}
		}
	}
</script>

<style lang="scss">
	$screen-height:1334rpx;

	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-end;
		width: 100%;


		.input-area {
			width: 80%;

			.user-icon {
				width: 100%;
				display: flex;
				justify-content: center;

				>image {
					width: 150rpx;
					height: 150rpx;
				}
			}

			.input-text {
				display: flex;
				flex-wrap: nowrap;
				align-items: center;
				margin-top: 20rpx;

				.clear {
					height: 100rpx;
					display: flex;
					align-items: center;

					.img {
						height: 36rpx;
						width: 36rpx;
					}
				}
			}

			.btn {
				margin-top: 40rpx;

				.login-btn {
					width: 100%;
					border-radius: 20rpx;
					border: $uni-color-primary;
					background-color: $uni-color-primary;
					color: $uni-text-color-inverse;
				}
			}
		}

		.copy-right {
			// bottom: 100rpx;
			bottom: 0;
			width: 100%;
			color: $uni-text-color-grey;
			text-align: center;
			font-size: 24rpx;
		}
	}
</style>
