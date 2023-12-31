import React,{useEffect} from 'react'


import gridImg2 from '../assets/grid2.jpg'
import gridImg1 from '../assets/grid1.jpg'
import gridImg3 from '../assets/grid3.jpg'

import Aos from 'aos'
import  'aos/dist/aos.css'

const Support = () => {

  useEffect(()=>
  {
    Aos.init({duration:2000})
  },[])

  return (
    <div className="support container section">
      <div className="sectionContainer">

        <div className="titlesDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans, see what to expect along the journey!</p>
        </div>

        <div className="infoDiv grid">

          <div className="textDiv grid">

            <div data-aos='fade-down' data-aos-duration='1500' className="singleInfo">
              <span className="number">
                01
              </span>
              <h4>Travel requirements for Dubai</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>

            </div>
            
            <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
              <span className="number colorOne">
                02
              </span>
              <h4>Chauffer services at your arrival</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>

            </div>

            <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
              <span className="number colorTwo">
                03
              </span>
              <h4>Multi-risk travel insurance</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>

            </div>

          </div>       

          <div data-aos='fade-up' data-aos-duration='1500'  className="flex imgDiv">
              
            <img src={gridImg1} alt="" className='gridImage'/>
            <img src={gridImg2} alt="" className='gridImage'/>
            <img src={gridImg3} alt="" className='gridImage'/>
            

          </div>
        </div>
      </div>
    </div>
  )
}

export default Support