import Joi from "joi";

const commentValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-ZА-я ёЁіІїЇґҐєЄ]{1,30}$/).required().messages({
        'string.pattern.base': 'букви, мінімум 1 символ, максимум 20'
    }),
    email: Joi.string().regex(/^[a-zA-ZА-я@.ёЁіІїЇґҐєЄ0-9]{1,30}$/).required().messages({
        'string.pattern.base': 'букви, мінімум 1 символ, максимум 30'
    }),
    body: Joi.string().regex(/^[a-zA-ZА-я ёЁіІїЇґҐєЄ.,?!0-9_-]{1,200}$/).required().messages({
        'string.pattern.base': 'букви, мінімум 1 символ, максимум 200'
    })
})

export {
    commentValidator
}