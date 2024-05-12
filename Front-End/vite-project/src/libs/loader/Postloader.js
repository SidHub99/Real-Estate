import { defer } from "react-router-dom";

export const postLoader = async ({ request, params }) => {
    if (!params || !params.id) {
        throw new Error("Missing or invalid parameters");
    }

    const res = await fetch("http://localhost:8800/api/post/" + params.id);
    const data = await res.json();
    return data;
}
export const listLoader = async ({ request, params }) => {
 const query=request.url.split("?")[1];
 const res=await fetch("http://localhost:8800/api/post?" + query);
 const postPromise= await res.json();
 return postPromise;
//  return defer({
// postResponse:postPromise
//  })
}
export const profilePageLoader = async () => {
 
try{
 const profilepost=await fetch("http://localhost:8800/api/user/profileposts",
    {
        method:"get",
        credentials:"include"
    }
 );
 const chat=await fetch("http://localhost:8800/api/chat",{
    method:"get",credentials:"include"
 })
const [propost, prochat] = await Promise.all([profilepost.json(), chat.json()]);


 return {posts:propost,chats:prochat};

}
 catch(e)
 {
    console.log(e)
    return e
 }
}


