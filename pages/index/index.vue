<template>
	<view class="container">
		<view class="searchBar">
			<u-search placeholder="请输入关键字" v-model="keyword" placeholder-color="#CFCFCF" search-icon-color="#CFCFCF" bg-color="#fff"
			 :action-style="actionStyleObj"></u-search>
		</view>
		<view class="indexItemsContainer">
			<view class="countAnalysis" v-show="isLeader">
				<text>统计分析</text>
				<image src="../../static/img/icon/index-count.png"></image>
			</view>
			<view class="listItems" v-for="(item,index) of menuList" :key="index">
				<u-collapse :head-style="item.HeaderStyle" :body-style="item.BodyStyle" hover-class="none" arrow-color="#a8a8a8">
					<u-collapse-item @change="OpenShutMenu(index)" :title="item.tittle">
						123
					</u-collapse-item>
				</u-collapse>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 搜索值
				keyword: '',
				// 是否为高层
				isLeader: true,
				// 菜单数组
				menuList: [{
						isOpen: false,
						HeaderStyle: {
							paddingLeft: '20rpx',
							paddingRight: '10rpx',
							fontSize: '28rpx',
							background: '#fff',
							borderRadius: '20rpx',
							borderBottom: 'none'
						},
						BodyStyle: {
							padding: '10rpx 20rpx',
							background: '#fff',
							borderRadius: '0 0 20rpx 20rpx'
						},
						tittle: '设备管理'
					},
					{
						isOpen: false,
						HeaderStyle: {
							paddingLeft: '20rpx',
							paddingRight: '10rpx',
							fontSize: '28rpx',
							background: '#fff',
							borderRadius: '20rpx',
							borderBottom: 'none'
						},
						BodyStyle: {
							padding: '10rpx 20rpx',
							background: '#fff',
							borderRadius: '0 0 20rpx 20rpx'
						},
						tittle: '设备管理'
					}
				],
				// 搜索按钮样式
				actionStyleObj: {
					height: "64rpx",
					width: "120rpx",
					background: "#fff",
					borderRadius: "100rpx",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}
			}
		},
		created() {

		},
		methods: {
			OpenShutMenu(index) {
				this.menuList[index].isOpen = !this.menuList[index].isOpen
				if (this.menuList[index].isOpen) {
					this.menuList[index].HeaderStyle.borderRadius = '20rpx 20rpx 0 0'
					this.menuList[index].HeaderStyle.borderBottom = '1px solid #F0F0F0'
				} else {
					setTimeout(() => {
						this.menuList[index].HeaderStyle.borderRadius = '20rpx'
						this.menuList[index].HeaderStyle.borderBottom = 'none'
					}, 250)
				}

			}
		},
		watch: {

		}
	}
</script>

<style lang="scss">
	page {
		background: #F2F3F5;
	}

	.container {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.searchBar {
		margin-top: 30rpx;
		width: 90%;
		height: auto;
	}

	.countAnalysis {
		margin-top: 30rpx;
		width: 90%;
		height: 80rpx;
		background: #79A7FE;
		border-radius: 20rpx;
		padding: 0rpx 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;

		text {
			color: rgba(255, 255, 255, 100);
			font-size: 28rpx;
			font-family: PingFangSC-regular;
		}

		image {
			width: 50rpx;
			height: 50rpx;
		}
	}

	.indexItemsContainer {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;

		.listItems {
			margin-top: 30rpx;
			width: 90%;
		}
	}

	.indexItems {
		margin-top: 30rpx;
		width: 90%;
		min-height: 80rpx;
		background: #fff;
		border-radius: 20rpx;

		// padding: 0rpx 20rpx;
		.ItemsHeader {
			height: 80rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			text {
				margin-left: 20rpx;
				color: rgba(16, 16, 16, 1);
				font-size: 28rpx;
				font-family: PingFangSC-regular;
			}

			image {
				margin-right: 20rpx;
				width: 50rpx;
				height: 50rpx;
			}
		}

		.ItemsMain {

			.items {
				height: 160rpx;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;

				image {
					width: 96rpx;
					height: 96rpx;
				}

				text {}
			}
		}
	}
</style>
