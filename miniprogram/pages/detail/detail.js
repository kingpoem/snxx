// pages/detail/detail.js
Page({
  data: {
    isLike: true,
    // banner
    imgUrls: [
      "/images/goodsList/tao.png",
      "/images/goodsList/tao.png",
      "/images/goodsList/tao.png",
      "/images/goodsList/tao.png",
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    // 商品详情介绍
  },

  
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 跳到购物车
  toCar() {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },
  onLoad: function (options) {
    //页面初始化 options为页面跳转所带来的参数
    console.log(options)
    var id = options.productId
  },

})