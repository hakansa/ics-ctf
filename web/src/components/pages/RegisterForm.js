import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function RegisterForm() {
    return (
        <div className="text-center m-5-auto">
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="username" required />
                </p>
                <p>
                    <label>E-mail address</label><br/>
                    <input type="text" name="e-mail" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <label>Please write your password again.</label><br/>
                    <input type="password" name="password" required />
                </p>

                <button id="reg_btn" type="submit">Register</button>
            </form>
        </div>
    )
}