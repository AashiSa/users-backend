const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const USerSchema = new Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    email:{
        type:email,
        required: true
    },
    dob:{
        type:Date,
        required: true
    },
    Role:{
        type:String,
        required: true
    },
    State:{
        type:String,
        required: true
    },
    City:{
        type:String,
        required: true
    }
});
module.exports = {
    USerSchema: moongoose.model("UserSchema",UserSchema)
}