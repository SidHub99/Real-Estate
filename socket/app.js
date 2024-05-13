import {Server} from "socket.io"

const io= new Server({
    cors:{
        origin:"http://localhost:5713",
        credentials: true,
    }
})
let onlineUser=[]

const adduser=(userId,socketId)=>{
    const check= onlineUser.find(user=> user.userId===userId)
    if(!check){
        onlineUser.push({userId,socketId})
    }
}
const removeuser=(socketId)=>{
    onlineUser= onlineUser.filter(user=> user.socketId!==socketId)
}

const getuser=(userId)=>{
    return onlineUser.find(user => user.userId===userId)
}
io.on("connection",(socket)=>{
     socket.on("newUser",(userId)=>{
            adduser(userId,socket.id)
            // console.log(userId,socket.id)
            console.log(onlineUser)
     })
     socket.on("sendMessage",({receiverId,data})=>{
        const reciever= getuser(receiverId)
        io.to(reciever.socketId).emit("getMessage",data)
     })

     socket.on("disconnect",()=>{
        removeuser(socket.id)
     })
});
io.listen(4000)