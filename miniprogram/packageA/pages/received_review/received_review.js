Page({  
  data: {  
    avatarUrl: '', // 用户头像URL  
    nickname: '', // 用户昵称  
    date: '', // 用户评论日期  
    review: '', // 用户评论内容  
    stars: 5, // 星星数量，假设五星好评  
    starFilledUrl: '/images/star/star_fill.jpg', // 填充的星星图片路径  
    starEmptyUrl: '/images/star/star_fill.jpg' // 空心的星星图片路径  
  },  
  
  onLoad: function (options) {  
    // 假设从json文件中获取数据，这里简化处理为静态数据  
    this.setData({  
      avatarUrl: '/images/avatar/avatar_1.jpg',  
      nickname: '老于',  
      date: '2024-03-16',  
      review: '这是一个很好的产品，我很满意！',  
      stars: 5 // 可以根据需要从json中动态设置  
    });  
  }  
});