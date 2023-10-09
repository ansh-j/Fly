import React from 'react'
import { useRef } from 'react'

import Video from '../assets/bgVideo2.mp4'
import aeroplane from '../assets/aeroplane3.png'


const Home = () => {

  const videoRef= useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate =1.2;
  };

  return (
    <div className='home flex container'>
      
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        
        <div className="videoDiv">
          <video  ref={videoRef}  onCanPlay={() => setPlayBack()} src={Video} autoPlay muted loop className="video"></video>
        </div>

        <img src={aeroplane} alt="" className="plane" />

      </div>
    </div>
  )
}

export default Home