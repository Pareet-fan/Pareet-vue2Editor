import axios from 'axios'
import { getToken , setToken , isLogin , setCookie } from './auth';

// const baseUrl = 'http://www.hongyuangood.com'; // 服务器上
const baseUrl = 'http://192.168.0.116'; // 本地
export function request (d) {

    if ( d.url !== '/api/index/memberlogin' && !isLogin()) {
        // 跳转 
        window.location.href = location.origin + location.pathname;
        return false;
    }

    let params = d;
    let tokens = {};
    return new Promise((resolve,reject) => {
       
        if (getToken()) {
            tokens = JSON.parse(getToken());
            ajax().then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            });
        } else {
            setToken().then(() => {
                tokens = JSON.parse(getToken());
                ajax().then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            }).catch(e => {
                reject(e);
            })
        }
    })

    function ajax () {
        params.data = d.uploadImg ? d.data: Object.assign(tokens,d.data);

        params.url = baseUrl + d.url;
        params.headers = {'Content-Type': 'application/x-www-form-urlencoded'};
        return new Promise((resolve,reject) => {
            axios(params).then(res => {
                if (params.url.indexOf("memberlogin") !== -1 && res.data.status.succeed === '1') {
                    // 表示登录接口 存下登录信息用于判断是否登录
                    setCookie('m_id',res.data.data.m_id);
                    setCookie('m_mobile',res.data.data.m_mobile);
                }
                if (res.data.status.succeed === '1') {
                    // 表示请求成功
                    resolve(res);
                } else {
                    // 请求失败
                    reject(res);
                }
            }).catch (err => {
                reject(err);
            })
        })
    }


  
}



  