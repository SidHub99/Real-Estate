import React from 'react'
import Card from '../card/Card'
import { listdata } from '../../dumydata'
import './addtolist.scss'
const Addtolist = () => {
    
  return (
    <div className='list'>
    {listdata.map(item=>(
        <Card key={item} item={item}/>
    ))}  
    </div>
  )
}

export default Addtolist
