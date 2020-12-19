<template>
	<view>
		<!-- 状态栏 -->
		<view class="status_bar"></view>
		<!-- 顶部 -->
		<view class="top">
			<view class="top-top">
				<view class="top-msg">
					<view class="msg-top">
						张三
					</view>
					<view class="msg-bottom">
						高新区远控科技开发有限公司
					</view>
				</view>
				<view class="top-clock">
					<button class="clock-btn">打卡</button>
				</view>
			</view>
			<view class="top-bottom">
				<view class="top-bottom-left">
					今日打卡<text class="already-clock">2</text>/4
				</view>
				<view class="top-bottom-right"></view>
			</view>
		</view>
		<!-- 中部 -->
		<view class="middle">
			<!-- 统计分析按钮 -->
			<view class="analysis-btn">
				<view class="left">
					统计分析
				</view>
				<view class="right">
					<image src="../../static/img/index_conut.png"></image>
				</view>
			</view>
			<view class="operate">
				<!-- 审批 -->
				<v-main-operate-item :imgSrc="itemList.approve.imgSrc" :text="itemList.approve.text" @toPage="toPage('approve')"
				 :number="itemList.approve.number" :isWarning="itemList.approve.isWarning"></v-main-operate-item>

				<!-- 单据查看 -->
				<v-main-operate-item :imgSrc="itemList.see.imgSrc" :text="itemList.see.text" @toPage="toPage('see')" :number="itemList.see.number"
				 :isWarning="itemList.see.isWarning"></v-main-operate-item>
			</view>
			<view class="operate">
				<!-- 公司公告 -->
				<v-main-operate-item :imgSrc="itemList.perform.imgSrc" :text="itemList.perform.text" @toPage="toPage('perform')"
				 :number="itemList.perform.number" :isWarning="itemList.perform.isWarning"></v-main-operate-item>

				<!-- 单据编辑 -->
				<v-main-operate-item :imgSrc="itemList.edit.imgSrc" :text="itemList.edit.text" @toPage="toPage('edit')" :number="itemList.edit.number"
				 :isWarning="itemList.edit.isWarning"></v-main-operate-item>
			</view>
			<view class="logout-btn">
				退出登录
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList: {
					approve: {
						imgSrc: require('../../static/img/main-oath.png'),
						text: '审批',
						number: '10',
						isWarning: true
					},
					see: {
						imgSrc: require('../../static/img/main-see.png'),
						text: '单据查看',
						number: '',
						isWarning: false
					},
					perform: {
						imgSrc: require('../../static/img/main-perform.png'),
						text: '公司公告',
						number: '10',
						isWarning: true
					},
					edit: {
						imgSrc: require('../../static/img/main-edit.png'),
						text: '单据编辑',
						number: '',
						isWarning: false
					}
				}
			};
		},
		methods: {
			// 跳转页面
			toPage(value) {
				switch (value) {
					case 'approve':
						// 审批
						break
					case 'see':
						// 单据查看
						break
					case 'perform':
						// 公司公告
						break
					case 'edit':
						// 单据编辑
						break
				}
			}
		}
	}
</script>

<style lang="scss">
	$content-bg-color:#fff;

	@mixin long-btn($bgcolor, $color, $shadowOpacity) {
		margin-top: 35rpx;
		width: 85%;
		height: 90rpx;
		border-radius: 60rpx;
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, $shadowOpacity);
		color: $color;
		background-color: $bgcolor;
		font-size: 30rpx;
	}

	@mixin flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	page {
		background: $uni-bg-color-grey;
	}

	// 顶部导航栏
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: $content-bg-color;
	}

	// 头部打卡栏
	.top {
		height: 300rpx;
		width: 100%;
		border-radius: 0 0 80rpx 80rpx;
		background-color: $content-bg-color;
		box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.03);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		.top-top {
			margin-top: 20rpx;
			display: flex;
			height: 160rpx;
			width: 90%;

			// 个人信息
			.top-msg {
				margin: 0 20rpx;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				flex-wrap: wrap;

				.msg-top {
					width: 100%;
					font-size: 38rpx;
				}

				.msg-bottom {
					width: 100%;
					color: $uni-text-color-subtitle;
				}

			}

			// 打卡按钮
			.top-clock {
				width: 240rpx;
				height: 100%;

				.clock-btn {
					height: 140rpx;
					width: 140rpx;
					border-radius: 50%;
					background-color: $uni-color-primary;
					color: #fff;
					@include flex-center()
				}

				@include flex-center()
			}
		}

		// 打卡次数展示
		.top-bottom {
			width: 90%;
			height: 60rpx;
			display: flex;

			.top-bottom-left {
				margin-left: 20rpx;
				width: 260rpx;
				height: 100%;

				// 已打卡次数
				.already-clock {
					margin-left: 10rpx;
					color: $uni-color-primary;
					font-weight: bold;
				}

				@include flex-center()
			}

			.top-bottom-right {
				margin-right: 20rpx;
				height: 100%;
				width: 100%;
				background-color: #f2f3f5;
			}
		}
	}

	// 中部操作栏
	.middle {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		// 统计分析按钮
		.analysis-btn {
			display: flex;
			align-items: center;


			.left {
				width: 100%;
				margin-left: 26rpx;
			}

			.right {
				width: 120rpx;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;

				>image {
					width: 56rpx;
					height: 52rpx;
				}
			}

			@include long-btn($uni-color-primary, #fff, 0.1)
		}

		// 退出登录按钮
		.logout-btn {
			margin-bottom: 30rpx;
			@include flex-center() @include long-btn(#fff, $uni-color-error, 0.05)
		}

		// 操作模块
		.operate {
			margin-top: 30rpx;
			display: flex;
			width: 85%;
			color: $uni-text-color-base;
		}
	}
</style>
