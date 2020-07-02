import axios from 'axios';

//http://www.painel.witcare.com.br/api_witcare/
const api = axios.create({
    baseURL: 'http://www.painel.witcare.com.br/'
});

export default api;