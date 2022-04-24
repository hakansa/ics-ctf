import React from 'react'
import NavbarPostLog from './NavbarPostLogin'
import { Link } from 'react-router-dom'
import '../../App.css'

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#1f1e1e",
}

export default function CreateTeamPage() {
    return (
        <header style={HeaderStyle}>
            <NavbarPostLog/>
            <h1>Create Team</h1>
            <div className="text-center m-5-auto">
                <form action="/TeamExist">
                    <p>
                        <label>Team Name</label><br/>
                        <input type="text" name="first_name" required />
                    </p>
                    <Link to="/TeamExist">
                        <button className="primary-button" id="reg_btn"><span>Create</span></button>
                    </Link>
                </form>
            </div>
        </header>
    )
}