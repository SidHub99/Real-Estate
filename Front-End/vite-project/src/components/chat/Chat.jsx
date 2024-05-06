import React, { useState } from 'react'
import './chat.scss'

const Chat = () => {
    const [chat,Setchat]=useState(true)
  return (
    <div className='chat'>
      <div className="messages">
        <div className="message" onClick={()=>Setchat(true)}>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Umar Siddiqui</span>
            <p>hello click me testing message ...</p>
        </div>
        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Umar Siddiqui</span>
            <p>hello testing message ...</p>
        </div>
        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Umar Siddiqui</span>
            <p>hello testing message ...</p>
        </div>
        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Umar Siddiqui</span>
            <p>hello testing message ...</p>
        </div>
        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Umar Siddiqui</span>
            <p>hello testing message ...</p>
        </div>
        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Umar Siddiqui</span>
            <p>hello testing message ...</p>
        </div>
      </div>
 {    chat&& ( <div className="chating">
            <div className="top">
                <div className="user">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    Umar Siddiqui
                </div>
                <span className='close' onClick={()=>Setchat(false)}>x</span>
            </div>
            <div className="center">
                <div className="chatmsg">
                    <p>Hello world this is a demo message</p>
                    <span>1 hour ago</span>
                    
                </div>
                <div className="chatmsg own">
                    <p>Hello world this is a demo message</p>
                    <span>1 hour ago</span>

                </div>
                <div className="chatmsg">
                    <p>Hello world this is a demo message</p>
                    <span>1 hour ago</span>

                </div>
                <div className="chatmsg own">
                    <p>Hello world this is a demo message</p>
                    <span>1 hour ago</span>

                </div>
                <div className="chatmsg">
                    <p>Hello world this is a demo message</p>
                    <span>1 hour ago</span>

                </div>
                <div className="chatmsg own">
                    <p>Hello world this is a demo message</p>
                    <span>1 hour ago</span>

                </div>
                <div className="chatmsg">
                    <p>Hello world this is a demo message</p>
                    <span>1 hour ago</span>

                </div>
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
