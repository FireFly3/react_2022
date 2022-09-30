import {axiosService} from "./axios.service";
import {urls} from "../config";

const albumService = {
    getAll: ()=> axiosService.get(urls.albums)
}

export {
    albumService
}