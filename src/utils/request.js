import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { getToken } from './auth'

// create an axios instance
const service = axios.create({
    baseURL: '/client', //process.env.NODE_ENV api的base_url  
    timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(
    config => {
      console.log(process.env.NODE_ENV)
        if (getToken()) {
          config.headers['Authorization'] = 'Bearer '+getToken()
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error)
        Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
  response => {
    //const res = response.data
    if (response.status !== 200) {
      MessageBox.alert('系统未登录，请重新登录', '错误', {
        confirmButtonText: '确定',
        type: 'error'
      }).then(() => {
        store.dispatch('FedLogOut').then(() => {
          location.reload()
        })
      })
      return Promise.reject('error')
    } else {
      return response
    }
  }, error => {
    console.log('err' + error)// for debug
    Message({
      message: '登录连接超时（后台不能连接，请联系系统管理员）',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
