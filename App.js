const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/public',express.static(path.join(__dirname,'static')));

app.get("/", (request, response) => {
  response.sendfile(path.join(__dirname,'static','index.html'));
});

app.post('/',(request,response)=>{
  const schema = Joi.object().keys({
    email : Joi.string().trim().email().required(),
    password : Joi.string().min(5).max(10).required()
  });

  Joi.validate(request.body,schema,(error,result)=>{
    if(error){
      console.log(error);
      response.send('An error has occurred');
    }
      console.log(result);
      response.send("Successfully posted");
  });
});

app.listen(3005);
