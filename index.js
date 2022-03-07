const express = require('express')

const app = express() 

app.use(logger)
app.get("/books", (req,res)=>{

   return res.send({route: '/books'})
})

app.get("/libraries",checkPermission("libraries"), (req,res)=>{
   
   return res.send({route: "/libraries",permission: true})
})

app.get("/authors",checkPermission("authors"), (req,res)=>{
   return res.send({ route: "/authors",permission: true})
})

function logger(req,res,next){
    console.log(req.path)
    console.log("Before initialization")
    next()
}

function checkPermission(check){
    console.log("Before initialization checkPermission")
    return function logger(req,res,next){
    if(check=="libraries"){
        next()
    }
    else if(check=="libraries"){
        next()
    }
    // next()
}
}

app.listen(5500,()=>{
    console.log("Listening to port 5500")
})