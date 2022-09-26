import axios from "axios";

import {baseURL} from "../config";

const axiosService = axios.create({baseURL}); // 6. створюємо аксіос сервіс на основі базової урли, та відразу деструктуруємо її

export { // 7. ескпортуємо аксіос сервіс
    axiosService
}