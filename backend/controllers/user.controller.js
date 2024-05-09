
import prismacl from "../lib/prisma.js"
import bcrypt from "bcrypt"
export const getUsers=async(req,res)=>{
    
    try{

        const allusers= await prismacl.user.findMany();
        res.status(200).json(allusers)
    }catch(e){
        console.log(e)
        res.status(500).json({message:"Failedto get users",success:false})
    }
}
export const getUser=async(req,res)=>{
    const id=req.params.id;
    
    try{
        const user= await prismacl.user.findUnique({where:{id}});
        res.status(200).json(user)

    }catch(e){
        console.log(e)
        res.status(500).json({message:"Failedto get users",success:false})
    }
}
export const updateUser=async(req,res)=>{
    const id=req.params.id;
    const tokenUserId=req.userId;
    const {password,image,...inputs}=req.body;
    if( id !== tokenUserId) res.status(403).json({message:"Not Authorized",success:false})
    let updatedpassword=null
    try{
        if(password){
            updatedpassword=await bcrypt.hash(password,10)
        }
        const updatedUser= await prismacl.user.update({where:{id},
            data:{
                ...inputs,
                ...(updatedpassword && {password:updatedpassword}),
                ...(image && {image})
            }
        });
        const {password:userpassword,...rest}=updatedUser
        res.status(200).json(rest)
        console.log("user info updated")
    }catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to update users",success:false})
    }
}
export const deleteUser=async(req,res)=>{
    const id=req.params.id;
    const tokenUserId=req.userId;
    
    if(! id=== tokenUserId) res.status(403).json({message:"Not Authorized",success:false})
    try{
        await prismacl.user.delete({
            where:{id}
        })
        res.status(200).json({message:"User Deleted",success:true})
    }catch(e){
        console.log(e)
        res.status(500).json({message:"Failedto get users",success:false})
    }
}