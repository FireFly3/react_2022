import {axiosService} from "./axios.service";
import {urls} from "../config";

const postsService = {
    getById: (id)=> axiosService.get(`${urls.posts}/${id}`)
}

export {
    postsService
}