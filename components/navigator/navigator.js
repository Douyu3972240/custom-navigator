// components/navigator/navigator.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navigatorType: {
      type: String,
      value: "type:'navigateBack',url:''"
    },
    customTitleStyle: {
      // 标题的css
      type: String,
      value: ""
    },
    customNavigatorStyle: {
      // 整个顶部导航的css，不包含最顶部系统通知栏的css
      type: String,
      value: ""
    },
    title: {
      type: String,
      value: "title"
    },
    showType: {
      type: Number,
      value: 1, //0不显示,1显示,2显示请选择门店
    } 
  },

  /**
   * 组件的初始数据
   */
  data: {
    menuButtonInfo: null,
    deviceInfo: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    back(e) {
      // 点击返回，返回到上一个页面去。
      console.log(e)
      console.log(this.data.navigatorType)
      const navigatorType = ["switchTab", "reLaunch", "redirectTo", "navigateTo", "navigateBack"]

      const navigatorData = e.currentTarget.dataset.type.replace(/\'/g, "").replace(/\"/g, "");
      if (navigatorData.indexOf("，") != -1) {
        console.error("您输入的字符串中有中文的逗号")
        return false
      } else
      if (navigatorData.indexOf("：") != -1) {
        console.error("您输入的字符串中有中文的冒号")
        return false
      }
      const navigatorList = navigatorData.split(",")
      if (navigatorList.length > 2) {
        console.error("只能有一个跳转类型")
        return false
      }

      let navigatorObject = {
        type: navigatorList[0].split(":")[1],
        url: navigatorList[1].split(":")[1].toString()
      }

      if (navigatorType.includes(navigatorObject.type) == false) {
        console.error(`跳转类型只能是${[...navigatorType]}中的一种`)
        return false
      }

      console.log(navigatorObject)

      switch (navigatorObject.type) {
        case navigatorType[0]:
          // switchTab
          wx.switchTab({
            url: navigatorObject.url,
          })
          break;
        case navigatorType[1]:
          // reLaunch
          wx.reLaunch({
            url: navigatorObject.url,
          })
          break;
        case navigatorType[2]:
          // redirectTo
          wx.redirectTo({
            url: navigatorObject.url,
          })
          break;
        case navigatorType[3]:
          // navigateTo
          wx.navigateTo({
            url: navigatorObject.url,
          })
          break;
        case navigatorType[4]:
          // navigateBack
          wx.navigateBack({
            delta: 1,
          })
          break;
      }

    },
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