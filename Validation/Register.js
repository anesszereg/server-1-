const validator = require("validator");
const isEmpty = require("is-empty");



module.exports = function validateRegisterInput(data) {
  let error = {};
 // console.log(data);
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //validation

  if (validator.isEmpty(data.name)) {
    error.name = "name field is required";
  }
  if (validator.isEmpty(data.email)) {
    error.email = "email field is required";
  }
  if (validator.isEmpty(data.password)) {
    error.password = "password field is required";
  }
  if (validator.isEmpty(data.password2)) {
    error.password2 = "password2 field is required";
  }

  if (!validator.isEmail(data.email)) {
    error.email = "email is invalid";
  }
  if (!validator.isLength(data.password,{min:8 , max:30})){
      error.password="min:8 max:30 "
  }
  if (!validator.equals(data.password,data.password2)) {
      error.password2="password are not the same "
      
  }

  //return 

  return {
      error,isValid:isEmpty(error)
  }
  
}

