class BaseController{
    constructor(model){
        this.model = model
    }

    testRoute(req,res){
        return res.json({succes: true, msg:'yup, this test works!'})
    }
}

module.exports = BaseController