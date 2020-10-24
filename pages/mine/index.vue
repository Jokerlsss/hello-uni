<template>
	<view>
		<view class="container u-skeleton">
			<view class="content">
				<!-- <text class="u-skeleton-rect">{{content}}</text> -->
				<button type="primary" class="u-skeleton-circle" style="width: 80%;border-radius: 20rpx;">测试按钮</button>
			</view>
			<view class="content">
				<text class="u-skeleton-fillet" style="width: 80%;margin-top: 40rpx;">{{content}}</text>
			</view>
		</view>
		
		<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "mine",
				content: "这是一条较长的内容"
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.container {
		// display: flex;
		// flex-wrap: wrap;
		// width: 100%;
	}
	.content{
		padding-top: 40rpx;
		width: 80%;
	}
</style>
