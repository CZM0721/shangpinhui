// 对axios进行二次封装
import axios from 'axios';
//引入进度条
import nprogress from 'nprogress';
//引入相关进度条的样式
import "nprogress/nprogress.css";

/**
 * 1、用axios对象的create方法创建一个axios实例
 * 2、requests就是axios实例
 */
const requests = axios.create({
    //基础路径，发送请求时，路径会拼上/api
    baseURL:'/api',
    // 设置请求超时的时间
    timeout:5000
})

//请求拦截器:将来项目中【N个请求】，只要发请求,会触发请求拦截器!!!
requests.interceptors.request.use(config => {
    //请求拦截器:请求头【header】,请求头能否给服务器携带参数
    //请求拦截器：其实项目中还有一个重要的作用,给服务器携带请求们的公共的参数
    //进度条开始
    nprogress.start();
    return config;
});


//响应拦截器：请求数据返回会执行
requests.interceptors.response.use((res) => {
    //res:实质就是项目中发请求、服务器返回的数据
    //进度条结束
    nprogress.done();
    return res.data;
}, (err) => {
    return Promise.reject(new Error('faile'))
});

export default requests;