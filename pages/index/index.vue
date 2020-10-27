<template>
	<view class="container">
		<!-- 头部：菜单按钮 -->
		<view class="top">
			<view class="menu-btn">
				<view class="menu-btn-top">
					<image src="../../static/img/main-produce.png"></image>
				</view>
				<view class="menu-btn-bottom">
					生产
				</view>
			</view>

			<view class="menu-btn">
				<view class="menu-btn-top">
					<image src="../../static/img/main-oa.png"></image>
				</view>
				<view class="menu-btn-bottom">
					OA
				</view>

				<!-- 角标 -->
				<u-badge count="7" bgColor="#FF6F6F" :offset="badgeOffset"></u-badge>
			</view>

			<view class="menu-btn">
				<view class="menu-btn-top">
					<image src="../../static/img/main-clock.png"></image>
				</view>
				<view class="menu-btn-bottom">
					打卡
				</view>
			</view>
		</view>

		<!-- 中部：今日打卡 -->
		<view class="middle">
			<view class="left">
				今日打卡<span>2</span>/4
			</view>

			<view class="right">
				<v-clock-step-vertical></v-clock-step-vertical>
			</view>
		</view>

		<!-- 底部：公司公告 -->
		<view class="bottom">
			<view class="bottom-top">
				<view v-for="(tab,index) in tabs" :class="['tabs-btn', currentTab===index?'tabs-btn-active':'']" 
				 @tap="changeTabs(index)" :key="index">{{tab}}</view>
				<!-- <view :class="['tabs-btn', { active: currentTab === tab }]" @click="currentTab = tab" key="notice">通知提醒</view> -->
			</view>

			<view class="bottom-bottom">
				<view class="bottom-content">
					<view class="content-top">
						<view class="content-top-left">公司放假安排</view>
						<view class="content-top-right">2020-10-21 08:23</view>
					</view>
					
					<view class="content-bottom">
						
					</view>
				</view>
			</view>
			<!-- <u-tabs :list="list" :show-bar="false" :active-item-style="activeItemStyle"  :is-scroll="false" :current="current" @change="change"></u-tabs> -->
		</view>
		
		<u-collapse accordion="false" :item-style="itemStyle" >
				<u-collapse-item :title="item.head" v-for="(item, index) in itemList" :key="index">
					{{item.body}}
				</u-collapse-item>
			</u-collapse>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				badgeOffset: [0, 0],

				currentTab: 0,
				tabs: ["公司公告", "通知提醒"],
				
				itemStyle:{
					"background-color":"#cccccc",
					"border-radius":"30rpx",
					"width":"500rpx",
					"margin-bottom":"20rpx"
				},
				
				itemList: [{
									head: "赏识在于角度的转换",
									body: "只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来",
									open: true,
									disabled: true
								},{
									head: "生活中不是缺少美，而是缺少发现美的眼睛",
									body: "学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美",
									open: false,
								},{
									head: "周围一些不起眼的人、事、物，或许都隐藏着不同凡响的智慧",
									body: "但是据说雕刻大卫像所用的这块大理石，曾被多位雕刻家批评得一无是处，有些人认为这块大理石采凿得不好，有些人嫌它的纹路不够美",
									open: false,
								}]

				// activeItemStyle:{
				// 	"background-color":"#6C9EFF",
				// 	"color":"#fff"
				// }
			}
		},

		methods: {
			changeTabs(index) {
				this.currentTab =index
			}
		}
	}
</script>

<style lang="scss">
	$margin-vertical-40:40rpx;
	$margin-horizental-30:30rpx;
	
	$light-grey:#c0c0c0;
	$deep-grey:#999999;

	.container {
		background-color: $uni-bg-color-grey;
		width: 100%;
		display: flex;
		flex-wrap: wrap;

		// 顶部
		.top {
			width: 100%;
			display: flex;
			justify-content: space-between;
			height: 160rpx;
			margin: $margin-vertical-40 70rpx;

			.menu-btn {
				position: relative;

				.menu-btn-top {
					width: 108rpx;
					height: 108rpx;
					// background-color: #FF0000;

					>image {
						width: 108rpx;
						height: 108rpx;
					}
				}

				.menu-btn-bottom {
					// background-color: #007AFF;
					display: flex;
					align-items: center;
					justify-content: center;
					color: $uni-color-primary;
				}
			}
		}

		// 中部
		.middle {
			width: 100%;
			display: flex;
			justify-content: center;

			.left {
				width: 30%;
				color: $uni-text-color;

				>span {
					color: $uni-color-primary;
					font-weight: 600;
					margin-left: 10rpx;
				}
			}
		}

		.bottom {
			// border-radius: 40rpx;
			// margin: $margin-vertical-40 $margin-horizental-30;
			margin: 40rpx 0 2px 0;
			width: 100%;
			background-color: #f2f3f5;
			// min-height: 720rpx;
			display: flex;
			flex-wrap: wrap;

			.bottom-top {
				margin-left: 30rpx;
				margin-bottom: 40rpx;

				.tabs-btn {
					float: left;

					width: 180rpx;
					height: 60rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 28rpx;

				}

				.tabs-btn-active {
					background-color: $uni-color-primary;
					border-radius: 40rpx;
					color: #FFFFFF;
					font-weight: 600;
					transition: 0.2s;
				}
			}

			.bottom-bottom {
				// background-color: #fff;
				// height: 100%;
				width: 100%;
				
				.bottom-content{
					background-color: #FFFFFF;
					height: 120rpx;
					width: 100%;
					padding: 0 28rpx;
					
					.content-top{
						width: 100%;
						height: 70rpx;
						// background-color: #007AFF;
						display: flex;
						align-items: center;
						
						.content-top-left{
							font-weight: bold;
							width: 60%;
						}
						
						.content-top-right{
							display: flex;
							justify-content: flex-end;
							width: 40%;
							color: $light-grey;
						}
					}
					
					.content-bottom{
						// background-color: #FF0000;
						width: 100%;
						height: 50rpx;
						display: flex;
						align-items: center;
						color: $deep-grey;
					}
				}
			}
		}
	}
</style>
