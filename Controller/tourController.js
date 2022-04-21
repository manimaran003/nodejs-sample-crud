const fs=require("fs")
const tours=JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))
// exports.checkId=(req,res,next,val)=>{

// }
exports.getAllTours=(req,res)=>{
    res.status(200).json({
        status:"success",
        time:req.requestTime,
        result:tours.length,
        data:{
            tours
        }
    })
}
exports.getTour=(req,res)=>{
const tour=tours.find((el)=>el.id===parseInt(req.params.id))
if(!tour){
    return res.status(404).json({
        status:"fail",
       message:"invalid id"
    })
}
res.status(200).json({
    status:"success",
    data:{
        tour
    }
})
}

exports.createTour=(req,res)=>{
console.log(req.body)
const newId=tours[tours.length-1].id + 1;
const newTour={id:newId,...req.body}
tours.push(newTour)
fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(newTour),err=>{
    res.status(201).json({
        status:"success",
        data:{
            tour:newTour
        }
    })
})
}
exports.UpdateTour=(req,res)=>{
if(parseInt(req.params.id).length>tours.length){
    return res.status(404).json({
        status:"fail",
       message:"invalid id"
    })
}
const updatetour=tours.findIndex((el)=>el.id===parseInt(req.params.id))
console.log(updatetour,req.body)
tours.splice(updatetour,1,req.body)
console.log(tours)
res.status(200).json({
    status:"sucess",
    data:{
        update:'updated here'
    }
})
}
exports.DeleteTour=(req,res)=>{

res.status(204).json({
    status:"sucess",
    data:{
        data:null
    }
})

}