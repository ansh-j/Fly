import React ,{useEffect}from 'react'

import traveler1 from '../assets/traveler3.jpg'
import traveler3 from '../assets/traveler1.jpg'
import traveler5 from '../assets/traveler5.jpg'
import traveler4 from '../assets/traveler2.jpg'
 
import destination1 from '../assets/destination1.jpg'
import destination2 from '../assets/destination2.jpg'
import destination3 from '../assets/destination3.jpg'
import destination4 from '../assets/destination4.jpg'

// import Aos from 'aos'
// import 'aos/dist/aos.css'
const travelers =
[
  {
    id:1,
    destinationImage:destination1,
    travelerImage:traveler1,
    travelerName:'IsraTech',
    socialLink: '@isratech8'
  },
  {
    id:2,
    destinationImage:destination2,
    travelerImage:traveler3,
    travelerName:'Wilson Lindsy',
    socialLink: '@wilsonlindsey'
  },
  {
    id:3,
    destinationImage:destination3,
    travelerImage:traveler5,
    travelerName:'Jack Crook',
    socialLink: '@jackcrook28'
  },
  {
    id:4,
    destinationImage:destination4,
    travelerImage:traveler4,
    travelerName:'Micheal Kane',
    socialLink: '@michealkane'
  }


]

const Travelers = () => {

  // useEffect(()=>
  // {
  //   Aos.init({duration:2000})
  // },[])

  return (
    <div className="travelers section container">

      <div className="sectionContainer">

        <h2   >Top travelers of this month!</h2>

        <div className="travelersContainer grid">
         
         {
            travelers.map(({ id,destinationImage,travelerImage,travelerName,socialLink})=>
            {
              return(

                <div   key={id} className="singleTraveler">

                  <img src={destinationImage} className="destinationImage" />
                  
                  <div className="traverlerDetails">
                    <div className="travelerPicture">
                    <img src={travelerImage} className="travelerImage" />
                    </div>

                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>

                  </div>
                </div>
              )
            })
          }   

        </div>
      </div>
    </div>
  )
}

export default Travelers