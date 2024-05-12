export const addMessage=async(req,res)=>{
    const body=req.body;
    const userid=req.userId
    try{
       
        res.status(200).json(newpost)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Failed to add Message",success:false})
    }

}