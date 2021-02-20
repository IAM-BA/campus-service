// import axios from 'axios'
//
// export function PRequest(config) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://localhost:8080/Day01/api/teacher',
//     timeout: 5000
//   })
//
//   // 2.拦截器的使用
//   // axios.interceptors
//   // use传入两个参数(onFulfilled满足, onRejected拒绝)
//
//   // 2.1请求拦截
//   instance.interceptors.request.use(config => {
//     console.log(config);
//     // 1.比如对config中的一些信息不符合服务器的要求
//
//     // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
//
//     // 3.某些网络请求（比如登录(token))，必须携带一些特殊的信息
//     return config
//   }, err => {
//     console.log(err);
//     return err
//   })
//
//   // 2.2响应拦截
//   instance.interceptors.response.use(res => {
//     console.log(res)
//     return res.data
//   }, err => {
//     console.log(err)
//     return err
//   })
//
//
//   // 3.发送网络请求
//   return instance(config)
// }
