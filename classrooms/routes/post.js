const express=require("express");
const router=express.Router();

//posts
//index - users
router.get("/", (req,res)=>{
    res.send("get for posts");
});

//show 
router.get("/:id", (req,res)=>{
    res.send("get for posts id");
});

//post
router.post("/", (req,res)=>{
    res.send("post for posts");
});

//delete
router.delete("/:id", (req,res)=>{
    res.send("delete for posts id");
});

module.exports=router;