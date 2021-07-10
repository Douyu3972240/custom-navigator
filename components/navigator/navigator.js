// components/navigator/navigator.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showType:{
      type:Number,
      value:0,  //0不显示,1显示,2显示请选择门店
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    menuButtonInfo: null,
    deviceInfo: null
  },
  lifetimes: {
    created() {
      // 在组件实例刚刚被创建时执行	
    },
    attached() {
      // 在组件实例进入页面节点树时执行	

      const menuButtonInfo = wx.getMenuButtonBoundingClientRect()
      console.log(menuButtonInfo)
      const deviceInfo = wx.getSystemInfoSync()
      console.log(deviceInfo)
      this.setData({
        menuButtonInfo,
        deviceInfo
      })
    },
    ready() {
      // 在组件在视图层布局完成后执行	
    },
    moved() {
      // 在组件实例被移动到节点树另一个位置时执行	
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行	
    },
    error() {
      // 每当组件方法抛出错误时执行	
    }
  }
})