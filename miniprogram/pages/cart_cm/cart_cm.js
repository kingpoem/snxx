// pages/cart_cm/cart_cm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
    productinfo: [
      {
        guid: "1",
        ownerld: "小林的店铺",
        name: "阳山水蜜桃",
        image: ["/images/prods/product1.png"],
        despciption: "",
        address: "",
        type: [
          {
            guid: "",
            name: "阳山水蜜桃",
            number: 1,
            price: 138,
          }
        ],
        category: "",
        quality: "",
        advantage: "",
        warranty: "6-7两,一盒6个",
        sold: 0,
        hidden: false
      },
      {
        guid: "2",
        ownerld: "小林的店铺",
        name: "阳山水蜜桃",
        image: ["/images/prods/product1.png"],
        despciption: "",
        address: "",
        type: [
          {
            guid: "",
            name: "阳山水蜜桃",
            number: 1,
            price: 138,
          }
        ],
        category: "",
        quality: "",
        advantage: "",
        warranty: "6-7两,一盒6个",
        sold: 0,
        hidden: false
      },
      {
        guid: "3",
        ownerld: "小林的店铺",
        name: "阳山水蜜桃",
        image: ["/images/prods/product1.png"],
        despciption: "",
        address: "",
        type: [
          {
            guid: "",
            name: "阳山水蜜桃",
            number: 1,
            price: 138,
          }
        ],
        category: "",
        quality: "",
        advantage: "",
        warranty: "6-7两,一盒6个",
        sold: 0,
        hidden: false
      },
      {
        guid: "4",
        ownerld: "小林的店铺",
        name: "阳山水蜜桃",
        image: ["/images/prods/product1.png"],
        despciption: "",
        address: "",
        type: [
          {
            guid: "",
            name: "阳山水蜜桃",
            number: 1,
            price: 138,
          }
        ],
        category: "",
        quality: "",
        advantage: "",
        warranty: "6-7两,一盒6个",
        sold: 0,
        hidden: false
      },
      {
        guid: "5",
        ownerld: "114514",
        name: "阳山水蜜桃",
        image: ["/images/prods/product1.png"],
        despciption: "",
        address: "",
        type: [
          {
            guid: "",
            name: "阳山水蜜桃",
            number: 1,
            price: 138,
          }
        ],
        category: "",
        quality: "",
        advantage: "",
        warranty: "6-7两,一盒6个",
        sold: 0,
        hidden: false
      },
      {
        guid: "5",
        ownerld: "114514",
        name: "阳山水蜜桃",
        image: ["/images/prods/product1.png"],
        despciption: "",
        address: "",
        type: [
          {
            guid: "",
            name: "阳山水蜜桃",
            number: 1,
            price: 138,
          }
        ],
        category: "",
        quality: "",
        advantage: "",
        warranty: "6-7两,一盒6个",
        sold: 0,
        hidden: false
      },
    ]
  },
  jmp_confirm_order() {
    wx.navigateTo({
      url: '/pages/confirm_order/confirm_order',
    })
  },
  onLoad() {
    getApp().editTabbar();
  }
})