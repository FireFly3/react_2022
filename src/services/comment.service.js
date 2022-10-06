import {axiosService} from "./axios.service";
import {urls} from "../config";

const commentService={
    getAllComments: ()=> axiosService.get(urls.comments)
}

export {
    commentService
}