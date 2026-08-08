const express=require('express');
const app=express();
const PORT=3000;
//basic json response
app.get('/',(req,res)=>{
    res.json({
message:"WELCOME TO OUR API !",
status:"active",
timestamp:new Date()
    });
});
//sending an array of objects
app.get('/students',(req,res)=>{
    const studentList=[
        {id:101,name:"Mark",course:"Data Science"},
        {id:102,name:"peter",course:"MERN Stack"},
        {id:103,name:"Mille",course:"UI/UX Design"}
    ];
    res.json(studentList);
});
//dynamic json response
app.get('/product/:id',(req,res)=>{
    const productId=req.params.id;
    res.json({
        requestedId:productId,
        category:"Electronics",
        inStock:true,
        tags:["gadget","new-arrival"]
    });
});
app.listen(PORT,()=>{
    console.log(`json server is running at http://localhost:${PORT}`);
});
