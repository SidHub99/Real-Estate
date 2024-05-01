import React from 'react'
import './List.scss'
import {listdata} from "../../dumydata"
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
import Map from '../../components/map/map'
const List = () => {
    const data=listdata
  return (
    <div className='List-page'>
        <div className="list">
            <div className="wrapper">
                <Filter/>
                {
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
