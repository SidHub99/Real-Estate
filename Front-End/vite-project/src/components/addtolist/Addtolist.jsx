import React from 'react'
import Card from '../card/Card'

import './addtolist.scss'
const Addtolist = ({post}) => {
    
  return (
    <div className='list'>
    {post.map(item=>(
        <Card key={item} item={item}/>
    ))}  
    </div>
  )
}

export default Addtolist
