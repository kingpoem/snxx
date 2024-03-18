// home.js

Page({
  data: {
    imgURLs: [
      '/images/reps/slider1.jpg',
      '/images/reps/slider2.jpg',
      '/images/reps/slider3.jpg'
    ],
    indicatorDots: true,
    vertical: false, //滑动方向是否为纵向
    autoplay: true,  //是否自动切换
    interval: 3500,  //自动切换时间间隔
    duration: 500,   //滑动动画时长
    activeColor: "#ffffff",  //当前选中的指示点颜色
    circular: true,   // 是否采用衔接滑动

    products: [
      { id: 1, image: '/images/prods/s1.jpg', name: '南京雨花茶  ', price: '￥78.00' },
      { id: 2, image: '/images/prods/s5.jpg', name: '邵店板栗', price: '￥5.1' },
      { id: 3, image: '/images/prods/fruitOne.jpg', name: '阳山水蜜桃', price: '￥6.9' }
    ],

    products2: [
      { id: 1, image: '/images/prods/v2.jpg', name: '筒管丝瓜  ', price: '￥2.1' },
      { id: 2, image: '/images/prods/f4.jpg', name: '溧水草莓 小果', price: '￥8.5' },
      { id: 3, image: '/images/prods/f5.jpg', name: '花园酥梨 ', price: '￥2.2' }
    ],
    tabbar: {},
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
