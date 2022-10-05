import {axiosService} from "./axios.service";
import {urls} from "../config";

const userService = {
    getAllUsers:()=>axiosService.get(urls.users)

}

export {
    userService
}