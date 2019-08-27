import { request } from './request'
import { getCookie , getToken } from './auth';

let baseParams = {
    client: 'h5',
    m_id: getCookie('m_id'),
    m_mobile: getCookie('m_mobile')
}

// 登录
export function login (m_mobile,m_pwd) {
    return request({
        url: '/api/index/memberlogin',
        method: 'POST',
        data: {
            client:'h5',
            m_mobile:m_mobile,
            m_pwd:m_pwd
        }
    })
}



// 添加商品-上传图片-单张
export function uploadSingle (file) {
    let formData = new FormData();
    let tokens = JSON.parse(getToken());
    formData.append('oss_file',file);
    formData.append('type',1);
    formData.append('client','h5');
    formData.append('m_id',getCookie('m_id'));
    formData.append('m_mobile',getCookie('m_mobile'));
    formData.append('at_id',tokens.at_id);
    formData.append('ntoken',tokens.ntoken);
    formData.append('randomnum',tokens.randomnum);
    formData.append('timespan',tokens.timespan);
    formData.append('token',tokens.token);

    return request({
        url: '/api/index/upfile_oss',
        method: 'POST',
        data: formData,
        uploadImg: true // 标示上传图片 token在此获取
    })
}


// 商品管理-商品列表--测试用
export function getGoodsList (page,curpage) {
    return request({
        url: '/api/goodsbusiness/get_goods_list',
        method: 'POST',
        data:Object.assign(baseParams,{
            page:page,
            curpage:curpage
        })
    })
}


// 文章发布
export function addArticle (params) {
    return request({
        url: '/api/goodsbusiness/addArticle',
        method: 'POST',
        data:Object.assign(baseParams,params)
    })
}