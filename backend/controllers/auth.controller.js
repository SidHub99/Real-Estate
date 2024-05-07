import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prismacl from '../lib/prisma.js';
const secretkey= "kf4U4iTkmiO1rKEDe0V8ulqzCudUR09vIwziB/K0uUc="
export const register=async (req,res)=>{
    try {const{username,email,password}=req.body;
    const hash= await bcrypt.hash(password,10);
    const newuser=await prismacl.user.create({
        data:{
            username,email,password:hash
        }
    })
    console.log(newuser);
    res.json({
        message:"user created successfully"
    })
}catch{
    res.json({
        message:"Email already exists"
    })
}

}
export const login=async(req,res)=>{
    const {username,password}=req.body;
    try{
        const user=await prismacl.user.findUnique({where:{username:username}})
        if(user){
            const check_pass=await bcrypt.compare(password,user.password)
            if(check_pass)
                {
                    // res.json({message:"Login Successful"})
                    const token=jwt.sign({
                        id:user.id
                    },secretkey)
                    
                    res.cookie("Token", token, {
                        httpOnly: true,
                    }).status(200).json({ message: "Login successful" });
                }
                else{
                    res.status(401).json({message:"Invalid Password"})
                }
        }
        else{
            res.status(404).json({ message: "Invalid Email" }); 
        }
    }catch(err){
        res.status(500).json({message:"Failed to Login"})
    }
}
export const logout=(req,res)=>{
    console.log('logout');
}