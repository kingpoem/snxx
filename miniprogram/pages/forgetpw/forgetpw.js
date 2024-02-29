Page({
  data: {
    userType: '',
    verificationText: '发送验证码', // 按钮显示的文本
    countdown: 0, // 倒计时秒数
    counting: false // 是否正在倒计时
  },

  // 用户类型复选框状态变化
  userTypeChanged(e) {
    const userType = e.currentTarget.dataset.type;
    const checked = e.currentTarget.dataset.checked;

    if (checked) {
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

  // 发送验证码按钮点击事件
  sendVerificationCode() {
    if (this.data.counting) {
      return; // 如果正在倒计时，不执行任何操作
    }

    // 模拟发送验证码操作（在实际应用中需要发送请求到服务器）

    // 设置倒计时
    this.setData({
      counting: true,
      countdown: 60,
      verificationText: '60s'
    });

    let interval = setInterval(() => {
      let countdown = this.data.countdown - 1;
      if (countdown > 0) {
        this.setData({
          countdown: countdown,
          verificationText: countdown + 's' // 更新按钮文字为剩余秒数
        });
      } else {
        clearInterval(interval); // 清除倒计时
        this.setData({
          counting: false,
          verificationText: '发送验证码' // 恢复按钮文字为原始文本
        });
      }
    }, 1000);
  },

  // 确定按钮点击事件
  confirmButtonClick() {
    // 跳转到 home_cm 页面
    wx.navigateTo({
      url: '/pages/home_cm/home_cm'
    });
  }
});
