const Joi = require('joi');

// Register validation
const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string()
            .min(6)
            .max(255)
            .required()
            .email(),
        password: Joi.string()
            .min(8)
            .max(1024)
            .required()
    });
    return schema.validate(data);
};

// Login validation
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .max(255)
            .required()
            .email(),
        password: Joi.string()
            .min(8)
            .max(1024)
            .required()
    });
    return schema.validate(data);
};

module.exports = {
    registerValidation,
    loginValidation
};