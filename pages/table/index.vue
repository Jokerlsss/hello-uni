<template>
	<!--  :class="{notchClass:hasNotchInScreen}" -->
	<view class="container">
		<v-table :tableData="tableData" :headers="headers" class="v-table">
		<!-- 	<v-table-column field="date" title="日期" :customStyle="columnStyle"></v-table-column>
			<v-table-column field="planNum" title="计划数" :customStyle="columnStyle"></v-table-column>
			<v-table-column field="OKNum" title="合格数" :customStyle="columnStyle"></v-table-column>
			<v-table-column field="BadNum" title="废品数" :customStyle="columnStyle"></v-table-column>
			<v-table-column field="todoNum" title="待检数" :customStyle="columnStyle"></v-table-column> -->
		</v-table>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headers: [{
				                label: '日期',
				                key: 'date'
				            }, {
				                label: '计划数',
				                key: 'planNum'
				            }, {
				                label: '合格数',
				                key: 'OKNum'
				            }, {
				                label: '废品数',
				                key: 'BadNum'
				            }, {
				                label: '待检数',
				                key: 'todoNum'
				            }],
				tableData: [{
						BadNum: 'BadNum',
						planNum: 'planNum',
						date: 'date',
						todoNum: 'todoNum',
						OKNum: 'OKNum'
					}
				],
				// #ifdef APP-PLUS
				hasNotchInScreen: false,
				// #endif
				// 表头自定义样式
				columnStyle: {
					'background-color': '#6C9EFF',
					'color': '#fff',
					// 'opacity':0.7
				},
				screenHeight:0
			};
		},
		onShow() {
			// // #ifdef APP-PLUS
			// // 判断刘海屏
			// // console.log('是否为刘海屏：',plus.navigator.hasNotchInScreen())
			// this.hasNotchInScreen = plus.navigator.hasNotchInScreen()
			// // #endif
		},
		onLoad() {
			// 定时器防止横屏过快导致布局错乱
			// // #ifdef APP-PLUS
			// setTimeout(() => {
			// 	//锁定
			// 	void plus.screen.unlockOrientation();
			// 	void plus.screen.lockOrientation('landscape-primary');
			// }, 500)
			// // #endif	
		}
	}
</script>

<style lang="scss">
	.container {
		margin: 0 auto;
		// margin-top: 10rpx;
		width: 90%;
	}

	// 刘海屏时的样式
	.notchClass {
		width: 80%;
	}
</style>
