import express from 'express'
import authroute from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import testroute from './routes/test.route.js'
import userroute from './routes/user.route.js'
import postroute from './routes/post.route.js'
import cors from "cors";
// {origin: "http://localhost:5173"}
const app=express();
// app.use(cors({credentials:true}));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5713', // Replace with your client-side origin
    credentials: true, // Allow credentials
  }));
  
app.use(cookieParser());


app.use('/api/user',userroute)
app.use('/api/auth',authroute)
app.use('/api/post',postroute)
app.use('/api/test',testroute)

app.listen(8800,()=>{
    console.log('Server Started at port 8800')
})