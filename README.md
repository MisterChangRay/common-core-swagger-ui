# common-core-swagger-ui

这个项目是美化swagger本身的文档。偏向企业文档;
增加功能：
- API检索功能
- debug优化显示传参

## 如何扩展
- clone project
- run `npm start`
- open your browser on http://localhost:4200/
- 扩展你自己的代码把

## 如何构建
- `ng build --dev` 构建开发使用项目;(js,html不会压缩打包)
- `ng build --prod` 构建生产环境项目;(js,html文件会被压缩和打包)


## 如何在swagger项目中使用
- 复制项目dist目录到你项目中的web容器中
- 配置目录下的config.js文件
``` js
window.appConfigs  = {
  //swagger后台文档地址
	swaggerApiUrl : "/v2/api-docs",
  //debug请求地址
	debugApiUrl : "http://localhost:8080"
}
```
- 启动你的项目,访问其中下`index.html`文件

## 注意事项
- 使用请确保swagger2版本>=2.6
- 请不要修改后台swagger2接口访问地址，项目是采用的默认地址：baseUrl + `/v2/api-docs`



## 部分截图
[截图](./screenshot/20180415204009.png)
[截图](./screenshot/20180415204033.png)
[截图](./screenshot/20180415204055.png)
