# cisp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 开发目录结构解析
## public
```
作用： 存放index文件和图标LOGO
```
favicon.ico
```
页面选项框LOGO
```
index.html
```
主页面
```
***
## src 源文件

### 一级文件
***
App.vue
```
入口组件
```
main.js
```
入口js文件
```

***
### 二级目录文件
####1. assets
```
存放公共资源文件，图片、css等
```
css
```
公共css文件
```
1. base.css
```
公共css文件
```
2. normalize.css
```
浏览器标签属性统一css，
内部对许多标签的属性做一个重置
```
img
```
公共图片
```
***
####2. common
```
公共工具类等方法封装位置
```
const.js
```
公共常量
```
mixin.js
```
组件混入
```
utils.js
```
工具类
```
***
####3. components
```
存放公共组件
```
common
```
完全公共组件库
```
content
```
业务公共组件
```
***
####4. network
```
网络模块封装
当前使用axios网路模块
等待封装
```
***
####5. plugins
```
插件目录
```
element.js
```
饿了么组件库插件文件，已经做好全局引入直接使用即可
```
***
####6. router
```
前端路由配置
每个路由的独立文件已经抽离完毕，请自己进入自己的index文件进行修改
内部文件后跟有大写R即路由文件
```

***

####7. store
```
Vuex共享资源存放
等待抽离
后续跟有大写X即vueX文件
```
***
####8. views
```
视图组件存放
各自的组件请在此处进行开发，文件夹目录已经进行了划分
```

NetTest.vue
```
使用封装好的网络模块进行测试组件
```
***
## browserslistrc
```
浏览器控制
```
***
## editorconfig
```
编程规范
```
***
## gitignore
```
git上传忽略文件
```
***
##package.json
```
webpack插件版本控制
```
***
##package-lock.json
```
webpack插件版本锁定（真实版本）
```
***
##vue.config.js
```
vue的配置，推荐使用vue ui进入配置
目前只使用到别名的配置
```
***
