<template>
	<view class="container">
		<!-- 搜索栏 -->
		<view class="searchBar">
			<!-- ！！！！搜索框高度调高点！！！！ -->
			<u-search placeholder="请输入关键字" v-model="inputValue" placeholder-color="#CFCFCF" search-icon-color="#CFCFCF" bg-color="#fff"
			 :action-style="actionStyleObj"></u-search>
		</view>
		<view class="content">
			<v-perform-item 
			v-for="(item, index) of performItemList"
			:title="item.title" :dateTime="item.dateTime" :description="item.description" @toPerformDetail="toPerformDetail(item.jumpParams)"></v-perform-item>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue: '',
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
				performItemList:[
					{
						title:'公司放假安排1',
						dateTime:'2020-10-23 08:23',
						description:'公司定于2月17号开始放假，假期请...',
						// jumpParams 为明细标识
						jumpParams:1
					},
					{
						title:'公司放假安排2',
						dateTime:'2020-10-23 08:23',
						description:'公司定于2月17号开始放假，假期请...',
						jumpParams:2
					},
					{
						title:'公司放假安排3',
						dateTime:'2020-10-23 08:23',
						description:'公司定于2月17号开始放假，假期请...',
						jumpParams:3
					}
				]
			};
		},
		methods:{
			toPerformDetail(value){
				// 跳转到公告详情页
				uni.navigateTo({
					url:'../perform-detail/index'
					// 加入跳转参数
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $uni-bg-color-grey;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		// 搜索栏
		.searchBar {
			margin: 30rpx 0;
			width: 90%;
			height: auto;
		}

		.content {
			width: 100%;
		}
	}
</style>
