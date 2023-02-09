const BaseController = require('./baseController')

class ItemController extends BaseController{
    constructor(model){
        super(model)
    }

    async addItem(req,res){
        const {name, userId} = req.body

        const newItem = await this.model.create({name, userId})

        return res.json({sucess:true, newItem})
    }
}

module.exports = ItemController