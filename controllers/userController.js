const BaseController = require("./baseController");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserController extends BaseController {
  constructor(model) {
    super(model);
  }

  async signUp(req, res) {
    const { name, email, password } = req.body;
    console.log('hello')
    if(!name || !email || !password){
        return res.status(400).json({success:false, msg:'missing parameters'})
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    console.log({hashedPassword})
    const newUser = await this.model.create({
      name,
      email,
      password: hashedPassword,
    });

    const payload = {id: newUser.id, name}
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1hour'
    })

    return res.json({ success: true, token });
  }

  async logIn(req,res) {
    const {email, password} = req.body

    const user = await this.model.findOne({where: {email}})

    const compare = await bcrypt.compare(password, user.password)

    if (!compare){
        return res.status(403).json({success: false, msg:'incorrect password'})
    }

    return res.json({success:true, msg:'user authenticated'})
  }
}

module.exports = UserController;
