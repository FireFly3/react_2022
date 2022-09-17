import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers:{}
});

const getUsersAxios = () => {
    return axiosInstance.get()
}

export {getUsersAxios}