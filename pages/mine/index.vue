<template>
	<view>
		<!-- 渐变色区域背景 -->
		<view class="Gradients"></view>
		<view class="container">
			<!-- 我的信息区域 -->
			<view class="myMessageTittle">
				<view class="name">
					<text :class="{textClass}">张二</text>
					<view class="company">高新区远控科技开发有限公司</view>
				</view>
				<view class="headPortrait">张二</view>
			</view>
			<view class="summary">
				<view class="summaryTittle">
					10月汇总
				</view>
				<!-- 汇总区域 -->
				<view class="summaryFooter">
					<view class="items">
						<view class="value">8</view>
						<view class="itemsTittle">请假(小时)</view>
					</view>
					<view class="items">
						<view class="value">0</view>
						<view class="itemsTittle">迟到(小时)</view>
					</view>
					<view class="items">
						<view class="value">0</view>
						<view class="itemsTittle">早退(小时)</view>
					</view>
				</view>
			</view>
			<!-- 功能模块 -->
			<view class="operationFunction">
				<view class="items">
					<image src="../../static/img/icon/mine-msg.png"></image>
					<text>我的信息</text>
				</view>
				<view class="items">
					<image src="../../static/img/icon/mine-rules.png"></image>
					<text>考勤规则</text>
				</view>
				<view class="items">
					<image src="../../static/img/icon/mine-other.png"></image>
					<text>设置</text>
				</view>
				<view class="items">
					<image src="../../static/img/icon/mine-about-company.png"></image>
					<text>关于公司</text>
				</view>
				<view class="itemsNoBorder">
					<image src="../../static/img/icon/mine-about-soft.png"></image>
					<text>更新日志</text>
				</view>
			</view>
			<!-- 退出登录 -->
			<view class="lgout" @click="test">
				<text>退出登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "mine",
				textClass:'textClass',
			}
		},
		onShow() {
			// #ifdef APP-PLUS
			setTimeout(() => {
				void plus.screen.unlockOrientation();
				void plus.screen.lockOrientation('portrait-primary');
			}, 200)
			// #endif
		},
		methods: {
			test() {
				uni.navigateTo({
					url: '../table/index'
				});
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #F2F3F5;
		// display: flex;
		// justify-content: center;
	}

	.Gradients {
		// position: absolute;
		// top: 0px;
		// left: 0px;
		width: 100%;
		height: 400rpx;
		background: linear-gradient(to bottom, #6C9EFF, #F2F3F5);
		z-index: 1;
	}

	.container {
		position: absolute;
		top: 0;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.myMessageTittle {
		margin-top: 30rpx;
		width: 690rpx;
		height: 160rpx;
		// line-height: 20px;
		border-radius: 20rpx;
		background-color: rgba(255, 255, 255, 100);
		// color: rgba(16, 16, 16, 100);
		font-size: 28rpx;
		// text-align: center;
		font-family: Arial;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.name {
			margin: -55rpx 0 0 25rpx;
			height: 45rpx;
			line-height: 45rpx;
			color: rgba(16, 16, 16, 100);
			font-size: 36rpx;
			text-align: left;
			font-family: PingFangSC-regular;

			.company {
				margin-top: 15rpx;
				height: 45rpx;
				line-height: 45rpx;
				color: rgba(153, 153, 153, 100);
				font-size: 28rpx;
				font-family: PingFangSC-regular;
			}
		}

		.headPortrait {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 30rpx;
			width: 120rpx;
			height: 120rpx;
			border-radius: 120rpx;
			background-color: rgba(108, 158, 255, 100);
			color: rgba(255, 255, 255, 100);
			font-size: 32rpx;
			font-family: Arial;
		}
	}

	.summary {
		width: 690rpx;
		height: 216rpx;
		margin-top: 30rpx;
		border-radius: 20rpx;
		background-color: rgba(255, 255, 255, 100);
		font-size: 28rpx;
		font-family: Arial;
		display: flex;
		align-items: center;
		flex-wrap: wrap;

		.summaryTittle {
			margin-left: 25rpx;
			left: 15rpx;
			width: 120rpx;
			height: 40rpx;
			color: rgba(16, 16, 16, 100);
			font-size: 28rpx;
			font-weight: bold;
			text-align: left;
			font-family: PingFangSC-bold;
		}

		.summaryFooter {
			height: 110rpx;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.items {
				width: 150rpx;
				height: 110rpx;
				margin: 0 40rpx;
				text-align: center;

				.value {
					font-weight: bold;
					color: rgba(16, 16, 16, 100);
					font-size: 22px;
					font-family: PingFangSC-bold;
				}

				.itemsTittle {
					color: rgba(102, 102, 102, 100);
					font-size: 12px;
					font-family: PingFangSC-regular;
				}
			}
		}
	}

	.operationFunction {
		width: 690rpx;
		height: 400rpx;
		margin-top: 30rpx;
		border-radius: 20rpx;
		background-color: rgba(255, 255, 255, 100);
		display: flex;
		flex-wrap: wrap;
		align-content: center;
		justify-content: center;

		.items {
			width: 95%;
			height: 75rpx;
			border-bottom: 1rpx #F0F0F0 solid;
			margin-bottom: 2rpx;
			display: flex;
			align-items: center;
			justify-content: start;

			image {
				width: 36rpx;
				height: 36rpx;
				margin-right: 15rpx;
			}
		}

		.itemsNoBorder {
			width: 95%;
			height: 75rpx;
			display: flex;
			align-items: center;
			justify-content: start;

			image {
				width: 36rpx;
				height: 36rpx;
				margin-right: 15rpx;
			}
		}
	}

	.lgout {
		width: 690rpx;
		height: 100rpx;
		margin-top: 30rpx;
		border-radius: 20rpx;
		background-color: rgba(255, 255, 255, 100);
		display: flex;
		align-items: center;
		justify-content: center;

		text {
			font-size: 36rpx;
			color: #FF5353;
		}
	}

	.lgout:active {
		background: #F8F8F9;
	}
	.textClass{
		color: #007AFF;
	}
</style>
