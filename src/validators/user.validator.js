import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-ZА-я ёЁіІїЇґҐєЄ]{1,30}$/).required().messages({
        'string.pattern.base': 'Тільки букви, мінімум 1 символ, максимум 20'
    }),
    username: Joi.string().regex(/^[a-zA-ZА-я ёЁіІїЇґҐєЄ0-9_-]{1,30}$/).required().messages({
        'string.pattern.base': 'Тільки букви, мінімум 1 символ, максимум 30'
    }),
    email: Joi.string().regex(/^[a-zA-ZА-я@.ёЁіІїЇґҐєЄ0-9]{1,30}$/).required().messages({
        'string.pattern.base': 'Тільки букви, мінімум 1 символ, максимум 30'
    })
})
export {
    userValidator
}