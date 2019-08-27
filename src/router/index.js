
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);
function loadView(view) {
    return resolve => require.ensure([], () => resolve(require(`@/pages/${view}/index`)), 'vueRouter');
}

const router = new Router({
    // mode:'history',
    routes: [
        {
            path: '/',      // 登录
            component: loadView('Home'),
            meta: { title: '富文本编辑器' }
        }
    ]
});

router.afterEach((to) => {
    document.title = to.meta.title;
})


export default router;
