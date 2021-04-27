import axios from 'axios';

const token = localStorage.getItem('token_teste');

console.log(token)
export const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_AXIOS_BASE_URL,
    timeout: 240000,
    headers: {
        Authorization: token ? `bearer ${token}` : "",
        "Content-Type": "application/json",
    }
});