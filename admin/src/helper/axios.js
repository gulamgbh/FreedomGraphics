import axios from 'axios'

const token = localStorage.getItem('admin_token');
const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Authorization': token ? `Bearer ${token}` : '',
    }
});
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axiosIntance.interceptors.request.use((req) => {
//     const { auth } = store.getState();
//     if (auth.token) {
//         req.headers.Authorization = `Bearer ${auth.token}`;
//     }
//     return req;
// })

// axiosIntance.interceptors.response.use((res) => {
//     return res;
// }, (error) => {
//     const status = error.response ? error.response.status : 500;
//     if (status && status === 500) {
//         localStorage.clear();
//         store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
//     }
//     return Promise.reject(error);
// })
export default instance