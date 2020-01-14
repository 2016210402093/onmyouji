import axios from 'axios';
import qs from 'qs';
import store from '../store'


/* 
1.根据环境变量区分接口的默认地址

提前在package.json文件的serve中布置好 （mac 去掉set和&&用空格代替）
"serve": "vue-cli-service serve",
"test": "set NODE_ENV=test&&vue-cli-service serve",                   &&左边别留空格...
"production": "set NODE_ENV=production&&vue-cli-service serve",
开发环境: npm run serve
测试环境：npm run test
生产环境：npm run production
*/

switch(process.env.NODE_ENV) {
    //生产环境（部署到服务器上的环境）
    case 'production' :
        axios.defaults.baseURL = "http://47.102.199.210:8090";
        break;
    
    //测试环境
    case 'test' :
        axios.defaults.baseURL = "http://47.102.199.210:8090";
        break;
    
    //默认开发环境
    default:
        axios.defaults.baseURL = "http://localhost:8090";
}



/*
设置超时时间和跨域是否允许携带凭证
*/

axios.defaults.timeout = 10000; //10s超时时间
axios.defaults.withCredentials = true; //true 表示跨域请求是否提供凭据信息，即当前请求为跨域类型时是否在请求中协带cookie
                                       //后端设置Access-Control-Allow-Origin为源地址如http://localhost:8080



/* 
设置请求传递数据格式(看服务器要求什么格式，据说推荐x-www-form-urlencoded) 
不设置默认json
x-www-form-urlencoded
*/
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//将data转化为x-www-form-urlencoded格式
axios.defaults.transformRequest = data =>qs.stringify(data);



/* 
设置请求拦截器
客户端发送请求->[请求拦截器]->服务器
token校验（jwt）：接收服务器返回的token，存储到vuex或本地存储中
                 每一次向服务器发送请求，应该把token带上

*/

axios.interceptors.request.use(config=>{

/*     
    //携带上token
    let token = localStorage.getItem('token');
    token && (config.headers.Authorization = token)
    //config是请求配置项，在拦截器拦截的时候可以更改配置项，但如果不返回，发给服务器的配置项就是空的...
    return config; 
*/

    store.commit("search/updateIsLoading", true); //显示加载中
    return config;

}, error=>{
    return Promise.reject(error);
});


/* 
设置响应拦截器
服务器返回信息 -> [拦截的统一处理] -> 客户点js获取到信息
*/

axios.defaults.validateStatus = status =>{
    //自定义成功失败规则：RESOLVE / REJECT（默认规则：HTTP状态码以2开头算作成功）
    return /^(2|3)\d{2}$/.test(status);
}

axios.interceptors.response.use(respose=>{

    store.commit("search/updateIsLoading", false); //取消加载中

    return respose.data; //返回响应主体内容, 可配可不配
},error=>{
    store.commit("search/updateIsLoading", false); //取消加载中
    let {response} = error;
    if(response){  //服务器返回结果,按照状态码处理
        switch(response.status) {
            case 401: //当前请求用户需要登陆，即权限
                //写一些提示
                break;
            case 403: //服务器接收请求但拒绝执行，一般token/session过期
                //写一些提示
                break;
            case 404: //找不到页面
                //写一些提示，如当前页面不存在
                break;
        }
    }
    else{  //服务器未返回结果
        if(!window.navigator.onLine){ //断网
            //可以跳转到断网页面,下面放个刷新按钮，有网了跳回上一个页面
            return;
        }
        return Promise.reject(error); //否则返回错误
    }
});

export default axios;