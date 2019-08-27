
import Vue from 'vue';


// 路由跳转，参数1是url，参数2是Object   示例：this.go('/list',{id:123})
Vue.prototype.go = function (url,params) {
    this.$router.push({ path: url, query: params});
}

// 路由跳转后的参数获取 无需参数     示例： this.lok().id  // DOM里直接lok().id
Vue.prototype.lok = function (params) {
    return this.$route.query[params];
}

// 获取sessionStorage值,使用 this.getItem(key)
Vue.prototype.getItem = function (key) {
    return window.sessionStorage.getItem(key);
}

// 设置sessionStorage值,使用 this.getItem(key.val)
Vue.prototype.setItem = function (key,val) {
    window.sessionStorage.setItem(key,val);
}

Vue.prototype.bus = new Vue();