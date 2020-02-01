const Joi = require('joi');

const arrayString = ['Cat','Dog','Bird'];
const arrayObjects = [{example : 'example'}, {example : 'example'}];

const userInput = {
    personalInfo : {
        streetAddress: '123',
        city : 'Test',
        state : 'z2'
    },
    preferences : arrayString
};

const personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state : Joi.string().trim().length(2).required(),
});

const preferencesSchema = Joi.array().items(Joi.string());

const schema = Joi.object().keys({
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema
});

Joi.validate(userInput, schema, (error,result)=>{
    if(error)
    console.log(error);
    else 
    console.log(result);
});