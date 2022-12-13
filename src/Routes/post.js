const express = require('express');
const cloudinary = require('cloudinary').v2;


const Post = require('../Models/postSchema');
 
const router = express.Router();

  


cloudinary.config({ 
    cloud_name: 'du762llex', 
    api_key: '326254666589782', 
    api_secret: 'KXN5AnWPs0ry58bV7D3CeSIYTXo' 
});

router.post("/upload",async (req,res)=>{
    console.log(req.body);
    const file = req.files.PostImage;
    console.log(file)

    cloudinary.uploader.upload(file.tempFilePath, async(err,result)=>{
        console.log(result);
        try{
            const posts = await Post.create({
                name: req.body.name,
                location: req.body.location,
                likes: req.body.likes,
                description: req.body.description,
                PostImage : result.url,
                date: req.body.date
            });
            res.json({
                status: "Sucess",
                posts
        
            })
    
        }catch(e){
            res.status(500).json({
                status: "Failed",
                message : e.message
        
            })
        }
    })
})

router.get("/show",async(req,res)=>{
    try{
        const posts = await Post.find().sort({_id:-1});
        res.status(200).json({
            posts
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message : e.message
    
        })
    }
})

router.get("/",async(req,res)=>{
    try{
        const posts = await Post.find().sort({_id:-1});
        res.status(200).json({
            posts
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message : e.message
    
        })
    }
})

module.exports = router;