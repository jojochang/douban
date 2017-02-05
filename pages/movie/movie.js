var API_URL = 'https://api.douban.com/v2/movie/subject/';
Page({
  data:{
    movie:{}
  },
  onLoad:function(params){
    var that = this;
    wx.request({
    url: API_URL+params.id, 
    data: {},
    header: {
      'Content-Type': 'json'
   },
  success: function(res) {
    //console.log(res.data)
    that.setData({
      movie:res.data
    });
  }
})
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})