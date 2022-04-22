// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperItems: [
      {imageUrl: 'https://636c-cloud1-4g2sqww73b1fdf3f-1306568592.tcb.qcloud.la/cloudbase-cms/upload/2021-10-25/saqo6tmpjndt7azuv1jalf79vgbs7rb5_.png?sign=b290711605fbba6f38dd975403ec6c28&t=1635169786', title: 'Model S',config:[
        {title:"437",subtitle:"公里续航"},
        {title:"437",subtitle:"公里续航"},
        {title:"437",subtitle:"公里续航"}
      ]},
      {imageUrl: 'https://636c-cloud1-4g2sqww73b1fdf3f-1306568592.tcb.qcloud.la/cloudbase-cms/upload/2021-10-25/gu5f5psv87ifsrvhcfg8lljy6cwrb9gs_.png?sign=8b4d550797646444fce32c4319007bdf&t=1635169929',title: 'Model Y',config:[
        {title:"537",subtitle:"公里续航"},
        {title:"537",subtitle:"公里续航"},
        {title:"537",subtitle:"公里续航"}
      ]},
      {imageUrl: 'https://636c-cloud1-4g2sqww73b1fdf3f-1306568592.tcb.qcloud.la/cloudbase-cms/upload/2021-10-25/satyknrdxtge7j1adlyv94asw95uaci8_.png?sign=6fed0633d81ab7247cc3db788a5d4329&t=16351702760',title: 'Model 3',config:[
        {title:"637",subtitle:"公里续航"},
        {title:"637",subtitle:"公里续航"},
        {title:"637",subtitle:"公里续航"}
      ]},
      {imageUrl: 'https://636c-cloud1-4g2sqww73b1fdf3f-1306568592.tcb.qcloud.la/cloudbase-cms/upload/2021-10-25/satyknrdxtge7j1adlyv94asw95uaci8_.png?sign=6fed0633d81ab7247cc3db788a5d4329&t=16351702760',title: 'Model Z',config:[
        {title:"637",subtitle:"公里续航"},
        {title:"637",subtitle:"公里续航"},
        {title:"637",subtitle:"公里续航"}
      ]},
    ],
    currentSwiperIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onSwiperChange(e) {
    const {current} =e.detail
    this.setData({
      currentSwiperIndex: current
    })
  },
  onLoad: function (options) {

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