import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi'
import {userValidator} from "../../validators";
import {userService} from "../../services";
import {useEffect} from "react";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });
    const submit = async (user)=>{
const {data}= await userService.create(user)
        setUsers(users=>[...users, data])
        reset()
    }
    useEffect(() => {
        setValue('name', 'Dyrda Denis')
        setValue('username', 'FireFly-_-')
        setValue('email', 'firefly@gmail.com')
    }, [setValue])

    return (

        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'username'} {...register('username' )}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {UserForm};