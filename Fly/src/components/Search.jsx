import React, {useEffect, useState} from 'react'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {

  useEffect(()=>
  {
    Aos.init({duration:2000})
  },[])

  

  const func = (e)=>
  {
    const ele = document.getElementsByClassName("singleBtn");
    console.log(ele);
    ele.currentTarget.classList.remove("active");
    
    e.currentTarget.classList.add("active");
    

  }

  return (
    <div className="search container section">
      <div data-aos='fade-up' data-aos-duration='1500'  className="sectionContainer grid">
        <div className="btns flex">
          <div onClick={func} className="singleBtn">Economy</div>
          <div onClick={func} className="singleBtn">Business Class</div>
          <div onClick={func} className="singleBtn">First Class</div>
        </div>

        <div data-aos='fade-up' data-aos-duration='1000'  className="searchInputs grid">

          <div className="singleInput flex">

            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>

            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder="Where do you want to go?" />
            </div>

          </div>

          <div className="singleInput flex">

            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>

            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder="Add guests" />
            </div>
          </div>

          <div className="singleInput flex">

            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>

            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder="Add date" />
            </div>
          </div>

          <div className="singleInput flex">

            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>

            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder="Add date" />
            </div>
          </div>

          <button className="btn btnBlock flex">
            Search Flight
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Search;
