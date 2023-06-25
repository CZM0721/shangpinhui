//配置路由
//第一步：引入插件、安装插件
import VueRouter from "vue-router";
import Vue from "vue";

import Home from "@/pages/home";
import Login from "@/pages/login";
import Register from "@/pages/register";
import Search from "@/pages/search";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component: Home,
        },
        {
            path:'/login',
            component: Login,
        },
        {
            path:'/register',
            component: Register,
        },
        {
            name:'search',
            path:'/search',
            component: Search,
        },
        // 配置重定向
        {
            path:'*',
            redirect: '/home'
        }
    ]
})