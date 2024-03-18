// pages/farmer_fm/farmer_fm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

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

  jmp_logistics_info() {
    wx.navigateTo({
      url: '/packageB/pages/logistics_info/logistics_info',
    })
  },

  jmp_shop_revenue() {
    wx.navigateTo({
      url: '/packageA/pages/shop_revenue/shop_revenue',
    })
  },
	toIndent(){
		wx.reLaunch({
		  url: '/pages/indent_fm/indent_fm',
		})
	},

	toChat(){
		wx.reLaunch({
		  url: '/pages/chat_fm/chat_fm',
		})
	},

	toUser(){
		wx.reLaunch({
		  url: '/pages/home_fm/home_fm',
		})
	}
})
