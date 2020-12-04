<template>
	<view class="container">
		<!-- // todo 若超出宽度，需要换行显示 -->
		<view class="row" :style="{'min-height':headHeight+'rpx','justify-content':textAlign}">
			{{title}}
		</view>
	</view>
</template>

<script>
	export default {
		name: 'v-table-column',
		props: {
			// 表头属性
			field: {
				type: String,
				default: ''
			},
			// 表头名称
			title: {
				type: String,
				default: ''
			},
			// 表头行高
			headHeight: {
				type: Number,
				default: 80
			},
			align: {
				type: String,
				default: 'center'
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
		display: flex;

		.row {
			display: flex;
			align-items: center;
			width: 100%;
			background-color: $uni-bg-color-grey;
			border: 1px solid $uni-text-color-divider-dark;
		}
	}
</style>
