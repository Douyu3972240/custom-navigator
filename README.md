## custom-navigator
#### 这是一个小程序自定的顶部导航栏，需要的同学可自行下载
> 说明
> 1. navigatorType:
>     - type:<kbd>String</kbd>
>     - default:```value: "type:'navigateBack',url:''"```
>     - demo:```<navigator navigatorType="type:reLaunch,url:../index/index" ></navigator>```
>     - explain:type为跳转的类型，值参考小程序官方问题，url就是需要跳转的地址，中间用英文逗号隔开
> 2. customTitleStyle:
>     - type:<kbd>String</kbd>
>     - default:```value: ""```
>     - demo:```<navigator customTitleStyle="color:#f30;" ></navigator>```
>     - explain:顶部导航栏自定义标题的css
> 3. customNavigatorStyle:
>     - type:<kbd>String</kbd>
>     - default:```value: ""```
>     - demo:```<navigator customTitleStyle="background-color:#333;" ></navigator>```
>     - explain:顶部导航栏自定义的css，注意这里不包含最顶部系统显示栏的css
> 4. title:
>     - type:<kbd>String</kbd>
>     - default:```value: "title"```
>     - demo:```<navigator title="标题" ></navigator>```
>     - explain:顶部导航栏自定义的标题
> 5. showType:
>     - type:<kbd>Number</kbd>
>     - default:```value: 1```
>     - demo:```<navigator showType="2" ></navigator>```
>     - explain:顶部导航栏左边返回按钮显示的类型，这里可能根据业务需求有部分需要使用者去修改源码
