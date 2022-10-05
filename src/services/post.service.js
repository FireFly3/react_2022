import {axiosService} from "./axios.service";
import {urls} from "../config";

const postService = {
    getAllPosts:()=> axiosService.get(urls.posts)
}

export {
    postService
}