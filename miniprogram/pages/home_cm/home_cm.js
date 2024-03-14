// home.js

Page({
  data: {
    imgURLs: [
      '/images/reps/slider1.png',
      '/images/reps/slider2.png',
      '/images/reps/slider3.png'
    ],
    indicatorDots: true,
    vertical: false, //滑动方向是否为纵向
    autoplay: true,  //是否自动切换
    interval: 3500,  //自动切换时间间隔
    duration: 500,   //滑动动画时长
    activeColor: "#ffffff",  //当前选中的指示点颜色
    circular: true,   // 是否采用衔接滑动

    products: [
      { id: 1, image: '/images/prods/product1.png', name: '商品1', price: '￥10.00' },
      { id: 2, image: '/images/prods/product2.png', name: '商品2', price: '￥20.00' },
      { id: 3, image: '/images/prods/product3.png', name: '商品3', price: '￥30.00' }
    ],
    tabbar: {}
  },
  //跳转到详情
  /*toDetail: function(e){
    console.log(e)
    let productId = e.currentTarget.dataset.productid
    wx.navigateTo({
      url: '../detail/detail?productId='+productId,
    })
  },*/
  toDetail: function () {
    wx.navigateTo({
      url: 'pages/detail/detail',
    })
  },
  onLoad: function () {
    getApp().editTabbar();
  }
})