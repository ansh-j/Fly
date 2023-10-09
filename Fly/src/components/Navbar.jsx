import React , {useState} from "react";

import {SiConsul, SiEtcd} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'

import logo from '../assets/logo.png'



const Navbar = () => {

  const [active,setActive]=useState('navBarMenu')
  const showNavBar =()=>
  {
    if(active ==='navBarMenu showNavBar')
    {
      setActive('navBarMenu');
    }
    else
    {
      setActive('navBarMenu showNavBar')

    }
  }

  // BGCOLOR FOR THE SECOND NAVBAR
  const[noBg,addBg]=useState('navBarTwo');
  const addBgColor=()=>
  {
    if(window.scrollY>=10)
    {
      addBg('navBarTwo navbar_With_Bg')

    }
    else
    {
      addBg('navBarTwo')
    }
  }

  window.addEventListener('scroll',addBgColor)
  
  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
        <SiConsul className="icon"/>
        </div>

        <div className="none flex">
          <li className="flex"> <BsPhoneVibrate/> Support</li>
          <li className="flex"> <AiOutlineGlobal/> Languages</li>
        </div>

        <div className="atb flex">
          <span>Sign In </span>
          {/* <span>Sign Out </span> */}
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv ">
          <img src={logo} className="logo" />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={showNavBar} className="listItem">About</li>
            <li onClick={showNavBar} className="listItem">Home</li>
            <li onClick={showNavBar} className="listItem">Offers</li>
            <li onClick={showNavBar} className="listItem">Seats</li>
            <li onClick={showNavBar} className="listItem">Destinations</li>
          </ul>

          <button onClick={showNavBar} className="btn flex btnOne">
            Contact
          </button>
        </div>
          
          <button className="btn flex btnTwo">
            Contact
          </button>

          <div onClick={showNavBar} className="toggleIcon">
            <CgMenuGridO className="icon"/>
          </div>
      </div>
    </div>
  );
}; 

export default Navbar
