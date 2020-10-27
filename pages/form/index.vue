<template>
	<view class="container">
		<view class="tittleTabs">
			<u-subsection :list="list" active-color="#fff" inactive-color="#666" bg-color="#fff" button-color="#89B1FF" :current="current"
			 @change="tabsChange"></u-subsection>
		</view>
		<view class="searchBar">
			<u-search placeholder="请输入关键字" v-model="keyword" placeholder-color="#CFCFCF" search-icon-color="#CFCFCF" bg-color="#fff"
			 :action-style="actionStyleObj"></u-search>
		</view>
		<view class="Pending" v-show="detailList.length > 0">
			<view class="listItems" v-for="(item,index) of detailList" :key="index">
				<view class="listTittle">
					<view class="tittleText">{{item.tittle}}</view>
					<view class="dateText">{{item.date}}</view>
				</view>
				<view class="listMessage">报修单编号:{{item.ID}}</view>
				<view class="listMessage">设备名称:{{item.equipmentName}}</view>
				<view class="listMessage">故障描述:{{item.describe}}</view>
				<view class="listFooter">
					<view class="footerName">
						<image src="../../static/img/icon/form-list-user.png"></image>
						由{{item.user}}提交
					</view>
					<view :class="footButtonClass(item.state)">{{item.state}}</view>
				</view>
			</view>
		</view>
		<view class="nullData" v-show="detailList.length === 0">
			<image class="nullDataImg" src="../../static/img/null-data.png"></image>
			<view class="text">暂无数据</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// tabar模块
				list: [{
						name: '待处理'
					},
					{
						name: '已处理'
					},
					{
						name: '已发起'
					},
					{
						name: '我收到的'
					},

				],
				current: 0,
				// 搜索栏value
				keyword: '',
				// 搜索按钮样式
				actionStyleObj: {
					height: "64rpx",
					width: "120rpx",
					background: "#fff",
					borderRadius: "100rpx",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				},
				// 明细数据(模拟)
				detailList: [

				],
				// 待处理数据
				pendingList: [],
				// 已处理数据
				processedList: [{
					ID: 'YK80398828017',
					tittle: '设备维修申请',
					date: '2020-10-26',
					equipmentName: '显卡',
					describe: '暂未发货',
					user: '曾哥',
					state: '已审批'
				}],
				// 已发起数据
				initiatedList: [

				],
				// 我收到的数据
				receivedList: [

				]
			}
		},
		mounted() {
			this.tabsChange(0)
			this.mockPendingList()
		},
		methods: {
			// 模拟待处理数组
			mockPendingList() {
				this.$request({
					url: '/mockPendingList',
					method: 'GET'
				}).then(res => {
					this.pendingList = res.data.data
							// 第一次进入时,给 detailList 赋值
							this.detailList = this.pendingList
				})
			},
			tabsChange(e) {
				switch (e) {
					case 0:
						this.detailList = this.pendingList
						break
					case 1:
						this.detailList = this.processedList
						break
					case 2:
						this.detailList = this.initiatedList
						break
					case 3:
						this.detailList = this.receivedList
						break
				}
			},
			footButtonClass(state) {
				if (state === '审批中') {
					return 'footerButtonIn'
				} else if (state === '已审批') {
					return 'footButtonSuccess'
				} else {
					return 'footButtonError'
				}
			}
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

	.tittleTabs {
		margin-top: 20rpx;
		width: 90%;
		height: auto;
	}

	.searchBar {
		margin-top: 20rpx;
		width: 90%;
		height: auto;
	}

	.Pending {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.listItems {
		margin-top: 20rpx;
		width: 90%;
		height: 300rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;

		.listTittle {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 90%;
			margin-bottom: 10rpx;

			.tittleText {
				color: rgba(16, 16, 16, 100);
				font-size: 28rpx;
				font-weight: bold;
				font-family: PingFangSC-regular;
			}

			.dateText {
				color: rgba(192, 192, 192, 100);
				font-size: 24rpx;
				font-family: PingFangSC-regular;
			}
		}

		.listMessage {
			width: 90%;
			color: rgba(153, 153, 153, 100);
			font-size: 24rpx;
			font-family: PingFangSC-regular;
			margin: 10rpx 0;
		}

		.listFooter {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 90%;
			margin-top: 10rpx;

			.footerName {
				display: flex;
				align-items: center;
				color: rgba(16, 16, 16, 100);
				font-size: 28rpx;
				font-family: PingFangSC-regular;

				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 20rpx;
				}
			}

			.footButtonError {
				text-align: center;
				line-height: 40rpx;
				width: 120rpx;
				height: 40rpx;
				border-radius: 20px;
				background: rgba(255, 83, 83, 0.1);
				color: #ff5353;
				font-size: 24rpx;
				font-family: Arial;
				border: 1px solid #ff5353;
			}

			.footerButtonIn {
				text-align: center;
				line-height: 40rpx;
				width: 120rpx;
				height: 40rpx;
				border-radius: 20px;
				background: #FDF7ED;
				color: #F0AD4E;
				font-size: 24rpx;
				font-family: Arial;
				border: 1px solid rgba(240, 173, 78, 100);
			}

			.footButtonSuccess {
				text-align: center;
				line-height: 40rpx;
				width: 120rpx;
				height: 40rpx;
				border-radius: 20px;
				background: rgba(112, 206, 139, 0.1);
				color: #70ce8b;
				font-size: 24rpx;
				font-family: Arial;
				border: 1px solid #70ce8b;
			}
		}
	}

	.nullData {
		width: 100%;
		height: 750rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex-wrap: wrap;

		image {
			width: 400rpx;
			height: 262rpx;
		}

		.text {
			text-align: center;
			width: 100%;
			color: rgba(191, 191, 191, 100);
			font-size: 28rpx;
			font-family: PingFangSC-bold;
		}
	}
</style>
