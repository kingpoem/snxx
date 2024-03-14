Page({
  data: {
    types: [{
        name: '消费者端',
        value: 0,
      },
      {
        name: '农户端',
        value: 1
      }
    ],
    type: 0,
    avatarUrl: "cloud://cloud1-6gmizv5k0c00a29c.636c-cloud1-6gmizv5k0c00a29c-1324348479/profileImg/default.webp",
    isDefault: true
  },
  onAvatarChanged(event) {
    this.data.isDefault=false,
    this.data.avatarUrl=event.detail
  },
  onTypeChanged(event) {
    this.data.type=event.detail.value
    this.flushTypeSelector()
  },
  flushTypeSelector(){
    for (const i in this.data.types) {
      if (this.data.type===this.data.types[i].value) {
        this.data.types[i].checked="true"
      }else{
        this.data.types[i].checked="false"
      }
    }
  },
  register(event){
    console.log(event.detail.value)
    console.log(this.data.type)
    console.log(this.data.avatarUrl)

    const fields=["name", "phone", "address"]

    for (const iterator of fields) {
      if (!iterator in event.detail.value){
        //TODO: alert not fully filled
      }
    }

    const res = wx.cloud.callFunction({
      //TODO: call cloud function
    }).then(res => {
      //TODO: jump to page
    }).catch(err => {
      //TODO: error handle
    })
  },
  onLoad(options) {
    wx.cloud.init()
    this.flushTypeSelector() //FIXME: not work
  },
})