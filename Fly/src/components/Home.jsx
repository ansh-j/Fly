import React, {useEffect} from 'react'
import { useRef } from 'react'

import Video from '../assets/bgVideo2.mp4'
import aeroplane from '../assets/aeroplane3.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  
  useEffect(()=>
  {
    Aos.init({duration:2000})
  },[])


  const videoRef= useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate =2;
  };

  return (
    <div className='home flex container'>
      
      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='1500' >Create Ever-lasting Memories With Us</h1>
      </div>

      <div  data-aos='fade-down' data-aos-duration='1500' className="homeImages flex">
        
        <div className="videoDiv">
          <video  ref={videoRef}  onCanPlay={() => setPlayBack()} src={Video} autoPlay muted loop className="video"></video>
        </div>

        <img src={aeroplane} alt="" className="plane" />

      </div>
    </div>
  )
}

export default Home