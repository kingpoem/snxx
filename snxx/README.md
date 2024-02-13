# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

cloudfunctions/: 这个文件夹通常包含所有云函数的代码。云函数是在微信小程序的云端运行的函数，可以在小程序前端调用，实现一些后端逻辑，如数据库操作、文件操作、HTTP 请求等。

quickstartFunction/: 这个文件夹可能包含了一个快速入门示例的云函数。

createCollection/, getOpenId/, selectRecord/, sumRecord/, updateRecord/: 这些文件夹看起来像是包含了特定功能的云函数，如创建集合、获取用户OpenID、选择记录、求和记录和更新记录。

config.json: 这个文件通常用于配置小程序的全局设置，如页面路径、网络超时时间、tabBar 等。

JS/: 这个文件夹可能包含了一些JavaScript库或工具函数。

index.js: 这个文件通常是小程序的主入口文件，包含了小程序的初始化逻辑和页面注册。

json/: 这个文件夹可能包含了JSON格式的配置文件或数据。

package.json: 这是一个标准的Node.js项目配置文件，用于定义项目的元数据和依赖。

miniProgram/: 这个文件夹可能包含了小程序的前端代码，包括页面、组件、样式等。

components/: 这个文件夹包含了小程序的自定义组件。
cloudTipModal/: 这个文件夹可能包含了一个名为“cloudTipModal”的自定义组件，用于显示云相关的提示或消息。
index.js: 组件的JavaScript逻辑文件。
index.wxml: 组件的WXML模板文件。
index.wxss: 组件的WXSS样式文件。
js/: 组件的JavaScript逻辑文件夹。
images/: 组件的图片资源文件夹。

pages/: 这个文件夹包含了小程序的各个页面。

app.js: 这个文件是小程序的应用逻辑文件，用于处理全局事件和生命周期函数。

珏S/: 这个文件夹的名称看起来不太标准，可能是一个错误或特定的项目命名。需要更多的上下文来确定其用途。

project.config.js: 这个文件用于配置小程序的项目设置，如编译选项、开发者工具设置等。

readme.md: 这是一个Markdown格式的文档文件，通常用于描述项目的使用说明、开发指南等。

.private/: 这个文件夹可能包含了一些私有的、不应该被公开的文件或资源。

.co/: 这个文件夹的名称也不太标准，可能是一个错误或特定的项目命名。需要更多的上下文来确定其用途。
