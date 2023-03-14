import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'
import store from '@/store'
// import router from '@/router'
import { getToken, getName, getGameMark } from '@/utils/auth'
// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000, // request timeout
  // 60000是不是太短了
})
const headerInfo = (config) => {
  if (getToken() && getGameMark() && getGameMark() !== 'null') {
    config.headers['token'] = getToken()
    config.headers['userName'] = getName()
    config.headers['gameMark'] = getGameMark()
    config.headers['Gmhlsg'] = sessionStorage.getItem('gm_hlsg')
  }
}

// request interceptor
service.interceptors.request.use(
  (config) => {
    switch (config.urlType) {
      case 'v1':
        config.url = import.meta.env.VITE_BASE_URL2 + config.url
        headerInfo(config)
        break
      case 'v2':
        config.url = import.meta.env.VITE_BASE_URL3 + config.url
        headerInfo(config)
        break
      case 'v4': // 聊天监控
        config.url = import.meta.env.VITE_BASE_URL4 + config.url
        break
      default:
        config.url = import.meta.env.VITE_BASE_URL + config.url
        headerInfo(config)
    }
    config.headers['Access-Control-Allow-Origin'] = '*'
    config.headers['Access-Control-Allow-Methods'] = '*'
    config.headers['Access-Control-Allow-Headers'] = '*'
    config.headers['Access-Control-Allow-Credentials'] = true
    // config.headers['Content-Type'] = JSON
    // config.headers['Content-Type'] = json
    // do something before request is sent
    console.log(config.headers, 'config.headers')

    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  },
)
// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */
  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    // debugger
    const res = response.data

    // 封号、解除封号响应数据组织
    if ((res && res.track) || res.result) {
      return res
    }

    // 聊天监控接入sdk接口响应数据组织
    if (res && res.status) {
      return res
    }

    // if the custom code is not 20000, it is judged as an error.
    if (res && res.code && res.code !== 1) {
      ElMessage({
        message: res.msg || res.message || 'Error',
        type: 'error',
        duration: 5 * 1000,
      })
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === -1) {
        // to re-login
        // store.dispatch('user/logout').then(() => {
        //   // router.push(`/login`)
        //   if (process.env.NODE_ENV === 'production') {
        //     location.href = 'https://tmp.tuyoo.com/'
        //   } else {
        //     // router.push(`/login`)
        //   }
        // })
      }
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        ElMessageBox.confirm(
          'You have been logged out, you can cancel to stay on this page, or log in again',
          'Confirm logout',
          {
            confirmButtonText: 'Re-Login',
            cancelButtonText: 'Cancel',
            type: 'warning',
          },
        ).then(() => {
          // store.dispatch('user/logout').then(() => {
          //   location.reload()
          // })
        })
      }
      // return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  },
)

export default service
