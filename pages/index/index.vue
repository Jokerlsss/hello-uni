<template>
	<view class="container">
		
		<v-skeleton :row="1" title animate :loading="loading">
			<view>
				展示 Toast<br>
				这是一条长的Toast的使用方法
			</view>
		</v-skeleton>
		<!-- <view class="list" v-for="(item,index) of list" :key="index">
			{{item}}
		</view> -->
		<v-no-more v-if="isBottom"></v-no-more>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['1', '2', '3', '4', '5', '6', '7', '8'],
				isBottom: false,

				loading: true
			}
		},
			
		onLoad() {
			uni.showLoading()
			setTimeout(() => {
				this.loading = false;
				uni.hideLoading()
			}, 1500)
		},
		methods: {
			// 初始化
			init() {
				this.isBottom = false
				// 开发环境下，this.list = []
				this.list = ['1', '2', '3', '4', '5', '6', '7', '8']
			},

			push() {
				// 消息推送
				void plus.push.createMessage('收到一条新消息，内容竟是...');
			},

			async showToast() {
				// this.$Toast.failToast()
				const res = await this.$request({
					url: '/Produce/MESMonthPlanHJ/homeproduce'
				})
				console.log(res)
			}
		},
		onPullDownRefresh() {
			console.log('刷新')
			this.init()
			setTimeout(() => {
				// 关闭刷新图标
				uni.stopPullDownRefresh()
				this.$Toast.successToast()
			}, 500)
		},
		// 触底函数
		onReachBottom() {
			if (this.list.length > 30) {
				return this.isBottom = true
			} else {
				this.$Toast.loadToast()

				// ！--- setTimeout 可删除，测试用 ---！
				setTimeout(() => {
					uni.hideLoading()
					this.list = [...this.list, ...this.list]
				}, 0)
			}
		}
	}
</script>

<style>
	.container {
		/* height: 1000px; */
		/* -webkit-overflow-scolling: touch; */
		/* &:after {
			min-height: calc(100% + 1px);
		} */
	}

	.list {
		height: 100px;
		line-height: 100px;
	}
</style>
