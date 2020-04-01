const Amenities=require('../models/room')

module.exports.list=(req,res)=>{
    Amenities.find()
    .then(amenities=>{
        res.json({amenities})
    })
    .catch(err=>res.json(err))
}

module.exports.create=(req,res)=>{
    const body=req.body
    const amenities=new Amenities(body)
    amenities.save()
    .then(amenities=>res.json(amenities))
    .catch(err=>res.json(err))
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Amenities.findById(id)
    .then((amenities)=>{
        if(amenities){
            res.json(amenities)
        }else{
            res.json({})
        }
    })
    .catch((err)=>res.json(err))
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Amenities.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((amenities)=>{
        if(amenities){
            res.json(amenities)
        }else{
            res.json({})
        }
    })
    .catch((err)=>res.json(err))
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Amenities.findByIdAndDelete(id)
    .then((amenities)=>{
        if(amenities){
            res.json(amenities)
        }else{
            res.json({})
        }
    })
    .catch((err)=>res.json(err))
}