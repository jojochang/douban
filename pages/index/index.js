var API_URL = 'https://api.douban.com/v2/movie/top250';

Page({
  data: {
    movies: [],
    title: "加载中"
  },
  onLoad: function () {
    var that = this;
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      
    });
    wx.request({
      url: API_URL,
      data: {},
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        wx.hideToast();
        var data = res.data;
        that.setData({
          title:data.title,
          movies:data.subjects
        });
        
      } 
    });
  }
})
