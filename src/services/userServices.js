const db = require('../models/index')

const getAllUser = (id) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            let users = '';
            if(id ==="all"){
                users = await db.User.findAll()
            } 
            if(id && id!=="all"){
                users = await db.User.findOne({
                    where: { id: id},
                    raw:true
                })
            }
            resolve({users})
        } catch (error) {
            reject(error)
        }
    })
}


module.exports={
    getAllUser:getAllUser,
}