// pages/cart_cm/cart_cm.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    chatinfo: [{
        name: '系统信息',
        image: '/images/usrico/sysico.jpg',
        time_h: '',
        time_m: '',
        msg: '你有一条消息请查收',
        isread: true
      },
      {
        name: '小王',
        image: '/images/usrico/usr1.jpg',
        time_h: '16',
        time_m: '35',
        msg: '请问什么时候发货',
        isread: true
      },
      {
        name: '晨姐',
        image: '/images/usrico/usr2.jpg',
        time_h: '16',
        time_m: '00',
        msg: '好',
        isread: false
      },
      {
        name: '袁师傅',
        image: '/images/usrico/usr3.jpg',
        time_h: '14',
        time_m: '20',
        msg: '谢谢师傅',
        isread: true
      },
      {
        name: '大伟',
        image: '/images/usrico/usr4.jpg',
        time_h: '14',
        time_m: '00',
        msg: '感谢你的好评',
        isread: false
      },
      {
        name: '老李',
        image: '/images/usrico/usr5.jpg',
        time_h: '14',
        time_m: '00',
        msg: '感谢你的好评',
        isread: false
      },
      {
        name: '小美',
        image: '/images/usrico/usr6.jpg',
        time_h: '13',
        time_m: '35',
        msg: '抱歉给您带来不好的体验,我们会...',
        isread: true
      },
      {
        name: '娜娜',
        image: '/images/usrico/usr7.jpg',
        time_h: '12',
        time_m: '00',
        msg: '抱歉给您带来不好的体验,我们会...',
        isread: false
      },
    ],
    tabbar: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    getApp().editTabbar();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.hideHomeButton();

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  jmp_confirm_order() {
    wx.navigateTo({
      url: '/pages/confirm_order/confirm_order',
    })
  },

  // toHome() {
  // 	wx.navigateTo({
  // 		url: '/pages/farmer/farmer',
  // 	})
  // },

  // toIndent() {
  // 	wx.navigateTo({
  // 		url: '/pages/indent_fm/indent_fm',
  // 	})
  // },

  // toUser() {
  // 	wx.navigateTo({
  // 		url: '/pages/farmer_fm/farmer_fm',
  // 	})
  // }
})
