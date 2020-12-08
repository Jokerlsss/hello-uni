<template>
	<view class="container">
		<!-- 表头 -->

		<view class="slot">
			<slot></slot>
		</view>
		<!-- 行 -->
		<scroll-view scroll-y="true" style="height:400rpx">
			<view class="row" :class="((rowIndex%2===1) && isLightRow)?'lightRow':''" v-for="(rowItem,rowIndex) of tableData"
			 :key="rowIndex">
				<!-- 列 -->
				<view class="col" :style="{height:height+'rpx','justify-content':align}" v-for="(colItem,colIndex) of rowItem" :key="colIndex">
					{{colItem}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'v-table',
		props: {
			// ------------- 表格主属性 -------------
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
			// 表格数据
			tableData: {
				type: Array,
				default: []
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
			};
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
