import React from 'react'
import MTable from './MTable'

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

export default function TeamExistPage() {
    return (
        <header style={HeaderStyle}>
            <NavbarPostLog/>
            <h1>Team Name</h1>
            <button type='button' className='btn-t1'>
                Edit Team
            </button>
            <button type='button' className='btn-t'>
                Choose Leader
            </button>
            <button type='button' className='btn-t'>
                Invite
            </button>
            <button type='button' className='btn-t'>
                Leave Team
            </button>
            <MTable/>

        </header>
    )
}