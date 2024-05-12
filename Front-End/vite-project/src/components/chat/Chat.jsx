import React, { useContext, useEffect, useState } from 'react'
import './chat.scss'
import { AuthContext } from '../../context/Authcontext'
import {format} from 'timeago.js'

const Chat = ({chats}) => {
    const [chat,Setchat]=useState(null)
    const {currentUser}=useContext(AuthContext)
    console.log(chats)
    
    const handlechats=async(id,reciever)=>{
        try{
            const res=await fetch("http://localhost:8800/api/chat/"+id,{
                method:"get",
                credentials:"include"
            })
            const data=await res.json();
            console.log(data)
            console.log(data.chat)
            console.log(reciever)
           Setchat({...data.chat,reciever})
        }catch(e){
            console.log(e)
        }
    }
   
    console.log(chat)
    
    // useEffect(()=>{
    //     console.log(chat)
    // },[chat])
  
    // const handlechats=(id,reciever)=>{
        
    //         fetch("http://localhost:8800/api/chat/"+id,{
    //             method:"get",
    //             credentials:"include"
    //         }).then(res => res.json()).then(data=>{ Setchat({ ...data, reciever: reciever })}).catch(error => {
    //             console.log(error);
    //         });
    // }
   
    

  return (
    
    <div className='chat'>
      <div className="messages">
        <h1>Messages</h1>
       {chats &&
        chats.map((c)=>(
            <div className="message" key={c.id} style={{ 
                backgroundColor: c.seenby.includes(currentUser.id)? 'white' : "gray"
            }} onClick={()=>handlechats(c.id,c.reciever)}>
            
            <img src={c.reciever.image || "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="" />
            <span>{c.reciever.username}</span>
            <p>{c.lastmessage}</p>
        </div>
        ))
       }
       
      </div>
 {    chat&& ( <div className="chating">
            <div className="top">
                <div className="user">
                    <img src={chat.reciever.image ||"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="" />
                   { chat.reciever.username}
                </div>
                <span className='close' onClick={()=>Setchat(false)}>x</span>
            </div>
            <div className="center">
                {
                   chat && 
                    chat.message.map((msg)=>(
                        <div className="chatmsg own" key={msg.id}>
                        <p>{msg.text}</p>
                        <span>{format(msg.createdAt)}</span>
    
                    </div>   
    
                    ))
                }
               
                
           
            </div>
            <div className="bottom">
                <textarea placeholder='Enter Message Here ...'></textarea>
                <button>Send</button>
            </div>
      </div>)}

    </div>
  )
}

export default Chat
