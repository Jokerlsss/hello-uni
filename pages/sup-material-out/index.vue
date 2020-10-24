<template>
	<view class="container" :style="'height:'+containerHeight+'rpx'">
		<!-- 主表信息 -->
		<view class="main-title">
			<text class="main-title-text">主表信息</text>
		</view>

		<view class="main-input">
			<u-form :model="form" ref="uForm" label-position="true">
				<u-form-item label="出库单号" label-width="140" :label-style="label_style">
					<!-- cursor-spacing=0 光标与键盘的高度 -->
					<u-input v-model="form.num" placeholder="请输入出库单号" cursor-spacing="0" class="uni-input"/>
				</u-form-item>
				<u-form-item label="出库类型" label-width="140" required :label-style="label_style">
					<u-input v-model="form.type" cursor-spacing="0"  class="uni-input"/>
				</u-form-item>
				<u-form-item label="出库日期" label-width="140" required :label-style="label_style">
					<u-input v-model="form.date" cursor-spacing="0"  class="uni-input"/>
				</u-form-item>
				<u-form-item label="仓库" label-width="140" required :label-style="label_style">
					<u-input v-model="form.store" cursor-spacing="0"  class="uni-input"/>
				</u-form-item>
				<u-form-item label="领料人" label-width="140" required :label-style="label_style">
					<u-input v-model="form.man" cursor-spacing="0"  class="uni-input"/>
				</u-form-item>
				<u-form-item label="领料部门" label-width="140" required :label-style="label_style">
					<u-input v-model="form.department" cursor-spacing="0"  class="uni-input"/>
				</u-form-item>
				<u-form-item label="签字" label-width="140" required :label-style="label_style">
					<u-input v-model="form.signature" cursor-spacing="0"  class="uni-input"/>
				</u-form-item>
				<u-form-item label="备注" label-width="140" :label-style="label_style">
					<u-input v-model="form.note" type="textarea" cursor-spacing="0" class="uni-input"/>
				</u-form-item>
			</u-form>
		</view>

		<!-- 明细表 -->
		<view class="main-title"> 
			<text class="main-title-text">明细信息</text>
		</view>

		<!-- 新增明细按钮 -->
		<view style="width: 100%;padding-top: 20rpx;">
			<button @click="showDetailPage" type="default" class="add-btn">+</button>
		</view>
		<u-gap height="80" bg-color="#fff"></u-gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowPopup: false,
				// 父容器高度
				containerHeight: 500,
				// 弹出层高度
				popupHeight: 0,

				form: {
					num: '',
					type: '',
					date: '',
					store: '',
					man: '',
					department: '',
					signature: '',
					note: ''
				},

				label_style: {
					"font-size": "24rpx",
					"color": "#666"
				}
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					if (res.platform === 'android') {
						// todo 安卓端 realme 仍会有部分可滚动区域，但总体不影响使用
						this.containerHeight = (res.windowHeight - res.statusBarHeight) * 2
						// res.windowHeight: 可使用窗口高度
						this.popupHeight = res.windowHeight * 2
						console.log(res)

					} else if (res.platform === 'ios') {
						this.containerHeight = (res.windowHeight) * 2
						// res.windowHeight: 可使用窗口高度
						this.popupHeight = res.windowHeight * 2 - 100
						// 如果是 iOS，需要算上底部小横条
						console.log(res)
					}
				}
			})
		},
		methods: {
			showPopup() {
				this.isShowPopup = !this.isShowPopup
			},
			showDetailPage(){
				uni.navigateTo({
					url:'detail'
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		// background-color: $uni-bg-color-grey;

		// 标题
		.main-title {
			height: 80rpx;
			width: 100%;
			line-height: 80rpx;
			padding-left: 20rpx;

			.main-title-text {
				font-weight: bold;
				font-size: 28rpx;
			}
		}

		// 表单输入
		.main-input {
			// background-color: #FFFFFF;
			padding: 0 50rpx;
			
			.u-form-item{
				border-bottom: 10rpx solid $uni-bg-color-grey;
				margin-bottom: 40rpx;
			}
		}

		// 新增明细按钮
		.add-btn {
			background-color: #6C9EFF;
			height: 80rpx;
			width: 50%;
			color: #fff;
			border-radius: 40rpx;
			opacity: 0.5;
			line-height: 80rpx;
		}

		.add-btn:active {
			opacity: 1;
			transition: 0.1s;
		}
	}
</style>
