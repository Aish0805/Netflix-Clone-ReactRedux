import React from 'react'
import "./ProfileScreen.css"
import Nav from '../Nav'
import PlansScreen from './PlansScreen'
import { Link } from 'react-router-dom'
function ProfileScreen() {
  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' />
            <div className='profileScreen__details'>
                <h2>jadhavaish0408@gmail.com</h2>
                <div className='profileScreen__plans'>
                    <h3>Plans </h3>
                    <PlansScreen />
                    <button type='button' className='profileScreen__signOut'><Link to={"/"} style={{textDecoration:"none",color:"white"}}>Sign Out</Link></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
