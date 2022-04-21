const express=require("express")
const{getAllTours,createTour,UpdateTour,DeleteTour,getTour,checkId}=require('../Controller/tourController')
const router=express.Router();
// router.param("id",(req,res,val,next)=>{
//     console.log(val)
//     next();
// })
router.route("/").get(getAllTours).post(createTour)
router.route("/:id").patch(UpdateTour).delete(DeleteTour).get(getTour)

module.exports=router