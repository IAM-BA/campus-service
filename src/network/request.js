import axios from 'axios'

export function request(config) {
  // 实例配置
  const instance = axios.create({
      baseURL: 'http://localhost:8080/Day01/api',
      timeout: 5000
    })

  // 请求拦截
  instance.interceptors.request.use(config => {
    // 1.比如对config中的一些信息不符合服务器的要求
    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    // 3.某些网络请求（比如登录(token))，必须携带一些特殊的信息
    return config
  }, err => {
    console.log(err)
    return err
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
    return err
  })

  // 返回实例
  return instance(config)
}
