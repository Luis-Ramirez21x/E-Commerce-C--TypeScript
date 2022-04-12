
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { Product } from "../models/product";
import { useNavigate } from 'react-router-dom';
import { history } from "../..";


const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

axios.defaults.baseURL = 'http://localhost:5000/api/';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.response.use(async response => {
    await sleep();
    return response;
}, (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
        case 400:
            if (data.errors) {
                const modelStateErrors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelStateErrors.push(data.errors[key])
                    }
                }
                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 500:
            history.push('/serverError', {error:data});
            console.log(data);
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
})

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body),
    put: (url: string, body: {}) => axios.put(url, body),
    delete: (url: string) => axios.delete(url),
}



const Catalog={
    list: () => requests.get<Product[]>('products'),
    details: (id: number) => requests.get<Product>(`products/${id}`),
    
}

const TestErrors = {
    get400Error: () => requests.get('buggy/bad-request'),
    get401Error: () => requests.get('buggy/unauthorised'),
    get404Error: () => requests.get('buggy/not-found'),
    get500Error: () => requests.get('buggy/server-error'),
    getValidationError: () => requests.get('buggy/validation-error')
}

const agent = {
    Catalog,
    TestErrors
}

export default agent;