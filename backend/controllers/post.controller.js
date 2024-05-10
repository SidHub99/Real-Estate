import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prismacl from '../lib/prisma.js';
export const getPosts=async(req,res)=>{
    try{
        const posts=await prismacl.post.findMany()
        res.status(200).json(posts)
    }   
    catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to get Posts",success:false})
    }

}
export const getPost=async(req,res)=>{
    const id =req.params.id;
    try{
        const post=await prismacl.post.findUnique({
            where:{id},
            include:{
                postDetail:true,
                author:{
                    select:{
                        username:true,
                        image:true
                    }
                }
            }
        })
        res.status(200).json(post)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to get Post",success:false})
    }

}
export const addPosts=async(req,res)=>{
    const body=req.body;
    const userid=req.userId
    try{
        const newpost=await prismacl.post.create({
            data:{
                ...body.postData,
                // ...body,
                userId:userid,
                postDetail:{
                    create:body.postDetail
                }
            }
        })
        res.status(200).json(newpost)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to add Posts",success:false})
    }

}
export const updatePosts=async(req,res)=>{
    const id=req.params.id
    const userid=req.userId

    try{
        const updatedPost=await prismacl.post.update({
            where:{id},

        })

    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to update Posts",success:false})
    }

}
export const deletePosts=async(req,res)=>{
    const id=req.params.id
    const userid=req.userId
    try{
        const post=await prismacl.post.findUnique({
            where:{id}
        })

        if(post.userId!=userid)
            res.status(403).json({messgae:"Not authorized to delete"})
        await prismacl.post.delete({
            where:{id}   
        })
        res.status(200).json({message:"post deleted",success:true})
   
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to delete Posts",success:false})
    }

}