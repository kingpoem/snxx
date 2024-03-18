Page({
	data:{
		inputmessage:'',
		messages: [
		  { "role": "farmer", "content": "您好，欢迎光临本店，请问我有什么可以帮到你的吗？", hidden: false },
		  { "role": "user", "content": "请问该商品什么时候能够发货？", hidden: false },
		  { "role": "farmer", "content": "我现在帮您看一下，等稍等。", hidden: false },
		  { "role": "farmer", "content": "明天早上十点前可以发货。", hidden: false },
		  { "role": "user", "content": "好的，知道了，谢谢。", hidden: false },
		]
	}
})
