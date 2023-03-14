import request from '@/utils/request'
import { getName, getToken } from '@/utils/auth'
// 查询权限
export function getPermisson(params) {
  return request({
    url: '/sg/GetUserInfoCon/getPermission',
    method: 'get',
    params,
  })
}
// 查询权限
export function getPermissons(params) {
  return request({
    url: '/permission/UserInfoCon/permissions',
    method: 'get',
    params,
  })
}
// 添加权限
export function addPermisson(params) {
  return request({
    url: '/permission/ResourceCon/addResource',
    method: 'get',
    params,
  })
}
// 删除权限
export function delPermisson(params) {
  return request({
    url: '/permission/ResourceCon/delResource',
    method: 'get',
    params,
  })
}
// 查询权限
export function selPermisson(params) {
  return request({
    url: '/permission/ResourceCon/selResource',
    method: 'get',
    params,
  })
}
// 更新权限
export function updatePermisson(params) {
  return request({
    url: '/permission/ResourceCon/updateResource',
    method: 'get',
    params,
  })
}
// 获取权限树
export function getPermissonTree(params) {
  return request({
    url: '/permission/RoleInfoCon/resourceTree',
    method: 'get',
    params,
  })
}

// 角色信息
// 添加角色
export function addRole(params) {
  return request({
    url: '/permission/RoleInfoCon/addRole',
    method: 'get',
    params,
  })
}
// 添加角色
export function delRole(params) {
  return request({
    url: '/permission/RoleInfoCon/delRole',
    method: 'get',
    params,
  })
}
// 查询角色
export function selRole(params) {
  return request({
    url: '/permission/RoleInfoCon/selRole',
    method: 'get',
    params,
  })
}
// 更新角色
export function updateRole(params) {
  return request({
    url: '/permission/RoleInfoCon/updateRole',
    method: 'get',
    params,
  })
}
// 新增角色
export function addAccount(params) {
  return request({
    url: '/permission/UserInfoCon/addAccount',
    method: 'get',
    params,
  })
}
// 获取用户列
export function getUserLists(params) {
  return request({
    url: '/permission/UserInfoCon/selAccount',
    metod: 'get',
    params,
  })
}
// 获取用户列表
export function updateUser(params) {
  return request({
    url: '/permission/UserInfoCon/updateAccount',
    method: 'get',
    params,
  })
}
// 游戏配置
export function addGame(params) {
  params['userName'] = getName()
  params['token'] = getToken()
  return request({
    url: '/permission/GameCon/addGame',
    method: 'get',
    params,
  })
}
export function editGame(params) {
  params['userName'] = getName()
  params['token'] = getToken()
  return request({
    url: '/permission/GameCon/updateGame',
    method: 'get',
    params,
  })
}
export function delGame(params) {
  params['userName'] = getName()
  params['token'] = getToken()
  return request({
    url: '/permission/GameCon/delGame',
    method: 'get',
    params,
  })
}
