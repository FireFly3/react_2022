import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {commentsService} from "../../services";
import {commentValidator} from "../../validators";

const CommentForm = ({setComments}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode:"all",
        resolver: joiResolver(commentValidator)
    });

    const submit=async (comment)=>{
const {data}=await commentsService.createComment(comment)
        setComments(comments=>[...comments, data])
        reset()
    }

    useEffect(()=>{
        setValue('name', 'Dyrda Denis')
        setValue('email', 'firefly@gmail.com')
        setValue('body', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eum eveniet laudantium perspiciatis, qui repellat? Asperiores at corporis doloremque ipsam minus perspiciatis tenetur!')
    },[setValue])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={'body'} {...register('body')}/>
            {errors.body && <span>{errors.body.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {CommentForm};