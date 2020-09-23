<template>
	<view class="container">
		<!-- <view class="status_bar"></view> -->
		<!-- <uni-nav-bar :title="title" background-color="#FF5242" color="#fff">
			<view slot="left">
				<p @click="leftClick">{{leftText}}</p>
			</view>
			<view slot="right">
				<p @click="rightClick">{{rightText}}</p>
			</view>
		</uni-nav-bar> -->
		
		<button type="primary" @click='choose'>选择</button>

		<u-row justify="around">
			<u-col span="3" v-for="(item, index) of menuList" :key="index">
				<v-form-menu :imgSrc="item.imgSrc" :title="item.title" :url="item.url"></v-form-menu>
			</u-col>
			<!-- 以下两个 u-col 不能去掉，需要占位以保持布局 -->
			<u-col span="3">
			</u-col>
			<u-col span="3">
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leftText: '',
				rightText: '',
				title:'智能管控系统',
				
				isChoose:false,
				
				background:{
					backgroundColor: '#FF5242'
				},
				backTextStyle:{
					color:"#FFF"
				},
				menuList: [{
						imgSrc: "../../static/img/stock-out.png",
						title: "辅材出库",
						url: "../../pages/sup-material-out/index"
					},
					{
						imgSrc: "../../static/img/get-goods.png",
						title: "辅材领料",
						url: "../../pages/sup-material-out/index"
					},
					{
						imgSrc: "../../static/img/form.png",
						title: "辅材采购合同",
						url: "../../pages/sup-material-out/index"
					}, {
						imgSrc: "../../static/img/get-goods.png",
						title: "辅材领料",
						url: "../../pages/sup-material-out/index"
					},
					{
						imgSrc: "../../static/img/form.png",
						title: "辅材采购合同",
						url: "../../pages/sup-material-out/index"
					}, {
						imgSrc: "../../static/img/get-goods.png",
						title: "辅材领料",
						url: "../../pages/sup-material-out/index"
					},
					{
						imgSrc: "../../static/img/form.png",
						title: "辅材采购合同",
						url: "../../pages/sup-material-out/index"
					}, {
						imgSrc: "../../static/img/get-goods.png",
						title: "辅材领料",
						url: "../../pages/sup-material-out/index"
					},
					{
						imgSrc: "../../static/img/form.png",
						title: "辅材采购合同",
						url: "../../pages/sup-material-out/index"
					}, {
						imgSrc: "../../static/img/get-goods.png",
						title: "辅材领料",
						url: "../../pages/sup-material-out/index"
					},
					{
						imgSrc: "../../static/img/form.png",
						title: "辅材采购合同",
						url: "../../pages/sup-material-out/index"
					}, {
						imgSrc: "../../static/img/get-goods.png",
						title: "辅材领料",
						url: "../../pages/sup-material-out/index"
					},
					{
						imgSrc: "../../static/img/form.png",
						title: "辅材采购合同",
						url: "../../pages/sup-material-out/index"
					},
					{
						imgSrc: "../../static/img/form.png",
						title: "辅材采购合同",
						url: "../../pages/sup-material-out/index"
					},
					{
						imgSrc: "../../static/img/form.png",
						title: "辅材采购合同",
						url: "../../pages/sup-material-out/index"
					},
					{
						imgSrc: "../../static/img/form.png",
						title: "辅材采购合同",
						url: "../../pages/sup-material-out/index"
					},
					{
						imgSrc: "../../static/img/form.png",
						title: "辅材采购合同",
						url: "../../pages/sup-material-out/index"
					}
				]
			}
		},
		methods: {
			rightClick() {
				console.log('右侧')
			},
			leftClick() {
				console.log('左侧')
			},
			choose() {
				if (!this.isChoose) {
					uni.setNavigationBarTitle({
					    title: '新的标题'
					});
					this.isChoose=true
				} else {
					uni.setNavigationBarTitle({
					    title: '智能制造管控系统'
					});
					this.isChoose=false
				}

			}
		}
	}
</script>

<style lang="scss">
	.container {
		// width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	},
	.status_bar{
		height: var(--status-bar-height);
		width: 100%;
		background-color: $uni-color-primary;
	}
</style>
