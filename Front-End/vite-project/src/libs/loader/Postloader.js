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
