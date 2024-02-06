const mongoose = require('mongoose');

const Schema = mongoose.Schema

const UserSchema = new Schema({

    Email: {type:String, required:true},
    Password: {type:String, required:true },
    Username: {type:String, required:true},
    Bio: {type:String},
    Location: {type:String},
    Role:{type:String,required:true},
    ProPoints: {type:Number},
    LastEventPlacement: {type:String},
    Socials: {type:Object, default: {
        Battlenet,
        Twitch,
        Twitter,
        Discord,
        FaceIT,
        Cmg,
        CodAgent
    }}

})

Module.exports = mongoose.model('User',UserSchema)