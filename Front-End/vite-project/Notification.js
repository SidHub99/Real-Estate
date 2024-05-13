import {create} from 'zustand'
export const useNotification=create((set)=>({
    number:0,
    fetch:async()=>{
        const resp=await fetch('http://localhost:8800/api/user/notification',{
            method:'get',
            credentials:'include',
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await resp.json();
        console.log(data)
        set({number:data})
    },
    decrease:()=>{
            set((prev)=>({number:prev.number-1}))
    },
    reset:()=>set({number:0})
}))