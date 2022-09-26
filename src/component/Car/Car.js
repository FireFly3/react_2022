import React from 'react';

import css from './Car.module.css'
import {carService} from "../../services";

const Car = ({car, setCars, setCarForUpdate}) => { // 21. отримаємо кара через пропси та відразу деструктеруємо   //52. отримаємо та відразу деструктуруємо setCars
    const {id, model, price, year} = car // 22. деструктуруємо самого кара, розкладаючи на складові

    const deleteCar = async () => { // 48. створюємо ф-ю для кнопки видалення асинхронну
        await carService.deleteById(id); //50. авейтимо carService викликаємо метод deleteById та вкладаємо в нього id, яка отримана в сарі та деструктурована вище. Респонс з сервера не отримується
        setCars(cars => { // 53. Викликаємо setCars викликаємо колбек ф-ю з карами
            const index = cars.findIndex(value => value.id === id); //54. Знаходимо id видаляємого кара і присвоюємо йому змінну
            cars.splice(index, 1) //55. в карах за допомогою метода splice видаляємо починаючи з нашого індекса(id) один елемент
            return [...cars] //56. повертаємо карси в новому масиві
        })
    }

    // const deleteCar =  () => {
    //     carService.deleteById(id).then(()=>{
    //         setCars(cars => {
    //             const index = cars.findIndex(value => value.id === id);
    //             cars.splice(index, 1)
    //             return [...cars]
    //         })
    //     })
    // }

    return ( //23. відмальовуємо кожного кара та до кожного кара додаємо кнопки оновити та видалити
        <div className={css.Car}>
            <div>
                <div><b>ID:</b> {id}</div>
                <div><b>Model:</b> {model}</div>
                <div><b>Price:</b> {price}</div>
                <div><b>Year:</b> {year}</div>
            </div>
            <div className={css.tools}>
                <button onClick={()=> setCarForUpdate(car)}>Update</button>
                <button onClick={() => deleteCar()}>Delete</button> {/*49. При кліку на кнопку деліт викликаємо ф-ю  deleteCar*/}
            </div>
        </div>
    );
};

export {Car};