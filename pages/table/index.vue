<template>
	<view class="container" :class="{notchClass:hasNotchInScreen}">
		<v-table :tableData="tableData" class="v-table">
			<v-table-column field="date" title="日期" :customStyle="columnStyle"></v-table-column>
			<v-table-column field="planNum" title="计划数" :customStyle="columnStyle"></v-table-column>
			<v-table-column field="OKNum" title="合格数" :customStyle="columnStyle"></v-table-column>
			<v-table-column field="BadNum" title="废品数" :customStyle="columnStyle"></v-table-column>
			<v-table-column field="todoNum" title="待检数" :customStyle="columnStyle"></v-table-column>
		</v-table>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
						date: '2020-09-20',
						planNum: '802122222',
						OKNum: '59',
						BadNum: '23',
						todoNum: '10'
					},
					{
						date: '2020-09-20',
						planNum: '80',
						OKNum: '5912112121',
						BadNum: '23',
						todoNum: '10'
					},
					{
						date: '2020-09-20',
						planNum: '80',
						OKNum: '59',
						BadNum: '233231212',
						todoNum: '10'
					},
					{
						date: '2020-09-20',
						planNum: '80',
						OKNum: '59',
						BadNum: '23',
						todoNum: '101212212'
					},
					{
						date: '2020-09-20',
						planNum: '80',
						OKNum: '59',
						BadNum: '23',
						todoNum: '10'
					},
					{
						date: '2020-09-20',
						planNum: '80',
						OKNum: '59',
						BadNum: '23',
						todoNum: '10'
					},
					{
						date: '2020-09-20',
						planNum: '80',
						OKNum: '59',
						BadNum: '23',
						todoNum: '10'
					},
					{
						date: '2020-09-20',
						planNum: '80',
						OKNum: '59',
						BadNum: '23',
						todoNum: '10'
					},
					{
						date: '2020-09-20',
						planNum: '80',
						OKNum: '59',
						BadNum: '23',
						todoNum: '10'
					},
					{
						date: '2020-09-20',
						planNum: '80',
						OKNum: '59',
						BadNum: '23',
						todoNum: '10'
					},
					{
						date: '2020-09-20',
						planNum: '80',
						OKNum: '59',
						BadNum: '23',
						todoNum: '10'
					},
					{
						date: '2020-09-20',
						planNum: '80',
						OKNum: '59',
						BadNum: '23',
						todoNum: '10'
					},
					{
						date: '2020-09-20',
						planNum: '80',
						OKNum: '59',
						BadNum: '23',
						todoNum: '10'
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
			// #ifdef APP-PLUS
			// 判断刘海屏
			// console.log('是否为刘海屏：',plus.navigator.hasNotchInScreen())
			this.hasNotchInScreen = plus.navigator.hasNotchInScreen()
			// #endif
		},
		onLoad() {
			// 定时器防止横屏过快导致布局错乱
			// #ifdef APP-PLUS
			setTimeout(() => {
				//锁定
				void plus.screen.unlockOrientation();
				void plus.screen.lockOrientation('landscape-primary');
			}, 500)
			// #endif	
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
