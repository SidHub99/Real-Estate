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
        message:"user created successfully",
        success:true,
    })
}catch{
    res.json({
        message:"Email already exists",
        success:false,
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
                        const {password:userpassword,...userInfo}=user
                        
                        const token=jwt.sign({
                            id:user.id
                        },secretkey)
                        
                        res.cookie("Token", token, {
                            httpOnly: true,
                        }).status(200).json({ userInfo ,success:true});
                    }
                    else{
                        res.status(401).json({message:"Invalid Password",success:false})
                    }
            }
            else{
                res.status(404).json({ message: "Invalid Email",success:false }); 
            }
        }catch(err){
            res.status(500).json({message:"Failed to Login",success:false})
        }
    }
export const logout=(req,res)=>{
    res.clearCookie("Token").status(200).json({message:"Log out successful"})
}