<template>
	<view class="container" :style="'height:'+containerHeight+'rpx'">
		<view class="top">
			<position-headerInfo name="刘铄" address="这是当前所在位置"></position-headerInfo>
		</view>
		<view class="bottom">
				<position-clock></position-clock>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				containerHeight:0,
				bottomHeight:0
			};
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					if (res.platform === 'android') {
						this.containerHeight = (res.windowHeight) * 2
						this.bottomHeight = (res.windowHeight - 105 - 20) * 2
					} else if (res.platform === 'ios') {
						// res.windowHeight: 可使用窗口高度
						this.containerHeight = (res.windowHeight) * 2
						// 105 = 15 + 15 + 75 = margin-top + margin-bottom + header-height
						// 50: 底部安全高度 20 + 留白高度 30
						this.bottomHeight = (res.windowHeight - 105 - 50) * 2
					}
				}
			})
		}
	}
</script>

<style lang="scss">
	// 页面背景色
	page{
		background-color: $uni-bg-color-grey;
	}
	
	%margin-container {
		padding: 30rpx 30rpx 0 30rpx;
	}

	%container-common {
		border-radius: 30rpx;
		background-color: #fff;
		// box-shadow: 0rpx 5rpx 20rpx #d7d7d7;
	}

	.container {
		// background-color: #f2f3f5;
		// box-shadow: 0px 20px 20px #f2f3f5;
		// width: 100%;

		// 顶部
		.top {
			@extend %margin-container;
			width: 100%;
			height: 180rpx;
		}

		// 底部
		.bottom {
			@extend %margin-container;
			width: 100%;
			margin-bottom: 40rpx;
		}
	}
</style>
