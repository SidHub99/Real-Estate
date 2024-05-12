import prismacl from "../lib/prisma.js"

export const getchat=async(req,res)=>{
    const tokenuserid=req.userId
    try{
        const chat=await prismacl.chat.findUnique({
            where:{
                id:req.params.id,
                userIDs:{
                    hasSome:[tokenuserid]
                }
            },
            include:{
                message:{
                    orderBy:{
                        createdAt:"asc",
                    }
                }
            }
        
        })
        await prismacl.chat.update({
            where:{
                id:req.params.id
            },
            data:{
                seenby:{
                    push:[tokenuserid]
                }
            }
        })
        res.status(200).json({chat})
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

        for (const chat of chats){
            const recieverid=  chat.userIDs.find((id)=>id!==tokenuserid)
            const reciever=await prismacl.user.findUnique({
                where:{
                    id:recieverid
                },
                select:{
                    id:true,
                    image:true,
                username:true,
                }
            });
            chat.reciever=reciever
        }
       
        res.status(200).json(chats)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to get chats",success:false})
    }

}
export const addChat=async(req,res)=>{
    const tokenuserid=req.userId
    try{
        const addchat=await prismacl.chat.create({
            data:{
                userIDs:[tokenuserid,req.body.recieverId]
            }
        })
        res.status(200).json(addchat)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to add chats",success:false})
    }

}
export const readChat=async(req,res)=>{
    const tokenuserid=req.userId
    try{
       const chat=await prismacl.chat.update({
            where:{
                id:req.params.id,
                userIDs:{
                    hasSome:[tokenuserid]
                },
                
            },
            data:{
                seenby:{
                    push:[tokenuserid]
                }
            }
         
       })
        res.status(200).json(chat)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to read chats",success:false})
    }

}
