var API_URL = 'https://api.douban.com/v2/movie/search';

Page({
  data:{
    movies:[]
  },
  search: function (e) {
    
    if(!e.detail.value) {
      return;
    }
    wx.showToast({
      title: "加载中。。。",
      icon: "loading",
      duration: 10000
    });
    var that = this;
    wx.request({
      url: API_URL + "?q=" + e.detail.value,
      data:{},
      header:{
        'Content-Type': 'json'
      },
      success: function (res) {
        //console.log(res.data);
        wx.hideToast();
        that.setData({
          movies:res.data.subjects
        });
      }
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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