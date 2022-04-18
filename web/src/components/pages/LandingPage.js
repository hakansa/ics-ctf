import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/ics_logo.png'
import SignInPage from './LoginPage'
import NavbarTop from './Navbar'

export default function LandingPage() {
    return (
      <header style={ HeaderStyle }>
          <div className='img-handler'>
            <img src={BackgroundImage} alt="logo-background" className="logo"/>
          </div>        
          <NavbarTop/>
          <SignInPage/>
      </header>
    )
}


const HeaderStyle = {
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "#1f1e1e",

}