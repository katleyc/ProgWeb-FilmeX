import axios, {isCancel, AxiosError} from 'axios';

const api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q='
});

export default api;