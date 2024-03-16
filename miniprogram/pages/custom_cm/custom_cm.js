Page({
  data: {

  },
  gotoPage() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  gotoall_orders() {
    wx.navigateTo({
      url: '/pages/all_orders/all_orders?currentIndex=0',
    })
  },
  gotopending_payment() {
    wx.navigateTo({
      url: '/pages/all_orders/all_orders?currentIndex=1',
    })
  },
  gotopending_shipment() {
    wx.navigateTo({
      url: '/pages/all_orders/all_orders?currentIndex=2',
    })
  },
  gotopending_delivery() {
    wx.navigateTo({
      url: '/pages/all_orders/all_orders?currentIndex=3',
    })
  },
  gotopending_evaluation() {
    wx.navigateTo({
      url: '/pages/all_orders/all_orders?currentIndex=4',
    })
  },
  gotoaddress_management() {
    wx.navigateTo({
      url: '/packageB/pages/address_management/address_management'
    })
  },
  gotomessage() {
    wx.navigateTo({
      url: '/pages/message/message',
    })
  },
  gotointelligent_assistant() {
    wx.navigateTo({
      url: '/pages/intelligent_assistant/intelligent_assistant',
    })

  },
  onLoad() {
    getApp().editTabbar();
  }


})