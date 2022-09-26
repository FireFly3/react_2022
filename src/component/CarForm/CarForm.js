import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi' //40. імпортуємо joiResolver з @hookform/resolvers/joi

import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = ({setCars, carForUpdate, setCarForUpdate}) => { // 25.
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({ // 25. створюємо хук юзФорм, з нього деструктуризуємо об'єкти (проперті) register, handleSubmit, reset, formState: {errors, isValid}, setValue
        resolver: joiResolver(carValidator),//41. (підключення валідатора) в обьек хука юз форм додаємо параметри resolver, в нього кладемо функцію joiResolver, а в неї передаємо carValidator, в якому прописана валідація наших полів
        mode: 'all'//32. в об'єкт хука ЮзФорм додаємо параметри mode записує помилки при всіх діях (значення all)
    });

    useEffect(() => { //46. при завантаженні нашої компоненти будемо відразу будуть сетатись значення в форму
        setValue('model', 'Subaru') //47. з хука юзФорм беремо ф-ю setValue в яку першим параметром передаємо в назву якого інпута будемо сетати значення, други значення, яке сетається
        setValue('price', 7000)
        setValue('year', 2007)
    }, [setValue])

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
//27.Створюємо функцію
    //43. робимо її асинхронною, авейтимо в неї carService з методом створення і передаємо наші кари з форми, так як уе обєкт, створюємо константу і відразу деструктуруємо її
    const submit = async (car) => {
        if (carForUpdate) {
            const {data} = await carService.updateById(carForUpdate.id, car);
            setCars((cars) => {
                const findCar = cars.find(value => value.id === carForUpdate.id);
                Object.assign(findCar, data)
                setCarForUpdate(null)
                return [...cars]
            })
        } else {
            const {data} = await carService.create(car);
            setCars(cars => [...cars, data]) //44. сетаємо отриманого кара (сетер ми передали з карсів) він тримає в собі попереднє значення карси, через кол бек (cars => а повертає новий масив де диструктовані старі карси, та донаний нови з нашої форми дата [...cars, data]
        }
        reset() //45. з хука useForm беремо метод reset, який після відправки даних очищає форму
    }
// 30. Перший варіант валідації, прямо у формі. Додаємо другий параметр  required: true - обовьязкове поле,  minLength: {value: 2, "!!!мінімальна довжина!!!" 2 message: 'min 2 ch'- повідомлення}
    return (
        // <form onSubmit={handleSubmit(submit)} onChange={() => console.log(errors)}>
        //     <input type="text" placeholder={'model'} {...register('model', {
        //         required: true,
        //         minLength: {value: 2, message: 'min 2 ch'}
        //     })}/>
        //     {errors.model && <span>{errors.model.message}</span>} //33. створюємо тег спен і наповнюємо його текстом помилки, яки буде відображатися лише в тому випадку, якщо обьект ерор буде наповнюватися(тобто якщо буде помилка)
        //     <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
        //     <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
        //     <button disabled={!isValid}>Save</button>
        // </form>
        //26. Додаємо тегу форм євент онСабміт при відправці форми буде запускати пропертю handleSubmit, яку деструктуризовали з юзФорм і в неї передаємо функцію сабміт, яка буде щось робити з даними, які повернула нам наша форма
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
        </form> //24. додавши в пекедж джейсон бібліотеку реакт хук форм змінюємо тег дів на форм
        //28. створюємо інпут додаємо йому плейсхолдер з назвою model, наповнюємо його новими пропертями завдяки регістр, пропертя в регістрі це як буде називатися в ньому дані (ключ - model), які будуть вводитися в інпут
        //29. Створюємо 2 таких самих інпути для price та year також другим параметром додаємо valueAsNumber: true те що там цифри
        //31. додаємо кнопку і ставимо їй disabled={!isValid} не активна якщо форма не вілідна
        //34. Другий варіант валідації (кращий) додаємо бібліотеку Джой та @hookform/resolvers
        //42. Додаємо тег спан, який буде виводити помилку, якщо обьект єрора буде наповнений даними
    );
};

export {CarForm};