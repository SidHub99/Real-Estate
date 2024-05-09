import jwt from 'jsonwebtoken'
export const vertoken=(req,res,next)=>{
    const token=req.cookies.Token;
    const secretkey= "kf4U4iTkmiO1rKEDe0V8ulqzCudUR09vIwziB/K0uUc="
    if(!token) return res.status(401).json({message:"Not authenticated",success:false})
    jwt.verify(token,secretkey,async(err,payload)=>{
        if(err) return res.status(403).json({message:"Not valid token",success:false})
        req.userId=payload.id;
        next()
        });
}