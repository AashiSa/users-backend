const UserSchema = require("./User.schema")


const getAllUsers = () => {
    return new Promise((resolve,reject)=>{
        try{
            UserSchema.find({})
            .then(data => resolve(data))
            .catch(error=>reject(error))
            }catch(error){
                rerject(error)
            }
        }
    )
}

const addNewUser = (firstname , lastname , email, role, dob, state , city) => {
    return new Promise((resolve,reject) => {
        try{
            UserSchema.save(firstname , lastname , email, role, dob, state , city)
            .then(data => resolve(data))
            .catch(error => reject(error))
        }catch(error){
            reject(error)
        }
    })
}

module.export = {
    getAllUsers,
    addNewUser
}