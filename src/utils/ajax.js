import axios from 'axios'

const service = axios.create({
    baseURL: 'http://192.168.0.116', // 本地
    timeout: 5000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

service.interceptors.request.use (config => {


    return config;
},error => {
    return Promise.reject(error);
})

service.interceptors.response.use (res => {
    if (res.data.status.succeed === '1') {
        return res;
    } else {
        return Promise.reject(res);
    }
},error => {
    return Promise.reject(error);
})

export default service;