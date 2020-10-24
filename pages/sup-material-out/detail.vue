<template>
	<view class="container">
		<view class="detail-input">
			<u-form :model="form" ref="uForm" label-position>
				<u-form-item label="物料编码" label-width="140"  :label-style="label_style">
					<u-input v-model="form.man1" />
				</u-form-item>
				<u-form-item label="品名" label-width="140"  :label-style="label_style">
					<u-input v-model="form.department1" />
				</u-form-item>
				<u-form-item label="规格" label-width="140"  :label-style="label_style">
					<u-input v-model="form.signature1" />
				</u-form-item>
				<u-form-item label="出库数量" label-width="140" :label-style="label_style">
					<!-- cursor-spacing=0 光标与键盘的高度 -->
					<u-input v-model="form.num1" placeholder="请输入出库单号" />
				</u-form-item>
				<u-form-item label="申请数量" label-width="140"  :label-style="label_style">
					<u-input v-model="form.type1" />
				</u-form-item>
				<u-form-item label="单位" label-width="140"  :label-style="label_style">
					<u-input v-model="form.date1" />
				</u-form-item>
				<u-form-item label="库存数量" label-width="140"  :label-style="label_style">
					<u-input v-model="form.store1" />
				</u-form-item>
				<u-form-item label="可出库数量" label-width="140"  :label-style="label_style">
					<u-input v-model="form.man1" />
				</u-form-item>
				<u-form-item label="含税单价" label-width="140"  :label-style="label_style">
					<u-input v-model="form.department1" />
				</u-form-item>
				<u-form-item label="含税金额(元)" label-width="140"  :label-style="label_style">
					<u-input v-model="form.signature1" />
				</u-form-item>
				<u-form-item label="不含税单价(元)" label-width="140" :label-style="label_style">
					<u-input v-model="form.note1" />
				</u-form-item>
				<u-form-item label="不含税金额" label-width="140" :label-style="label_style">
					<!-- cursor-spacing=0 光标与键盘的高度 -->
					<u-input v-model="form.num1" placeholder="请输入出库单号" />
				</u-form-item>
				<u-form-item label="库位" label-width="140"  :label-style="label_style">
					<u-input v-model="form.type1" />
				</u-form-item>
				<u-form-item label="区位" label-width="140"  :label-style="label_style">
					<u-input v-model="form.date1" />
				</u-form-item>
				<u-form-item label="备注" label-width="140"  :label-style="label_style">
					<u-input v-model="form.store1"  type="textarea"/>
				</u-form-item>
			</u-form>
		</view>
		<!-- 间隔槽 -->
		<u-gap height="40" bg-color="#fff"></u-gap>
		
		<view class="detail-btn">
			<button type="default" class="detail-btn-common cancel-btn">取消</button>
			<button type="default" class="detail-btn-common save-btn">保存</button>
			<button type="default" class="detail-btn-common save-write-btn">保存并填写</button>
		</view>
		<!-- 间隔槽 -->
		<u-gap height="80" bg-color="#fff"></u-gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					num: '',
					type: '',
					date: '',
					store: '',
					man: '',
					department: '',
					signature: '',
					note: ''
				},
				label_style: {
					"font-size": "24rpx",
					"color": "#666"
				}
			};
		}
	}
</script>

<style lang="scss">
	$padding-left-right-20rpx:20rpx;

	.container {

		// 明细表单输入
		.detail-input {
			padding: 0 50rpx;
			// height: 500rpx;
			
			.u-form-item{
				border-bottom: 10rpx solid $uni-bg-color-grey;
				margin-bottom: 40rpx;
			}
		}

		.detail-btn {
			display: flex;
			flex-wrap: nowrap;
			justify-content: center;
			width: 100%;
			padding: 0 $padding-left-right-20rpx;


			.detail-btn-common {
				font-size: 32rpx;
				border-radius: 40rpx;
				height: 80rpx;
				line-height: 80rpx;
				opacity: 0.5;
			}
			
			.detail-btn-common:active{
				opacity: 1;
				transition: 0.1s;
			}

			// 按钮：取消
			.cancel-btn {
				color: #666666;
				width: 20%;
				border: #f2f2f2 1px solid;
			}

			// 按钮：保存
			.save-btn {
				background-color: #FF9933;
				width: 30%;
				color: #fff;
			}

			// 按钮：保存并填写
			.save-write-btn {
				background-color: #6C9EFF;
				width: 40%;
				color: #fff;
			}
		}
	}
</style>
