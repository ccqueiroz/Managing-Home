import axios from 'axios';

export const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_AXIOS_BASE_URL,
    timeout: 240000,
    headers:{
        "Content-Type": "application/json",
    }
});