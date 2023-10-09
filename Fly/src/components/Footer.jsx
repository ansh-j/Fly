import React from 'react'

import logo from '../assets/logo.png'

import {TiSocialFacebook} from 'react-icons/ti'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="sectionContainer container grid">
      <div className="gridOne">
        <div className="logoDiv">
          <img src={logo} className='logo' />
        </div>
        <p>Your mind should be stronger than feelings, fly!</p>

        <div className="socialIcon flex">
          <TiSocialFacebook className='icon'/>
          <AiOutlineTwitter className='icon'/>
          <AiFillYoutube className='icon'/>
          <TiSocialFacebook className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Footer