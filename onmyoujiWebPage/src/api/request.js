import qs from 'qs';



/* 
根据环境变量进行接口区分 
*/
let baseURL = '';
let baseURLArr = [{
    type: 'development',
    url: 'http://localhost:8080/'
},{
    type: 'test',
    url: 'http://localhost:8080/'
},{
    type: 'production',
    url: 'http://localhost:8080/'
}];

//循环匹配
baseURLArr.forEach(item => {
    if(process.env.NODE_ENV === item.type){
        baseURL = item.url;
    }
});

export default function request(url, options = {}){
    //格式：params {method: 'GET', params: {'xxx':xxx}}
    url = baseURL + url;

    // GET系列请求处理
    !options.method ? options.method = 'GET': null; //params是否设置了GET，默认GET
    if(options.hasOwnProperty('params')){        
        if(/^(GET|DELETE|HEAD|OPTIONS)$/i.test(option.method)){
            const ask = url.includes('?') ? '$' : '?';
            url += `${ask}${qs.stringify(params)}`;
        }
        delete options.params;
    }
}


//合并配置项
options = Object.assign({
    //允许跨域携带资源凭证 same-origin同源可以 omit都拒绝
    credentials: 'include',
    headers: {}
}, options);
options.headers.Accept = 'application/json';


//token校验
const token = localStorage.getItem('token');
token && (options.headers.Authorization = token);

//post请求的处理
if(/^(POST|PUT)$/i.test(options.method)){
    !options.type ? options.type = 'urlencoded' : null;
    if(options.type === 'urlencoded'){
        options.headers['Cibtebt-Type'] = 'application/x-www-form-urlencoded';
        options.body = qs.stringify(options.body);
    }
    if(options.type === 'json'){
        options.headers['Cibtebt-Type'] = 'application/json';
        options.body = json.stringify(options.body);
    }
}

return fetch(url, options).then(response =>{
    //返回的结果可能是非200状态码,fetch中不管服务器返回啥都叫成功
    if(!/^(2|3)\d{2}$/.test(response.status)){
        switch(response.status){
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
    return Promise.json();
}).catch(error =>{
    if(!window.navigator.onLine){ //断网
        //可以跳转到断网页面,下面放个刷新按钮，有网了跳回上一个页面
        return;
    }
    return Promise.reject(error); //否则返回错误
})