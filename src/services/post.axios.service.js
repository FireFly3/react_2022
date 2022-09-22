import {axiosService} from "./axios.service";
import {urls} from "../config";

const postAxiosService = {
    getUserPosts: (userId) => axiosService.get(`${urls.users}/${userId}${urls.posts}`)
}

export {
    postAxiosService
}