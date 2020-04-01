const express=require('express')
const router=express.Router()

const buildingController=require('../app/controllers/buildingController')
const roomController=require('../app/controllers/roomController')
const tenantController=require('../app/controllers/tenentController')
const amenitiesController=require('../app/controllers/amenitiesController')

router.get('/building',buildingController.list)
router.get('/building/:id',buildingController.show)
router.post('/building',buildingController.create)
router.put('/building/:id',buildingController.update)
router.delete('/building/:id',buildingController.destroy)

router.get('/room',roomController.list)
router.get('/room/:id',roomController.show)
router.post('/room',roomController.create)
router.put('/room/:id',roomController.update)
router.delete('/room/:id',roomController.destroy)

router.get('/tenant',tenantController.list)
router.get('/tenant/:id',tenantController.show)
router.post('/tenant',tenantController.create)
router.put('/tenant/:id',tenantController.update)
router.delete('/tenant/:id',tenantController.destroy)

router.get('/amenities',amenitiesController.list)
router.get('/amenities/:id',amenitiesController.show)
router.post('/amenities',amenitiesController.create)
router.put('/amenities/:id',amenitiesController.update)
router.delete('/amenities/:id',amenitiesController.destroy)

module.exports=router