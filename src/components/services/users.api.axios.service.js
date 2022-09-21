import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const getUsersAxios = () => {
    return axiosInstance.get()
}

const getPostsAxios = (id) => {
    return axiosInstance.get(+'/'+id+'/posts')
}

export {getUsersAxios, getPostsAxios}