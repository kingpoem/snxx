Page({  
  data: {  
    zones: [  
      { label: '商品名称' },  
      { label: '商品图片' },  
      { label: '商品简介' },  
      { label: '商品优势' },  
      { label: '商品品质' },  
      { label: '商品产地' },  
      { label: '商品类别' },  
      { label: '商品规格' },  
      { label: '商品标价' }  
    ]  
  },  
  inputChanged: function(e) {  
    const zoneIndex = e.currentTarget.dataset.zone;  
    const value = e.detail.value;  
      
    this.setData({  
      ['zones[' + zoneIndex + '].value']: value  
    });  
  }  
});