<template>
	<view class="container">
		<view class="search">
			<u-search placeholder="搜索..." v-model="searchContent"></u-search>
		</view>
		<u-row>
			<u-col text-align="center" span="4" v-for="(item, index) of menuList" :key="index">
				<v-form-menu :imgSrc="item.imgSrc" :title="item.title" :url="item.url"></v-form-menu>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 搜索框内容
				searchContent: '',

				leftText: '',
				rightText: '',
				title: '智能管控系统',

				isChoose: false,

				background: {
					backgroundColor: '#FF5242'
				},
				backTextStyle: {
					color: "#FFF"
				},
				menuList: [{
						imgSrc: "../../static/img/stock-out.png",
						title: "辅材出库",
						url: "../../pages/sup-material-out/index"
					},
					{
						imgSrc: "../../static/img/stock-out.png",
						title: "签到打卡",
						url: "../../pages/positioning/index"
					}
				]
			}
		},
		methods: {
			choose() {
				if (!this.isChoose) {
					uni.setNavigationBarTitle({
						title: '新的标题'
					});
					this.isChoose = true
				} else {
					uni.setNavigationBarTitle({
						title: '智能制造管控系统'
					});
					this.isChoose = false
				}

			}
		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;

		.search {
			width: 90%;
			margin-top: 20rpx;
		}
	}

	,
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: $uni-color-primary;
	}

	.u-row {
		width: 100%;
	}

	.u-col {
		// display：flex 源码中没有，因此需要加上，不可去除
		display: flex;
		justify-content: center !important;
	}
</style>
