Page({  
  data: {  
    navbar: ['全部', '待支付', '待发货','待收货','待评价'], // 选项卡数组  
    currentIndex: 0, // 当前选中选项卡的索引  
  },  
  switchTab: function(e) {  
    const index = e.currentTarget.dataset.index; // 获取点击的选项卡索引  
    this.setData({ currentIndex: index }); // 更新当前选中选项卡的索引  
    // 这里可以添加切换选项卡时的其他逻辑，比如页面滚动、数据加载等。  
  },  
  onLoad: function(options) {  
    // 从options中获取传入的currentIndex参数  
    const currentIndex = options.currentIndex || 0; // 如果没有传入currentIndex或传入的值无效，则默认为0  
    this.setData({ currentIndex: currentIndex }); // 更新当前选中选项卡的索引  
    // 根据currentIndex执行其他逻辑，比如加载对应的数据  
  },  
  delete_indent(){
    // 删除订单
  }
});