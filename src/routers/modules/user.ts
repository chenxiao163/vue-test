// import { login, getUserGames } from '@/api/user'
// import {
//   getToken,
//   getGames,
//   setGames,
//   removeGames,
//   setGameMark,
//   removeGameMark,
//   getGameMark,
//   setToken,
//   removeToken,
//   setName,
//   getName,
//   removeName,
//   removeSlider,
//   getSlider,
//   setSlider,
//   removePermission,
// } from '@/utils/auth'
// import { resetRouter } from '@/router'
// import { getPermissons } from '@/api/permission'
// import store from '@/store'

// const state = {
//   token: getToken(),
//   name: getName(),
//   avatar: '',
//   role: [],
//   ifSlider: false,
//   gameMark: getGameMark(),
//   games: getGames() ? JSON.parse(getGames()) : [],
//   nodeChilds: getSlider(),
// }

// const mutations = {
//   SET_TOKEN: (state, token) => {
//     state.token = token
//   },
//   SET_NAME: (state, name) => {
//     state.name = name
//   },
//   SET_SLIDER: (state, flag) => {
//     state.ifSlider = flag
//   },
//   SET_AVATAR: (state, avatar) => {
//     state.avatar = avatar
//   },
//   SET_ROLE: (state, role) => {
//     state.role = role
//   },
//   SET_GAMES: (state, game) => {
//     state.games = game
//   },
//   SET_GAMEMARK: (state, mark) => {
//     state.gameMark = mark
//   },
//   SET_NODECHILDS: (state, nodeChilds) => {
//     state.nodeChilds = nodeChilds
//   },
// }

// const actions = {
//   // user login
//   login({ commit }, userInfo) {
//     const { username, password } = userInfo
//     return new Promise((resolve, reject) => {
//       login({ userName: username.trim(), password: password })
//         .then((response) => {
//           // resolve(response)
//           const data = response.data
//           if (!data) {
//             reject('Verification failed, please Login again.')
//           }
//           commit('SET_TOKEN', response.token)
//           // commit('SET_NODECHILDS', response.data)
//           commit('SET_NAME', username)
//           commit('SET_GAMES', response.data)
//           // setSlider(JSON.stringify(response.data))
//           setGames(JSON.stringify(response.data))
//           setName(username)
//           setToken(response.token)
//           resolve(data)
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   },

//   getGames({ commit }, userInfo) {
//     let token, username
//     if (userInfo) {
//       token = userInfo.token
//       username = userInfo.username
//     } else {
//       token = getToken()
//       username = getName()
//     }

//     return new Promise((resolve, reject) => {
//       getUserGames({ userName: username, token: token })
//         .then((response) => {
//           const data = response.data
//           if (!data) {
//             reject('Verification failed, please Login again.')
//           }
//           commit('SET_TOKEN', token)
//           commit('SET_NAME', username)
//           commit('SET_GAMES', response.data)
//           setGames(JSON.stringify(response.data))
//           setName(username)
//           setToken(token)
//           resolve(data)
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   },

//   // get user info
//   getInfo({ commit }) {
//     // const { token, username } = userInfo
//     return new Promise((resolve, reject) => {
//       getPermissons()
//         .then((response) => {
//           const data = response.data
//           if (!data) {
//             reject('Verification failed, please Login again.')
//           }
//           commit('SET_NODECHILDS', response.data)
//           setSlider(JSON.stringify(response.data))
//           resolve(data)
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   },

//   // user logout
//   logout({ commit, state }) {
//     return new Promise((resolve, reject) => {
//       // logout(state.token).then(() => {
//       commit('SET_TOKEN', '')
//       removeToken()
//       removeName()
//       removeSlider()
//       removePermission()
//       removeGameMark()
//       removeGames()
//       resetRouter()
//       store.dispatch('permission/resetFlag', false)
//       resolve()
//     })
//   },
//   // change slider
//   changeSlider({ commit }, flag) {
//     commit('SET_SLIDER', flag)
//   },
//   changeMark({ commit }, mark) {
//     commit('SET_GAMEMARK', mark)
//   },
//   resetMark({ commit }, info) {
//     if (info) {
//       const { mark } = info
//       commit('SET_SLIDER', false)
//       setGameMark(mark)
//       commit('SET_GAMEMARK', mark)
//     } else {
//       setGameMark(null)
//       commit('SET_SLIDER', false)
//       commit('SET_GAMEMARK', null)
//     }
//   },

//   // remove token
//   resetToken({ commit }) {
//     return new Promise((resolve) => {
//       commit('SET_TOKEN', '')
//       removeToken()
//       removeName()
//       removeSlider()
//       removePermission()
//       resetRouter()
//       store.dispatch('permission/resetFlag', false)
//       resolve()
//     })
//   },
// }

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions,
// }
