<template>
	<view class="container">
		<!-- 表头 -->
		<view class="slot">
			<slot></slot>
		</view>
		<!-- 行 -->
		<view class="row" v-for="(rowItem,rowIndex) of tableData" :key="rowIndex">
			<!-- 列 -->
			<view class="col" :style="{height:height+'rpx','justify-content':align}" v-for="(colItem,colIndex) of rowItem" :key="colIndex">
				{{colItem}}
			</view>
		</view>
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
			align:{
				type:String,
				default:'center'
			}
		},
		computed:{
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
		}

		.row {
			width: 100%;
			// height: 100rpx;
			// background-color: #00B290;
			display: flex;

			.col {
				width: 100%;
				// height: 100rpx;
				border: 1px solid $uni-text-color-divider-dark;
				display: flex;
				align-items: center;
			}
			
			&:last-child{
				border-bottom: 1px solid $uni-text-color-divider-dark;
			}
		}
	}
</style>
