const express = require('express')
const router = express.Router()


class UserRouter {
    constructor(controller, auth){
        this.controller = controller
        this.auth = auth
    }

    routes(){
        router.get('/test', this.auth, this.controller.testRoute.bind(this.controller)) // to be fixed later
        router.post('/signUp', this.controller.signUp.bind(this.controller))
        router.post('/logIn', this.controller.logIn.bind(this.controller))
        return router
    }
}

module.exports = UserRouter