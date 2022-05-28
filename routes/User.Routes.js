const UserControler =require('../Controllers/UserControler')
const express = require("express")
const UserRouter = express.Router()


// add user
UserRouter.post('/',UserControler.Register)



module.exports = UserRouter