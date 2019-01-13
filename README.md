# lemonc for vue
![image](https://img.shields.io/badge/electron-^4.0.1-blue.svg)

![image](https://img.shields.io/badge/vue-^2.5.21-blue.svg)
![image](https://img.shields.io/badge/webpack-^4.28.3-blue.svg)
![image](https://img.shields.io/badge/less-^3.9.0-blue.svg)
![image](https://img.shields.io/badge/eslint-^5.11.1-blue.svg)

### Application directory

```
目录（或者子目录）
├─.scripts                      electron 编译配置
|   ├─config                    webpack打包配置
|   |   ├─main.js               main进程编译配置
|   |   └─renderer.js           renderer进程编译配置
|   ├─util                      工具包
|   |   └─logger.js             日志输出
|   ├─build.js                  编译器模块
|   ├─dev-client.js             热加载配置
|   └─dev.js                    开发编译器模块
├─build                         应用打包生产目录
|   └─icons                     打包应用时所需图标目录
├─dist                          web生产目录
|   └─electron                  web文件生产目录
├─src                           开发目录
|   ├─main                      主进程开发文件夹
|   |   ├─dev.service.js        主进程开发服务
|   |   └─index.js              主进程入口文件
|   ├─renderder                 renderder进程开发文件夹
|   |   ├─assets                资源文件
|   |   ├─components            组件
|   |   ├─router                路由
|   |   ├─store                 vuex
|   |   ├─App.vue               App组件
|   |   └─main.js               渲染进程入口
|   └─index.html                html模板文件
├─license.txt                   打包应用时启动安装界面的协议文件
├─package.json                  包管理
└─README.md                     自述文件
```

### use 

```shell
> npm i
> npm run dev
```

### build

```shell
> npm i -g electron-builder
> npm run build
```

