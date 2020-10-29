<template>
	<view>
		<button type="default" @click="pushMsg">createMessage</button>
		<button type="default" @click="getClientInfo">getClientInfo</button>
		<button type="default" @click="getAllMessage">getAllMessage</button>
		<button type="default" @click="clear">clear</button>
	</view>
</template>

<script>
	export default {
		created() {
				// 添加监听从系统消息中心点击某条消息启动应用事件
				plus.push.addEventListener("click", function(msg) {
					// 分析msg.payload处理业务逻辑
					console.log(JSON.stringify(msg))
					console.log("You clicked: " + msg.payload);
					console.log("You clicked: " + msg.content);
				}, false);
		},
		data() {
			return {
				
			};
		},
		
		methods:{
			pushMsg() {
				let str = "这是秋天的第一杯奶茶~"
				let options = {
					cover: false,
					title: "这是标题噢~",
					subtitle: "这是副标题噢~"
				}
			
				void plus.push.createMessage(str, "LOCALMSG", options)
			},
			
			// 获取客户端推送标识信息
			getClientInfo() {
				let info = plus.push.getClientInfo()
				console.log(info)
			},
			
			// 获取所有推送消息
			getAllMessage() {
				let info = plus.push.getAllMessage();
				console.log(info)
			},
			
			// 清空所有消息
			clear(){
			void plus.push.clear();
			}
		}
	}
</script>

<style lang="scss">

</style>
