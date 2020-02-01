const Joi = require('joi');

const arrayString = ['Cat','Dog','Bird'];
const arrayObjects = [{example : 'example'}, {example : 'example2'}, {example : 'example3'}];

const userInput = {
    personalInfo : {
        streetAddress: '123',
        city : 'Test',
        state : 'z2'
    },
    preferences : arrayObjects
};

const personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state : Joi.string().trim().length(2).required(),
});

const preferencesSchema = Joi.array().items(Joi.object().keys({
    example : Joi.string().required()
}));

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