import Cookies from 'js-cookie';
import md5 from 'js-md5';
import axios from 'axios';

export function getToken () {
  return Cookies.get('TokenKey')
}

// const baseUrl = 'http://www.hongyuangood.com';  // 服务器上
const baseUrl = 'http://192.168.0.116'; // 本地
export function setToken () {
    return new Promise ((resolve,reject) => {
        axios({
            url : baseUrl + '/api/index/api_token',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: {
                client:'h5',
                at_name:'fit',
                at_pwd:'14e1b600b1fd579f47433b88e8d85291'
            }
        }).then(res => {
            let randomnum = Math.round(Math.random()*10) + Math.floor(Math.random()*10) * 156 + Math.round(Math.random());
            let timespan = (new Date()).getTime();
            Cookies.set('TokenKey',{
                token: res.data.data.token,
                at_id: res.data.data.at_id,
                randomnum: randomnum,
                timespan:timespan,
                ntoken:md5(res.data.data.token)+ md5(md5(String(randomnum)))+md5(md5(String(timespan)))
            })
            resolve();
        }).catch(err => {
            reject(err);
        })
    })
}

export function removeToken () {
  return Cookies.remove('TokenKey')
}

export function isLogin() {
    // let isMid =  Cookies.get('m_id') === this.lok('m_id');
    // let isMmobile =  Cookies.get('m_mobile') === this.lok('m_mobile');
    let isMid = Cookies.get('m_id');
    let isMmobile = Cookies.get('m_mobile');

    if ( isMid && isMmobile ) {
        // 表示已登录
        return true;
    } else {
        return false;
    }
}


export function setCookie (key,value) {
    return Cookies.set(key,value);
}

export function getCookie (key) {
    return Cookies.get(key);
}