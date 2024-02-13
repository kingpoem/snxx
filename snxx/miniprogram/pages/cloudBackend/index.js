Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  goOfficialWebsite() {
    const url = 'https://docs.cloudbase.net/toolbox/quick-start';
    wx.navigateTo({
      url: `../web/index?url=${url}`,
    });
  }
})