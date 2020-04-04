Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航选中
    currentIndexNav:0,
    // 首页导航数据
    navList:[],
    swiperList:[],
    videoList:[]
  },
  
  // 导航点击选中
  activeNav(e) {
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  /**
   * 获取首页导航数据
   */
  getNavList() {
    let that = this;
    wx.request({
      url:"https://result.eolinker.com/6hHzSUg20f6d1ca01405596638e254cd9e354c4774d7610?uri=/navList",
      success(res) {
        // console.log(res);
        if (res.data.code===0) {
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },

  /**
   * 获取轮播图数据
   */
  getSwiperList() {
    let that = this;
    wx.request({
      url:"https://result.eolinker.com/6hHzSUg20f6d1ca01405596638e254cd9e354c4774d7610?uri=/swiperList",
      success(res) {
        // console.log(res);
        if (res.data.code===0) {
          that.setData({
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },

    /**
   * 获取轮播图数据
   */
  getVideoList() {
    let that = this;
    wx.request({
      url:"https://result.eolinker.com/6hHzSUg20f6d1ca01405596638e254cd9e354c4774d7610?uri=/videoList",
      success(res) {
        // console.log(res);
        if (res.data.code===0) {
          that.setData({
            videoList:res.data.data.videoList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.调用获取首页导航数据
    this.getNavList();
    // 2.调用获取轮播图数据
    this.getSwiperList();
    // 3.调用获取视频列表
    this.getVideoList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})