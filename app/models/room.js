const mongoose=require('mongoose')

const Schema=mongoose.Schema
const roomSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    occupancy:{
        type:String,
        enum:['2sharing','3sharing','4sharing','null'],
        default:'null'
        required:true
    },
    price:{
        type:String,
        required:true
    },
    building:{
        type:Schema.Types.ObjectId
    }
})

const Room=mongoose.model('Room',roomSchema)
module.exports=Room
