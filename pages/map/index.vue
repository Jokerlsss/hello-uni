<template>
	<view class="container" :style="'height' + containerHeight + 'rpx'">
		<view class="page-section page-section-gap map">
			<!-- map高度 = 屏幕可视高度 - 底部打卡组件高度 -->
			<map :style="isFocus?'width: 100%; height:'+(mapHeight-800)+'rpx;box-shadow:0px 1px 5px #cccccc;':'width: 100%; height:'+mapHeight+'rpx;box-shadow:0px 1px 5px #cccccc;'" :latitude="latitude" :longitude="longitude"
			 :markers="covers" ref="map">
			</map>

			<!-- 底部打卡组件 -->
			<view class="input-area" id="input-area">
				<view class="position">
					<image src="../../static/img/position-blue.png"></image>
					{{address.poiName}}
				</view>

				<view class="note">
					<input type="text" placeholder="备注" placeholder-class="placeholder-class" @focus="inputFocus" @blur="inputBlur"/>
				</view>
				<view class="clock">
					<button type="default" class="clock-btn">打 卡</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			uni.getLocation({
				type: 'wgs84',
				geocode:true,
				success: (res) => {
					// todo 1. res.address 有值
					// todo 2. res.address 取值失败，提示 "获取位置失败，请刷新或打开定位权限重试"
					console.log(res)
					// 获取当前位置
					this.address = res.address
					
					this.latitude = res.latitude
					this.longitude = res.longitude

					this.covers[0].latitude = res.latitude
					this.covers[0].longitude = res.longitude
				}
			})

			uni.getSystemInfo({
				success: (res) => {
					if (res.platform === 'android') {
						// res.windowHeight: 可使用窗口高度
						// 200 = height(底部组件) + margin-bottom(底部组件) + margin-top(底部组件) = 150 + 30 + 20
						this.mapHeight = (res.windowHeight - res.statusBarHeight - 200) * 2
						this.containerHeight = (res.windowHeight - res.statusBarHeight) * 2
						// console.log(res)

					} else if (res.platform === 'ios') {
						// res.windowHeight: 可使用窗口高度
						this.mapHeight = (res.windowHeight - 200) * 2
						this.containerHeight = (res.windowHeight - 200) * 2
						// console.log(res)
					}
				}
			})
		},
		data() {
			return {
				// 使用 marker点击事件 需要填写id
				id: 0, 
				title: 'map',
				address: {},
				
				// 当前经纬度
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../static/img/position.png',
					label: {
						content: '我的位置',
						color: '#FF5242'
					}
				}],
				
				isFocus:false
			};
		},
		methods:{
			inputFocus(){
				this.isFocus = true
			},
			inputBlur(){
				this.isFocus = false
			}
		}
	}
</script>

<style lang="scss">
	$primary-color-blue:#6C9EFF;

	%cover-view-common {
		margin: 0 40rpx;
		width: 100%;
		display: flex;
		align-items: center;
	}

	// 打卡操作框
	.input-area {
		// box-shadow:0px 2px 5px #cccccc;
		position: absolute;
		// position: fixed;
		// 自身居中定位
		margin: 0 auto;
		left: 0;
		right: 0;

		width: 90%;
		height: 300rpx;
		bottom: 60rpx;
		border-radius: 40rpx;
		background-color: #fff;
		z-index: 999;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		padding: 10rpx 0;
		// box-sizing: border-box;

		.position {
			@extend %cover-view-common;
			height: 80rpx;
			// background-color: #ff0000;

			>image {
				width: 64rpx;
				height: 64rpx;
				margin-right: 20rpx;
			}
		}

		.note {
			@extend %cover-view-common;
			height: 80rpx;
			display: flex;
			justify-content: center;

			>input {
				border-bottom: 1px solid #e3e3e3;
				width: 95%;
				height: 80rpx;
				line-height: 80rpx;

				&:focus {
					border-bottom: 1px solid $primary-color-blue;
				}
			}


			.placeholder-class {
				color: #c1c1c1;
			}

			// background-color: #FF9900;
		}

		.clock {
			@extend %cover-view-common;
			height: 140rpx;
			// background-color: #007AFF;

			.clock-btn {
				color: #FFFFFF;
				font-size: 32rpx;
				font-weight: bold;
				width: 100%;
				border-radius: 40rpx;
				background-color: $primary-color-blue;
			}
		}
	}
</style>
