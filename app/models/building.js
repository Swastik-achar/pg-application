const mongoose=require('mongoose')


const Schema=mongoose.Schema
const buildingSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    buildingType:{
        type:String,
        enum:['Male','Female','co-ed'],
        required:true
    },
    location:{
        lat:{
            type:Number
        },
        lng:{
            type:Number
        }
    }
})

const Building=mongoose.model('Building',buildingSchema)
module.exports=Building