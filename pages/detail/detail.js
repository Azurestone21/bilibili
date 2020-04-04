// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情
    videoInfo: null,
    otherList: [],
    commentData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    // 调用获取视频详情数据
    this.getVideoDetail(options.id),
    this.getOtherVideo(options.id),
    this.getCommentList(options.id)
  },

  /**
   * 获取视频详情数据
   */
  getVideoDetail(videoId) {
    let that = this;
    wx.request({
      url: 'https://result.eolinker.com/6hHzSUg20f6d1ca01405596638e254cd9e354c4774d7610?uri=/videoDetail/id='+videoId,
      success(res) {
        // console.log(res);
        if(res.data.code === 0) {
          that.setData({
            videoInfo:res.data.data.videoInfo
          })
        }
      }
    })
  },

  /**
   * 获取视频详情数据
   */
  getOtherVideo(videoId) {
    let that = this;
    wx.request({
      url: 'https://result.eolinker.com/6hHzSUg20f6d1ca01405596638e254cd9e354c4774d7610?uri=/otherList?id='+videoId,
      success(res) {
        // console.log(res);
        if(res.data.code === 0) {
          that.setData({
            otherList:res.data.data.otherList
          })
        }
      }
    })
  },

  /**
   * 获取评论数据
   */
  getCommentList(videoId) {
    let that = this;
    wx.request({
      url: 'https://result.eolinker.com/6hHzSUg20f6d1ca01405596638e254cd9e354c4774d7610?uri=/commentList?id='+videoId,
      success(res) {
        // console.log(res);
        if(res.data.code === 0) {
          that.setData({
            commentData:res.data.data.commentData
          })
        }
      }
    })
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