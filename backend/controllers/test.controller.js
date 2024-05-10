import jwt from 'jsonwebtoken'

export const shouldlogged=(req,res)=>{
    console.log(req.userId)
    res.status(200).json({message:"Authenticated",success:true})
}
export const shouldadmin=(req,res)=>{
    
    const token=req.cookies.Token;
    if(!token) return res.status(401).json({message:"Not authenticated",success:false})
        jwt.verify(token,secretkey,async(err,payload)=>{
            if(err) return res.status(403).json({message:"Not valid token",success:false})
            if(!payload.isAdmin)    return res.status(403).json({message:"Not Authoried",success:false})
            });
            res.status(200).json({message:"Authenticated",success:true})
}