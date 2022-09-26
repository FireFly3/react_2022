import {axiosService} from "./axios.service";

import {urls} from "../config";

const carService = { //8. створюємо сар сервісі, за допомогою методів будемо маніпулювати базою даних
    getAll: () => axiosService.get(urls.cars),//9. метод гет, дістати всі кари (в аксіос сервіс, який є базовою урлою кладемо обєкт юрелс, в якого є значення карс, посилання на кари)
    create: (car) => axiosService.post(urls.cars, car),//10. метод кріейт, створення (кар в перших дужках це отримання карів з форми, яку створимо), потім через аксіос сервіс методом пост відправляємо в базу кари(які прописані в дужках як urls.cars) та другим параметром передаємо на бек параметр карс
    getById: (id) => axiosService.get(`${urls.cars}/${id}`), //11. функція приймає айді, викликаємо аксіос сервіс, методом гет звертаємося до карів та через слеш додаємо айді(тобто звернення до конкретного кара по його айді)
    updateById: (id,car) => axiosService.put(`${urls.cars}/${id}`, car), //12. все те саме, але але також треба передавати кар до аксіос сервіса застосовуємо метод пут, який оновлює конкретного кара по його айді, каром, який буде в формі
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`), //13. також все те саме, але до аксіос сервіса застосовуємо метод деліт, який видаляє обьєкт по його айді
}

export { //14. експортуємо кар сервіс
    carService
}