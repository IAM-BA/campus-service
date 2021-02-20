import {request} from "./request";

export function getTestData() {
  return request({
    url: '/student/list',
  })
}

export function getHomeUesrdata() {
  return request({
    url: '/home/Uesrdata',
  })
}

export function getHomeClosedata() {
  return request({
    url: '/home/losedata',
  })
}
