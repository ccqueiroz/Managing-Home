import Axios from 'axios';

const token = localStorage.getItem('token-managing'); //mudar token

//requisições
export const axiosApi = Axios.create({
    baseURL: process.env.REACT_APP_AXIOS_BASE_URL,
    timeout: 240000,
    headers: {
        Authorization: token ? `bearer ${token}` : "",
        "Content-Type": "application/json",
    }
});

//erros
// export const errorInterceptor = axiosApi.interceptors.response.use(
//     function (response) {
//         return response;
//     }, async function (error) {
//         console.log('errorInterceptor')
//         if (error.response.data.mensagem) {
//             console.log(error.response.data.mensagem);
//         } else if (error.response.data.error) {
//             console.log(error.response.data.error);
//         } else if (error.response.data.message) {
//             console.log(error.response.data.message);
//         }

//         localStorage.clear();
//         localStorage.setItem('hasTheSessionExpired', 'true');
//         window.location.reload();

//         return Promise.reject(error);
//     }
// );

//refresh
export const refreshToken = () => {
    const expiresIn = String(localStorage.getItem('token-managing-expires'));
    console.log(expiresIn)
    setTimeout(
        async () => {
            let response = await axiosApi.post('/auth/refresh');
            const {
                access_token,
                expires_in
            } = response.data;
            localStorage.setItem('token-managing', access_token);
            localStorage.setItem('token-managing-expires', expires_in);
            axiosApi.defaults.headers.common['authorization'] = `bearer ${access_token}`;
        }, expiresIn - 300, () => refreshToken()
    );
}