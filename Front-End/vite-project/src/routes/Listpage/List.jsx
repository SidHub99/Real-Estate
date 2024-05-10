import React, { Suspense } from 'react'
import './List.scss'
import {listdata} from "../../dumydata"
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
import Map from '../../components/map/map'
import { Await, useLoaderData } from 'react-router-dom'
const List = () => {
    const data=useLoaderData()
  return (
    <div className='List-page'>
        <div className="list">
            <div className="wrapper">
                <Filter/>
                {
            
                  // <Suspense fallback={<p>Loading...</p>}>
                  //   <Await resolve={data.postResponse}
                  //   errorElement={<p>Error Loading posts</p>}
                  //   >
                     
                  //     {
                  //       (postResponse)=> postResponse.data.map(post=>(
                  //         <Card key={post.id} item={post}/>
                  //       ))
                        
                  //     }

                  //   </Await>

                  // </Suspense>
                    // console.log(data)  
                  
                  data.map(item=>(
                        <Card key={item.id} item={item}/>
                    ))
                } 
            </div>
        </div>
        <div className="maps">
          
          <Map items={data}/>
        </div>
    </div>
  )
}

export default List
