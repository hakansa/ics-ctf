import React from 'react'
import { Link } from 'react-router-dom'

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

export default function TeamPage() {
    return (
        <header style={HeaderStyle}>
            <NavbarPostLog/>
            <h1>In order to participate in challenges join or create a team</h1>
            <Link to='/JoinTeam'>
                <button id='team_btn1' type='button' >
                    Join Team
                </button>
            </Link>
            <Link to='/CreateTeam'>
                <button id='team_btn2' type='button' formAction='' >
                    Create Team
                </button>
            </Link>

        </header>
    )
}