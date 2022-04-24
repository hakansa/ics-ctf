import React from 'react'

import '../../App.css'
import BackgroundImage from '../../assets/images/ics_logo.png'
import NavbarTop from './Navbar'
import RegisterForm from './RegisterForm'

export default function LandingPage() {
    return (
      <header style={ HeaderStyle }>
          <div className='img-handler'>
            <img src={BackgroundImage} alt="logo-background" className="logo"/>
          </div>        
          <NavbarTop/>
          <RegisterForm/>
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
