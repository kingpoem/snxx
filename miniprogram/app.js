// app.js
App({
  globalData: {
    userInfo: {},
    tabbar: {
      list: [{
          "pagePath": "/pages/home_cm/home_cm",
          "iconPath": "/images/tabs/home_cm_tb.png",
          "selectedIconPath": "/images/tabs/sl_home_cm_tb.png"
        },
        // {
        //   "pagePath": "/pages/classification_cm/classification_cm",
        //   "iconPath": "/images/tabs/classification_cm_tb.png",
        //   "selectedIconPath": "/images/tabs/sl_classification_cm_tb.png"
        // },
        // {
        //   "pagePath": "/pages/cart_cm/cart_cm",
        //   "iconPath": "/images/tabs/cart_cm_tb.png",
        //   "selectedIconPath": "/images/tabs/sl_cart_cm_tb.png"
        // },
        {
          "pagePath": "/pages/custom_cm/custom_cm",
          "iconPath": "/images/tabs/custom_cm_tb.png",
          "selectedIconPath": "/images/tabs/sl_custom_cm_tb.png"
        }
      ]
    }
  },
  switchUserType() {
    const customTabbar = [{
        "pagePath": "/pages/home_cm/home_cm",
        "iconPath": "/images/tabs/home_cm_tb.png",
        "selectedIconPath": "/images/tabs/sl_home_cm_tb.png"
      },
      {
        "pagePath": "/pages/classification_cm/classification_cm",
        "iconPath": "/images/tabs/classification_cm_tb.png",
        "selectedIconPath": "/images/tabs/sl_classification_cm_tb.png"
      },
      {
        "pagePath": "/pages/cart_cm/cart_cm",
        "iconPath": "/images/tabs/cart_cm_tb.png",
        "selectedIconPath": "/images/tabs/sl_cart_cm_tb.png"
      },
      {
        "pagePath": "/pages/custom_cm/custom_cm",
        "iconPath": "/images/tabs/custom_cm_tb.png",
        "selectedIconPath": "/images/tabs/sl_custom_cm_tb.png"
      }
    ]
    const farmerTabbar = [{
        "pagePath": "/pages/home_cm/home_fm",
        "iconPath": "/images/tabs/home_fm_tb.png",
        "selectedIconPath": "/images/tabs/sl_home_cm_fb.png"
      },
      {
        "pagePath": "/pages/indent_fm/indent_fm",
        "iconPath": "/images/tabs/indent_fm_tb.png",
        "selectedIconPath": "/images/tabs/sl_indent_fm_tb.png"
      },
      {
        "pagePath": "/pages/chat_fm/chat_fm",
        "iconPath": "/images/tabs/chat_fm_tb.png",
        "selectedIconPath": "/images/tabs/sl_chat_fm_tb.png"
      },
      {
        "pagePath": "/pages/farmer_fm/farmer_fm",
        "iconPath": "/images/tabs/farmer_fm_tb.png",
        "selectedIconPath": "/images/tabs/sl_farmer_fm_tb.png"
      }
    ]

    switch (this.globalData.userInfo.type) {
      case 0:
        this.globalData.tabbar.list = customTabbar
        break;
      case 1:
        this.globalData.tabbar.list = farmerTabbar
        break;
    }
  },
  editTabbar() {
    let tabbar = this.globalData.tabbar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  onLaunch() {
    wx.hideTabBar();
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.cloud.init()
    // check user existence
    wx.cloud.callFunction({
      name: 'user',
      data: {
        type: 'checkUserExistence'
      }
    }).then(res => {
      console.log(res)
      if (!res.result) {
        wx.redirectTo({
          url: '/pages/login/login',
        })
        return;
      }
      // get user info
      wx.cloud.callFunction({
        name: 'user',
        data: {
          type: 'getUserInfo'
        }
      }).then(res => {
        console.log(res)
        this.globalData.userInfo = res.user
        this.switchUserType()
      }).catch(res => {
        console.error(res)
        //TODO: alert
      })
    }).catch(res => {
      console.error(res)
    })


  }
}, )