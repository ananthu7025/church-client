import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:3003/api',
    headers:{
        'Content-Type': 'application/json'
    },
})

export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
export const deleteUser = (url) => instance.delete(url);
