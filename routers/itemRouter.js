const express = require('express')
const router = express.Router()


class ItemRouter {
    constructor(controller){
        this.controller = controller
    }

    routes(){
        router.get('/test', this.controller.testRoute.bind(this.controller)) // to be fixed later
        router.post('/insertOne', this.controller.addItem.bind(this.controller))
        return router
    }
}

module.exports = ItemRouter