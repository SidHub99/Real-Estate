import React, { useState } from 'react'
import './slider.scss'
import arrow from '../../assets/arrow.png'

const Slider = ({images}) => {
    const [imageIndex, SetimageIdex] = useState(null)
    const setdirections=(direction)=>{
        if (direction === "left") {
            if(imageIndex === 0){    
                SetimageIdex(images.length-1)
        }
        else{
            SetimageIdex(imageIndex-1)
        }
    }
        else{
            if(imageIndex === images.length-1){
                SetimageIdex(0)
            }
            else{
                SetimageIdex(imageIndex+1)
            }
        }

    }   
  return (
    <div className='slider'>
        { imageIndex !== null &&( <div className="fullslider">
           
            <div className="arrow" onClick={()=>setdirections("left")}>
                <img src={arrow} alt="" onClick={()=>SetimageIdex(imageIndex+1)}/>
            </div>
            <div className="image">
                <img src={images[imageIndex]} alt="" />
            </div>
            <div className="arrow" onClick={()=>setdirections("right")}>
                <img className="right" src={arrow} alt="" />

            </div>
            <div className="close" onClick={()=>SetimageIdex(null)}>x</div>
        </div>)}
        <div className="big-img">
            <img src={images[0]} alt="" onClick={()=>SetimageIdex(0)}/>
        </div>
        <div className="small-img">
            {
                images.slice(1).map((image,index)=>(
                    <img key={index} src={image} onClick={()=>SetimageIdex(index+1)}/>
                ))
            }
        </div>
      
    </div>
  )
}

export default Slider
