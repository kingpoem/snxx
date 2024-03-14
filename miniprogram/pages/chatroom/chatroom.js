// pages/chatroom/chatroom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputMessage: '',
    messages: [],
    scrollIntoView: ''
  },
  handleInput(event) {
    this.setData({
      inputMessage: event.detail.value
    });
  },

  async sendMessage() {
    const message = this.data.inputMessage;
    const API_KEY = "c82ViIBXo5jvocHjphA0iMwp";
    const SECRET_KEY = "xk2i5GVAC2rzipKl3KDqu2jLDHC3DIJp";
    //if (!message) {
    //  return;
    //}
    const url = "https://aip.baidubce.com/oauth/2.0/token";  
    const data_ = {  
        "grant_type": "client_credentials",  
        "client_id": API_KEY,  
        "client_secret": SECRET_KEY  
    };  
    wx.request({  
        url: url,  
        method: 'POST',  
        data: data_,  
        header: {  
            'content-type': 'application/json' 
        },  
        success: function(res) {  
            // 请求成功后的回调函数  
            console.log(res.data);  
        },  
        fail: function(error) {  
            console.error(error);  
        }  
    });
    const data = await response.json();

    const response = await wx.request({
      url: 'https://api.chatanywhere.com.cn/v1/chat/completions',
      method: 'POST',
      data: {
        "model": "gpt-3.5-turbo",
        "messages": [{
          "role": "user",
          "content": message
        }]
      },
      header: {
        'Authorization': 'Bearer sk-OKPZ0LZ4CTvRE0IfYfPd94Z5ul3zpGSbKdzadr7U5SPTg8jX',
        'Content-Type': 'application/json'
      },
      success: (res) => {
        const reply = res.data.choices[0].message.content;

        this.setData({
          inputMessage: '',
          messages: [...this.data.messages, 
          { content: message, type: 'user', alignment: 'right'},
          { content: reply, type: 'bot', alignment: 'left' },],
          scrollIntoView: 'msg-' + (this.data.messages.length - 1)
        });
      },
      fail: (error) => {
        console.error(error);
      }
    });
  }
  
})
