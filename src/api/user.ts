import request from '@/utils/request'
// import request from './request'

// export function login(data) {
//   return request({
//     url: '/vue-element-perfect/user/login',
//     method: 'post',
//     data,
//   })
// }

export function login(params) {
  return request({
    url: '/login/LoginCon/login1',
    method: 'get',
    params,
  })
}

export function tologin(params) {
  return request({
    url: '/login/LoginCon/login1',
    method: 'get',
    params,
  })
}

export function getUserGames(params) {
  return request({
    url: '/permission/UserInfoCon/getGameOwner',
    method: 'get',
    params,
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token },
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post',
  })
}
