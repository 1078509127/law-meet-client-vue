//接口
//引入axios 
import request from './request'
 
//比如说接口为注册接口
export function register(){
    return request({
        url:'/auth/register',
        method:'post',
        data,  
 
    })
}
 
export function login(){
    return request({
        url:'/auth/login',
        method:'get',
        params,  
    })
}
 
