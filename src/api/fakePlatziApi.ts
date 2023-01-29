import axios, { AxiosHeaders, AxiosRequestConfig } from "axios"

const fakePlatziApi = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1',
});

fakePlatziApi.interceptors.request.use((config: AxiosRequestConfig)=>{
    const token = localStorage.getItem('token')
    if (token){
        (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`)
    }
    return config
});

export default fakePlatziApi