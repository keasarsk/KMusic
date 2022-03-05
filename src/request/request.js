import axios from 'axios'

// 创建实例时设置配置的默认值
const instance = axios.create({
    baseURL: 'https://yxcr-music-api.vercel.app/',
    changeOrigin: true,  //解决跨域
});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    store.isLoading = true
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么

    store.isLoading = fasle
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

//暴露出去
export default instance;