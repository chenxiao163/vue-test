// import Cookies from 'js-cookie'
import Cookies from 'js-cookie'

const TokenKey = 'hl_token'
const PermissionKey = 'hl_permission'
const NameKey = 'hl_name'
const SliderKey = 'hl_silder'
const routerKey = 'hl_routers'
const GameKey = 'hl_gameMark'
const GamesKey = 'hl_games'
const GameNameKey = 'hl_gameName'

export function getGameName() {
  return Cookies.get(GameNameKey)
}
export function setGameName(name) {
  return Cookies.set(GameNameKey, name)
}
export function removeGameName() {
  return Cookies.remove(GameNameKey)
}
export function getToken() {
  return Cookies.get(TokenKey)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function getGameMark() {
  console.log(Cookies.get(GameKey))
  return Cookies.get(GameKey)
}
export function setGameMark(mark) {
  return Cookies.set(GameKey, mark)
}
export function removeGameMark() {
  return Cookies.remove(GameKey)
}
export function getPermission() {
  return Cookies.get(PermissionKey)
}

export function setPermission(permission) {
  return Cookies.set(PermissionKey, permission)
}
export function removePermission() {
  return Cookies.set(PermissionKey, [])
}
export function getName() {
  return Cookies.get(NameKey)
}

export function setName(name) {
  return Cookies.set(NameKey, name)
}

export function removeName() {
  return Cookies.remove(NameKey)
}

export function getSlider() {
  return sessionStorage.getItem(SliderKey)
}

export function setSlider(slider) {
  return sessionStorage.setItem(SliderKey, slider)
}

export function removeSlider() {
  return sessionStorage.setItem(SliderKey, [])
}

export function getGames() {
  return sessionStorage.getItem(GamesKey)
}

export function setGames(game) {
  return sessionStorage.setItem(GamesKey, game)
}

export function removeGames() {
  return sessionStorage.setItem(GamesKey, [])
}

export function getRouters() {
  return Cookies.get(routerKey)
}

export function setRouters(route) {
  return Cookies.set(routerKey, route)
}

export function removeRouters() {
  return Cookies.remove(routerKey)
}
