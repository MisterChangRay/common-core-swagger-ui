# common-core-swagger-ui

这个项目是美化swagger本身的文档。偏向企业文档

## how to use
- clone project
- run `npm start`
- open your browser on http://localhost:4200/

## 如何构建
- `ng build --dev` 构建开发使用项目;(js,html不会压缩打包)
- `ng build --prod` 构建生产环境项目;(js,html文件会被压缩和打包)


## 如何再swagger项目中使用
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
