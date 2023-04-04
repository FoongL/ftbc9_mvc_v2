// importing important packages
const express = require('express')
require('dotenv').config()


// import models
const db = require('./models/index')

//changing stuff

const{items, users}=db
// import middleware

const authMiddleware = require('./middleware/auth')

// import controllers
const UserController = require('./controllers/userController')
const ItemController = require('./controllers/itemController')

// import routers
const UserRouter = require('./routers/userRouter')
const ItemRouter = require('./routers/itemRouter')

// initialize controllers
const userController = new UserController(users)
const itemController = new ItemController(items)

// initialize routers
const userRouter = new UserRouter(userController, authMiddleware)
const itemRouter = new ItemRouter(itemController)

// starting my server
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// setting up routers
app.use('/users', userRouter.routes())
app.use('/items', itemRouter.routes())

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>console.log(`App is running on port  ${PORT}`))




/**
 * User model draft
 * 
 * ID
 * name
 * email
 * password
 * 
 * item
 * ID
 * name
 * userId
 * 
 * 
 */