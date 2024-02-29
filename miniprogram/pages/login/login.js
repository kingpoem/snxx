Page({
  data: {
    currentPage: 'login',
    rememberPassword: false, // 默认不记住密码
    userType: '' // 保存用户类型
  },

  // 切换到登录界面
  switchToLogin() {
    this.setData({
      currentPage: 'login'
    });
  },

  // 切换到注册界面
  switchToRegister() {
    this.setData({
      currentPage: 'register'
    });
  },

  // 记住密码复选框状态变化
  rememberPasswordChanged(e) {
    this.setData({
      rememberPassword: e.detail.value
    });
  },

  // 用户类型复选框状态变化
  userTypeChanged(e) {
    const userType = e.currentTarget.dataset.type;
    if (this.data.userType === userType) {
      // 已经选中，再次点击则取消选中
      this.setData({
        userType: ''
      });
    } else {
      // 未选中，选中当前
      this.setData({
        userType
      });
    }
  },

  // 登录按钮点击事件
  login() {
    wx.switchTab({
      url: '/pages/home_cm/home_cm'
    });
  },

  // 注册按钮点击事件
  register() {
    wx.switchTab({
      url: '/pages/home_cm/home_cm'
    });
  },

  // 忘记密码按钮点击事件
  forgetPassword() {
    wx.navigateTo({
      url: '/pages/forgetpw/forgetpw'
    });
  }
});
