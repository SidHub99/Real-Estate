import express from 'express'
import authroute from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import cors from "cors";
// {origin: "http://localhost:5173"}
const app=express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use('/api/auth',authroute)
app.listen(8800,()=>{
    console.log('Server Started at port 8800')
})