import prismacl from "../lib/prisma.js"

export const getchat=async(req,res)=>{
    
    try{
        
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to get chat",success:false})
    }

}
export const getchats=async(req,res)=>{
    const tokenuserid=req.userId
    try{
        const chats=await prismacl.chat.findMany({
            where:{
                userIDs:{
                    hasSome:[tokenuserid]
                }
            }
        })
       
        res.status(200).json(chats)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to get chats",success:false})
    }

}
export const addChat=async(req,res)=>{
    
    try{
       
        res.status(200).json(newpost)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to add chats",success:false})
    }

}
export const readChat=async(req,res)=>{
    
    try{
       
        res.status(200).json(newpost)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to read chats",success:false})
    }

}
