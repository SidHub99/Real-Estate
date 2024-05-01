import React from 'react'
import '../singlepage/SinglePage.scss'
import Slider from '../../components/slider/Slider'
import {singlePostData,userData} from '../../dumydata'
import pin from '../../assets/pin.png'
import utility from '../../assets/utility.png'
import pet from '../../assets/pet.png'
import bed from '../../assets/bed.png'
import fee from '../../assets/fee.png'
import bath from '../../assets/bath.png'
import size from '../../assets/size.png'
import school from '../../assets/school.png'
import bus from '../../assets/bus.png'
import msg from '../../assets/chat.png'
import resturant from '../../assets/restaurant.png'
import save from '../../assets/save.png'
import Map from '../../components/map/map'

const Singlepage = () => {
  return (
    <div className="singlepage">
        
    <div className='details'>
      <div className="wrapper">
        <Slider images={singlePostData.images}/>
        <div className="info">
          <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src={pin} alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">
                  <span>${singlePostData.price}</span>
                </div>
              </div>
              <div className="user">
                <img src={userData.image} alt="" />
                <span>{userData.name}</span>
              </div>
          </div>
          <div className="bottom">
            <span>{singlePostData.description}</span>
          </div>
        </div>
      </div>
      </div>
      {/* <div className="features">
        <div className="wrapper">
        <div className="general">
          <h2>General</h2>
          <div className="vertical">

            <div className='boxes'>
              <img src={utility} alt="" />
              <div className='text'>
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className='boxes'>
              <img src={pet} alt="" />
              <div>
                <span>Pet policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className='boxes'>
              <img src={fee} alt="" />
              <div>
                <span>Property Fee</span>
                <p>Must have 3x the rent in local household income</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sizes">
          <h2>Room Sizes</h2>
          <div className="horizontal">
            <div className="size-box">
              <img src={size} alt="" />
              <div className="text">
                <p>80sqm (861sqft)</p>
              </div>
            </div>
            <div className="size-box">
              <img src={bed} alt="" />
              <div className="text">
                <p>2 bed</p>
              </div>
            </div>
            <div className="size-box">
              <img src={bath} alt="" />
              <div className="text">
                <p>1 bathroom</p>
              </div>
            </div>
          </div>
          </div>
        <div className="nearby">
          <h2>Nearby Places</h2>
          <div className="horizontal">
            <div className="size-box">
              <img src={school} alt="" />
              <div className="text">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="size-box">
              <img src={bus} alt="" />
              <div className="text">
                <span>Bus stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="size-box">
              <img src={resturant} alt="" />
              <div className="text">
                <span>Resturant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
        </div>
        <div className="location">
          <p>Location</p>
        </div>
        <div className="btns">
          <div className="msg">
            <img src={msg} alt="" />
            <p>Send a message</p>
          </div>
          <div className="save">
            <img src={save} alt="" />
            <p>Save the place</p>
          </div>
        </div>
        
      </div>
      </div> */}
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src={utility} alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src={pet} alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src={fee} alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src={size} alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src={bed} alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src={bath} alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src={school} alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src={bus} alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src={resturant} alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src={msg} alt="" />
              Send a Message
            </button>
            <button>
              <img src={save} alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singlepage
