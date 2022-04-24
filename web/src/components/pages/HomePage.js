import React from 'react'

import '../../App.css'
import NavbarPostLog from './NavbarPostLogin'
import Information from './Information'

export default function Homepage() {
    return (
      <header style={ HeaderStyle }>      
          <NavbarPostLog/>
          <Information/>
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