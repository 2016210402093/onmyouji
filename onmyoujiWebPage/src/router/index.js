import Vue from 'vue'
import VueRouter from 'vue-router'
import searchPage from '../pages/searchPage'
import myInfoPage from '../pages/myInfoPage'


Vue.use(VueRouter)

export default new VueRouter({
    mode:"hash",  //hash匹配
    routes: [
        {
            path: '/search',
            name: 'search',
            component: searchPage,
            // children: [               //使用children需要在searchPage中加上<router-view></router-view>不然显示不出来
            //     {
            //         path: 'myInfo',
            //         name: 'myInfo',
            //         component: myInfoPage
            //     }
            // ]
        },
        {
            path: '/myInfo',
            name: 'myInfo',
            component: myInfoPage,
        },
        {   //'/'重定向为'/search'
            path: '/',
            name: 'rederictSearch',
            redirect: '/search'
        }
    ]
})