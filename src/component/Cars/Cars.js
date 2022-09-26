import React, {useEffect, useState} from 'react';
import {CarForm} from "../CarForm/CarForm";
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = () => {

    const [cars, setCars] = useState([]); //18. створюємо стейт для карів
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => { // 19. створюємо юз ефект, за допомогою якого дістаємо карів з бд та наповнюємо пустий масив карів за допомогою сетера
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    return ( //20. мапаємо отримані кари, та передаємо кожного кара в компонентк Кар
        <div>
            <div><CarForm setCars={setCars} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate}/></div>
            {cars.map(car => <Car key={car.id} car={car} setCars={setCars} setCarForUpdate={setCarForUpdate}/>)} {/*51. передаємо setCars в кар*/}
        </div>
    );
};

export {Cars};