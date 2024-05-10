import React, { useContext, useState } from 'react'
import './addpost.scss'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
import { AuthContext } from '../../context/Authcontext'
import Upload_images from '../../components/upload/Uplaodimages'
import { useNavigate } from 'react-router-dom'


const Addpost = () => {
  const nav=useNavigate()
  const {currentUser,updateUser}=useContext(AuthContext)
    const {value,Setvalue}=useState('');
    const [images,Setimages]=useState([]);
    const [error,Seterror]=useState('')
    const handlesubmit=async(e)=>{
      e.preventDefault()

      const formdata=new FormData(e.target)
      let inputs= Object.fromEntries(formdata)
      try{
        const response = await fetch("http://localhost:8800/api/post/", {
          method: "post",
          credentials: "include",
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({
            postData: {
              title: inputs.title,
              price: parseInt(inputs.price),
              address: inputs.address,
              city: inputs.city,
              bedroom: parseInt(inputs.bedroom),
              bathroom: parseInt(inputs.bathroom),
              type: inputs.type,
              property: inputs.property,
              lat: inputs.latitude,
              long: inputs.longitude,
              images: images
            },
            postDetail: {
              desc: value,
              utils: inputs.utlities,
              pet: inputs.pet,
              income: inputs.income,
              size: parseInt(inputs.size),
              school: parseInt(inputs.school),
              bus: parseInt(inputs.bus),
              resturant: parseInt(inputs.resturant),
              post: parseInt(inputs.post)
            }
          })
        });
        const res=await response.json();
        console.log(res.id)
        
        nav('/'+res.id)
      }
      catch(e){
        console.log(e)
        Seterror(e.message)
      }
    }
  return (
<div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handlesubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
            </div>
            
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme='snow' onChange={Setvalue} value={value}/>
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Property</label>
              <select name="property">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">bus</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <button className="sendButton">Add</button>
            {error&& <span>{error}</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images &&(
          images.map((image,index)=>(
            <img src={image} key={index} />
          )))
        }
        <Upload_images uwConfig={{
        cloudName:"dl0u7efwt",
        uploadPreset:"estate",
        multiple:true,
        folder:"posts"

      }}
      setState={Setimages}
      />
      </div>
    </div>
  )
}

export default Addpost
