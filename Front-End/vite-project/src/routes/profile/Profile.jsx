import React from 'react'
import './Profile.scss'
import Addtolist from '../../components/addtolist/Addtolist'
const Profile = () => {
  return (
    <div className='profile'>
      <div className="details">
          <div className="wrapper">
            <div className="title">
              <h1>User Profile</h1>
              <button>Update Profile</button>
            </div>
            
            <div className="info">
              <span>
                Avatar: 
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              </span>
              <span>
                Name: <b>Umar Siddiqui</b>
              </span>
              <span>Email: <b>umar@gmail.com</b></span>
            </div>
            <div className="title">
              <h1>My List</h1>
              <button>Create new post</button>
            </div>
            <Addtolist/>
            <div className="title">
              <h1>Saved List</h1>
            </div>
            <Addtolist/>
          </div>
      </div>
      <div className="chat">
        <div className="wrapper">

        </div>
      </div>
    </div>
  )
}

export default Profile
