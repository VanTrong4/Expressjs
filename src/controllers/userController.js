const userServices = require("../services/userServices")



const getUser =  (req,res) =>{
    res.send("hello")
}


const allUser =  async(req,res) =>{
    let id = req.query.id;
    let users = await userServices.getAllUser(id)


    return res.status(200).json({
        errCode:0,
        message: "ok",
        users
    })
}
module.exports= {
    getUser:getUser,
    allUser:allUser
}