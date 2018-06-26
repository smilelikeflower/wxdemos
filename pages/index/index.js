//index.js
//获取应用实例
const app = getApp()
// console.log('app=====',app);
/*Page({
  data:{
    motive:'汽车导报',
  },
    
});*/
Page({
  data: {
    motto: 'Hello World',
    fruits: ['apple','pear','banana'],
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    studentA: { name: '小明', className: '三年级三班', age: 10 },
    studentB: {name:'小青',className:'三年级四班',age:11},
    count: 0,
    dataBind: {
      checkFlag: true,
      flag: false,
      a: 1,
      b: 2,
      c: 3,
      length: 6,
      name: 'NANA',
      array: [1,2,3],
      zero: 0,
      x:'X',
      y:'Y',
      obj1:{
        x:'X',
        y:'Y'
      },
      obj2: {
        w: 'W',
        z: 'Z'
      },
    },
    listRender: {
      array:[
        { message: 'foo' },
        { message: 'bar' },
      ],
    },
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  switch: function(){
    const length = this.data.objectArray.length
    // for(let i = 0; i < length; ++i){
    //   const x = Math.floor(Math.random() * length)
    //   const y = Math.floor(Math.random() * length)
    //   const temp = this.data.objectArray[x]
    //   this.data.objectArray[x] = this.data.objectArray[y]
    //   this.data.objectArray[y] = temp
    // }
    //Math.random()包括0,不包括1
    for (let i = 0; i < length; i++) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function(){
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })

    const length2 = this.data.objectArray.length
    console.log(this.data.objectArray[length2])
  },
  addNumberToFront: function(){
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  add: function(){
    this.setData({
      count:this.data.count+1
    })
  },
  //事件处理函数
  bindViewTap: function() {
    console.log(666);
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    wx.switchTab({
      url:'../logs/logs',
    });
    console.log(777);
    
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
