// pages/cart_cm/cart_cm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productinfo:[
      {guid:"1",
      ownerld:"小林的店铺",
      name:"阳山水蜜桃",
      image:["/images/prods/product1.png"],
      despciption:"",
      address:"",
      type: [
        {
          guid:"",
          name:"阳山水蜜桃",
          number: 1,
          price: 138,
        }
      ],
      category:"",
      quality:"",
      advantage:"",
      warranty:"6-7两,一盒6个",
      sold: 0,
      hidden: false
      },
      {guid:"2",
      ownerld:"小林的店铺",
      name:"阳山水蜜桃",
      image:["/images/prods/product1.png"],
      despciption:"",
      address:"",
      type: [
        {
          guid:"",
          name:"阳山水蜜桃",
          number: 1,
          price: 138,
        }
      ],
      category:"",
      quality:"",
      advantage:"",
      warranty:"6-7两,一盒6个",
      sold: 0,
      hidden: false
      },
      {guid:"3",
      ownerld:"小林的店铺",
      name:"阳山水蜜桃",
      image:["/images/prods/product1.png"],
      despciption:"",
      address:"",
      type: [
        {
          guid:"",
          name:"阳山水蜜桃",
          number: 1,
          price: 138,
        }
      ],
      category:"",
      quality:"",
      advantage:"",
      warranty:"6-7两,一盒6个",
      sold: 0,
      hidden: false
      },
      {guid:"4",
      ownerld:"小林的店铺",
      name:"阳山水蜜桃",
      image:["/images/prods/product1.png"],
      despciption:"",
      address:"",
      type: [
        {
          guid:"",
          name:"阳山水蜜桃",
          number: 1,
          price: 138,
        }
      ],
      category:"",
      quality:"",
      advantage:"",
      warranty:"6-7两,一盒6个",
      sold: 0,
      hidden: false
      },
      {guid:"5",
      ownerld:"114514",
      name:"阳山水蜜桃",
      image:["/images/prods/product1.png"],
      despciption:"",
      address:"",
      type: [
        {
          guid:"",
          name:"阳山水蜜桃",
          number: 1,
          price: 138,
        }
      ],
      category:"",
      quality:"",
      advantage:"",
      warranty:"6-7两,一盒6个",
      sold: 0,
      hidden: false
      },
      {guid:"5",
      ownerld:"114514",
      name:"阳山水蜜桃",
      image:["/images/prods/product1.png"],
      despciption:"",
      address:"",
      type: [
        {
          guid:"",
          name:"阳山水蜜桃",
          number: 1,
          price: 138,
        }
      ],
      category:"",
      quality:"",
      advantage:"",
      warranty:"6-7两,一盒6个",
      sold: 0,
      hidden: false
      },
    ]
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

  jmp_confirm_order(){
    wx.navigateTo({
      url: '/pages/confirm_order/confirm_order',
    })
  }
})