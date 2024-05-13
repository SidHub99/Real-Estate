import prismacl from "../lib/prisma.js";

export const addMessage=async(req,res)=>{
    const chatId=req.params.chatId;
    const userId=req.userId;
    const text=req.body.text

    try{
       const chat =await prismacl.chat.findUnique({
        where:{
            id:chatId,
            userIDs:{
                hasSome:[userId]
            }
        }
       })
       if(!chat) res.status(404).json({message:"Error to find chat"})
        const message=await prismacl.message.create({
        data:{
            text,
            chatId,
            userId

        }
    })
    await prismacl.chat.update({
        where:{
            id:chatId,

        },
        data:{
            seenby:[userId],
            lastmessage:text
        }
    })
        res.status(200).json(message)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to add Message",success:false})
    }

}