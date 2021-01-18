<template>
	<view class="container">
		<view class="table-scroll-view" :style="{
			width: width,
			height: height,
			border:'1px solid' + borderColor,
		}">
			<!-- 表头 -->
			<view class="header" :style="{borderBottom: '1px solid' + borderColor}">
				<view class="header-item" v-for="(item,index) of headers" :key="item.key" :style="{
					minWidth: (item.width || defaultColWidth) + 'rpx',
					maxWidth: (item.width || defaultColWidth) + 'rpx',
					minHeight:  headHeight + 'rpx',
					'justify-content':align,
					zIndex: 30,
					borderRight: index === headers.length - 1 ? 'none':'1px solid' + borderColor,
					backgroundColor: headerBgColor,
					left: index === 0 && firstLineFixed ? 0 : 'auto',
					position: index === 0 ? 'sticky' : 'static'
				}">
					{{item.label}}
				</view>
			</view>
			<!-- 表格内容 -->
			<view class="content">
				<!-- 行 -->
				<view class="row" :class="((rowIndex%2===1) && isLightRow)?'lightRow':''" v-for="(rowItem,rowIndex) of tableData"
				 :key="contentLineKey(rowItem,rowIndex)" :style="{
					 borderTop: rowIndex === 0 ? 'none' : '1px solid' + borderColor
					 }">
					<!-- 列 -->
					<view class="col" v-for="(header,hIndex) of headers" :key="contentItemKey(header, hIndex)" :style="{
					 minWidth: (header.width || defaultColWidth) + 'rpx',
					 maxWidth: (header.width || defaultColWidth) + 'rpx',
					 minHeight: contentHeight + 'rpx',
					 backgroundColor: ((rowIndex%2===1)&& isLightRow)?'#f2f3f5':itemBgColor,
					 'justify-content':align,
					 borderBottom: rowIndex === rowItem.length - 1 ? ('1px solid' + borderColor) : 'none',
					 borderRight: hIndex === headers.length - 1 ? 'none' : '1px solid' + borderColor,
					 zIndex: hIndex === 0 ? 20 : 0,
					 left: 0,
					 position: hIndex === 0 && firstLineFixed ? 'sticky' : 'static'
				 }">
						{{autoContentItem(rowIndex,hIndex)}}
					</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		name: 'v-table',
		props: {
			// ------------- 数据 -------------
			// 表格数据
			tableData: {
				type: Array,
				default: []
			},
			// 列头数据
			headers: {
				type: Array,
				default: []
			},
			// ------------- 宽高 -------------
			// 默认列宽
			defaultColWidth: {
				type: Number,
				default: 165
			},
			// 表格宽度
			width: {
				type: String,
				default: `${uni.getSystemInfoSync().screenWidth}px`
			},
			// 表格高度
			height: {
				type: String,
				default: 'auto'
			},
			// 表头最小行高，单位 rpx
			headHeight: {
				type: Number,
				default: 70
			},
			// 内容最小行高，单位 rpx
			contentHeight: {
				type: Number,
				default: 70
			},
			// ------------- 位置 -------------
			// 文本位置
			align: {
				type: String,
				default: 'center'
			},
			// ------------- 样式 -------------
			// 是否高两行
			isLightRow: {
				type: Boolean,
				default: true
			},
			// 空字符
			emptyString: {
				type: String,
				default: '-'
			},
			// 左边第一列是否固定
			firstLineFixed: {
				type: Boolean,
				default: false
			},
			// 表头颜色
			headerBgColor: {
				type: String,
				default: '#f2f3f5'
			},
			// 单元格颜色
			itemBgColor: {
				type: String,
				default: '#ffffff'
			},
			// 边框颜色
			borderColor: {
				type: String,
				default: '#DFDFDF'
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
		computed:{
			autoBottomComputedItem() {
				return function(index) {
					let bottomComputed = {}
					let needComputed = []
					// Jokerls: 遍历需要合计的列
					this.computedCol.forEach(key => {
						let computedColData = []
						this.contentsSort.forEach(content => {
							computedColData.push(content[key] || '0')
						})
						needComputed.push(computedColData)
					})
					needComputed.forEach((item, index) => {
						let total = 0
						item.forEach(num => {
							total += parseFloat(num)
						})
						bottomComputed[this.computedCol[index]] = total
					})
					let header = this.headers[index]
					let result = this.computedCol.includes(header.key) ?
						bottomComputed[header.key] : (index === 0 ? '总计' : this.emptyString)
					if (this.formatCol.length !== 0) {
						this.formatCol.forEach(item => {
							if (item.bottomComputedFormat) {
								if (header.key === item.key) {
									let needRplace = new RegExp(`\#${item['key']}\#`, 'mg')
									result = item.template.replace(needRplace, bottomComputed[item.key])
								}
							}
						})
					}
					return result
				}
			}
		},
		methods: {
			// 将表头的属性与表格数据列一一对应
			autoContentItem(cIndex, hIndex) {
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
			display: grid;
			grid-auto-flow: column;
			width: max-content;
			position: relative;

			// width: 100%;
			// display: flex;

			.col {
				// break-all 强制换行
				word-break: break-all;
				width: 100%;
				// border: 1px solid $uni-text-color-divider-dark;
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

	.table-scroll-view {
		overflow: scroll;
		-webkit-overflow-scrolling: touch;
	}

	.header {
		width: 100%;
		position: sticky;
		top: 0;
		// grid+column: 横向网格布局
		display: grid;
		grid-auto-flow: column;
		width: max-content;
		z-index: 25;
		// display: flex;

		.header-item {
			flex: 1;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			position: relative;

			// display: flex;
			// align-items: center;
			// width: 100%;
			// background-color: $uni-bg-color-grey;
			// border: 1px solid $uni-text-color-divider-dark;
		}
	}
</style>
