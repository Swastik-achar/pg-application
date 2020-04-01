const mongoose=require('mongoose')

const Schema=mongoose.Schema
const amenitiesSchema = new Schema({
    name:{
        type:String,
        required:true
    }
})

const Amenities=mongoose.model('Tenant',amenitiesSchema)
module.exports=Amenities