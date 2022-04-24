import React from 'react'

import NavbarPostLog from './NavbarPostLogin'
import '../../App.css'

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#1f1e1e",
}

export default function ChallengesPage() {
    return (
        <header style={HeaderStyle}>
            <NavbarPostLog/>
            <button type='button' className='btn-left'>
                Challenge #1
            </button>
            <button type='button' className='btn-left'>
                Challenge #2
            </button>
            <button type='button' className='btn-left'>
                Challenge #3
            </button>
            <button type='button' className='btn-left'>
                Challenge #4
            </button>
            <button type='button' className='btn-left'>
                Challenge #5
            </button>
            <button type='button' className='btn-left'>
                Challenge #6
            </button>
        </header>
        
    )
}