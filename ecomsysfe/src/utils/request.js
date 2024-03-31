import axios from 'axios';

const request = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

export const get = async (api, options = {}) => {
    const response = await request.get(qpi, options);
    return response.data;
};

export default request;
