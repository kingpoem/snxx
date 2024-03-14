// app.js
App({
  globalData: {
    userInfo: null,
    tabbar: {
      list: [{
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
    }
  },
  switchUserType() {
    console.log("switch to ", this.globalData.userInfo.type)
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
    wx.cloud.callFunction({
      name: 'user',
      data: {
        type: 'getUserInfo'
      }
    }).then(res => {
      if (res.user.type === undefined) {
        //TODO: jump to sign up page
      }

      this.globalData.userInfo = res.user
      this.switchUserType()
    }).catch(res => {
      console.error(res)
      //TODO: alert
    })
  }
}, )