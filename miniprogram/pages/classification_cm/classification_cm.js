// pages/classification_cm/classification_cm.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    "active_class": "0",
    cls_productinfo: [
      {
        guid: "1",
        ownerld: "小林的店铺",
        name: "田良季无锡阳山水蜜桃爆甜桃王软桃应当季新鲜水果桃子送礼品物盒圣诞节 中果",
        image: ["/images/prods/product1.png"],
        despciption: "",
        address: "",
        type: [
          {
            guid: "",
            name: "阳山水蜜桃",
            number: 1,
            price: 20.00,
          }
        ],
        category: "水果",
        quality: "",
        advantage: "",
        warranty: "6-7两,一盒6个",
        sold: 0,
        hidden: false
      }
    ],
    tabbar: {}
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

  scroll_bind(e) {
    const index = e.target.dataset.index;
    this.setData({ active_class: index })
  },

  redirectToproduct_info() {
    wx.navigateTo({
      url: '/pages/product_info/product_info'
    })
  },
  onLoad: function () {
    getApp().editTabbar();
  }
})