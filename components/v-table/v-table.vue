<template>
	<view class="container">
		<!-- 表头 -->

		<!-- 行 -->
		<scroll-view scroll-y="true" style="height:400rpx">
			<view class="header">
				<view class="header-item" v-for="(item,index) of headers" :key="item.key">
					{{item.label}}
				</view>
			</view>
			<view class="content">
				<view class="row" :class="((rowIndex%2===1) && isLightRow)?'lightRow':''" v-for="(rowItem,rowIndex) of tableData"
				 :key="contentLineKey(rowItem,rowIndex)">
					<!-- 列 -->
					<view class="col" :style="{height:height+'rpx','justify-content':align}" v-for="(header,hIndex) of headers" :key="contentItemKey(header, hIndex)">
						{{autoContentItem(rowIndex,hIndex)}}
					</view>
				</view>
			</view>
		</scroll-view>

		<!-- 重构表格架构：可将表头属性和表格内容一一对应 -->
		<!-- <scroll-view scroll="true">
			<view class="header">
				<view class="header-item" v-for="(item,index) of headers" :key="item.key" style="position: sticky;"></view>
			</view>
			<view class="content">
				行
				<view class="content-line" v-for="(content,cIndex) of contentsSort" :key="contentLineKey(content, cIndex)">
					列
					<view class="content-item" v-for="(header,hIndex) of headers"  :key="contentItemKey(header, hIndex)" >
						{{autoContentItem(cIndex, hIndex)}}
					</view>
				</view>
			</view>
		</scroll-view> -->
	</view>
</template>

<script>
	export default {
		name: 'v-table',
		props: {
			// ------------- 表格主属性 -------------
			// 表格数据
			tableData: {
				type: Array,
				default: []
			},
			// 列头数据
			headers:{
				type:Array,
				default:[]
			},
			// 行高
			height: {
				type: Number,
				default: 100
			},
			// 表头行高
			headHeight: {
				type: Number,
				default: 100
			},
			// 文本位置
			align: {
				type: String,
				default: 'center'
			},
			// 是否高两行
			isLightRow: {
				type: Boolean,
				default: true
			},
			// 空字符
			emptyString: {
				type: String,
				default: '-'
			}
		},

		computed: {
			textAlign() {
				switch (this.align) {
					case 'left':
						return 'flex-start'
						break
					case 'right':
						return 'flex-end'
						break
					default:
						return 'center'
				}
			}
		},
		data() {
			return {
				chars: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
			};
		},
		methods: {
			// 将表头的属性与表格数据列一一对应
			autoContentItem(cIndex,hIndex) {
					let content = this.tableData[cIndex]
					let header = this.headers[hIndex]
					let result = ''
					if (content[header.key] || content[header.key] === 0) {
						result = content[header.key]
					} else {
						result = this.emptyString
					}
					return result
			},
			// 生成随机key值
			contentLineKey() {
					return this.randomString(32, this.chars)
			},
			contentItemKey() {
					return this.randomString(16, this.chars)
			},
			randomString(length, chars) {
				var result = ''
				for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
				return result
			}
		}
	}
</script>

<style lang="scss">
	.container {
		width: 100%;

		.slot {
			display: flex;
			// margin-top: 30rpx;
		}

		.row {
			width: 100%;
			display: flex;

			.col {
				// break-all 强制换行
				word-break: break-all;
				width: 100%;
				border: 1px solid $uni-text-color-divider-dark;
				display: flex;
				align-items: center;
			}

			// 最后一列：加上底部 border
			&:last-child {
				border-bottom: 1px solid $uni-text-color-divider-dark;
			}

			&:active {
				opacity: 0.7;
				background-color: $uni-color-primary;
				transition: 0.2s;
			}
		}

		// 高亮行 - 奇数
		.lightRow {
			background-color: $uni-bg-color-grey;
		}
	}
</style>
