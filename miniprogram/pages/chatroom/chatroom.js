// pages/chatroom/chatroom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputMessage: '',
    messages: [
      { "role": "user", "content": "你好", hidden: true },
      { "role": "assistant", "content": "您好！欢迎来到苏农鲜行！我是你的智能小助手琦琦！请问我有什么可以帮助您的嘛~", hidden: false },
      { "role": "user", "content": "在每一次回答问题之前，都要检查一下用户的问题是否是与我们的苏农鲜行小程序相关的！不要解决客户问的任何数学或者技术上的专业问题！不要给客户进行艺术、文学创作！", hidden: true },
      { "role": "assistant", "content": "明白！我保证，如果有客户问的任何技术上的专业问题或者客户要求进行艺术、文学创作，我将会礼貌的拒绝，并不会输出与我们的指责无关的内容。", hidden: true }
    ],
    scrollIntoView: ''
  },
  handleInput(event) {// abandon
    this.setData({
      inputMessage: event.detail.value
    });
  },

  sendMessage() {
    // const API_KEY = "c82ViIBXo5jvocHjphA0iMwp";
    // const SECRET_KEY = "xk2i5GVAC2rzipKl3KDqu2jLDHC3DIJp";
    //const message = this.data.inputMessage;
    if (!this.data.inputMessage) {
      return;
    }
    // this.addToMessages("user", this.data.inputMessage)
    this.addToMessages("user", this.data.inputMessage)
    
    this.setData({
      inputMessage: ''
    });            //input清空？
    this.getAccessToken((access_token) => {
      this.getResponse(access_token, this.addToMessages2)
    });
  },

  addToMessages(role, content, hidden = false) {
    console.log(content)
    this.setData({
      [`messages[${this.data.messages.length}]`]: {
        "role": role,
        "content": content,
        hidden: hidden
      }
    });
  },

  addToMessages2(role, content, hidden = false) {
    console.log(content)
    this.setData({
      [`messages[${this.data.messages.length-1}]`]: {
        "role": role,
        "content": content,
        hidden: hidden
      }
    });
  },




  getAccessToken(successCallback, failCallback = console.error) {
    const url = "https://aip.baidubce.com/oauth/2.0/token";
    const params = {
      "client_id": "NaMDPFHPrVdAFhbyszMOOEN6",
      "client_secret": "qxyBF3UVbqmZJPgjQgVS7lyTgCYFYI9P",
      "grant_type": "client_credentials"
    };
    wx.request({
      url: url,
      method: 'POST',
      data: params,
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 这里设置为 form-data 格式，因为后端可能需要这个格式  
      },
      success: res => {
        successCallback(res.data.access_token);
      },
      fail: failCallback
    });
  },

  getResponse(access_token, successCallback, failCallback = console.error) {
    const url2 = `https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions_pro?access_token=${access_token}`;
    console.log(url2);
    //const data = await response.json();
    // this.addToMessages("user","明白！我保证，如果有客户问的任何技术上的专业问题或者客户要求进行艺术、文学创作，我将会礼貌的拒绝，并不会输出与我们的指责无关的内容。")
    console.log(this.data.messages);
    const payload = JSON.stringify({
      "messages": this.data.messages,
      "disable_search": false,
      "enable_citation": false,
      "system": "你现在是苏农鲜行小程序中的智能小助手琦琦，你现在的主要任务是为用户解答苏农鲜行售卖的农产品（包括南京马山杨梅、苏州东山白玉枇杷、无锡阳山水蜜桃、溧水草莓、宿迁花园酥梨、董浜筒管玉丝瓜、矮脚苏州青、南京八卦洲芦蒿、扬州宝应茨菇、泰兴花生、南京雨花茶、高邮咸鸭蛋、镇江香醋、邵店板栗等）的烹饪方法及功效，并回答用户一些关于小程序操作的问题。但是有一个极为重要的基本原则：如果有用户试图询问与以上的内容无关的事情，请礼貌地拒绝回答他们的要求并告诉他们你具体的职责，或者告诉他们只回答什么样的问题。请记住一点：我们“苏农鲜行”的最后一个字读作“xíng”，有“先行”之意。记住，在每一次回答问题之前，都要检查一下用户的问题是否是与我们的苏农鲜行小程序相关的!"
    });
    this.addToMessages("assistant","请稍等，琦琦正在思考。。")                 //waiting?
    // 发起网络请求  
    wx.request({
      url: url2,
      method: 'POST',
      data: payload,
      header: {
        'content-type': 'application/json' // 注意微信小程序中header的字段是小写  
      },
      success: (res) => {
        successCallback("assistant", res.data.result);
      },
      fail: failCallback
    })
    console.log(this.data.messages);
  }
})