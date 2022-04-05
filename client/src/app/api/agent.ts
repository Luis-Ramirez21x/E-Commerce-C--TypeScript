import axios, { AxiosResponse } from "axios";
import { Product } from "../models/product";

axios.defaults.baseURL = 'http://localhost:5000/api/';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body),
    put: (url: string, body: {}) => axios.put(url, body),
    delete: (url: string) => axios.delete(url),
}



const Catalog={
    list: () => requests.get<Product[]>('products'),
    details: (id: number) => requests.get(`products/${id}`),
    test: () => console.log('test')
}

const agent = {
    Catalog 
}

export default agent;