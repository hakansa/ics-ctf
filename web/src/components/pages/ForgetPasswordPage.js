import React from 'react'
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

export default function ForgetPasswordPage() {
    return (
        <header style={HeaderStyle}>
            <div className="text-center m-10-auto">
                <h2>Reset your password</h2>
                <h2>Enter your email address and we will send you a new password</h2>
                <form action="/login">
                    <p>
                        <label id="reset_pass_lbl">Email address</label><br/>
                        <input type="email" name="email" required />
                    </p>
                    <p>
                        <button id="send_btn" type="submit">Send password reset email</button>
                    </p>
                </form>
                <footer>
                    <p>First time? <Link to="/register">Create an account</Link>.</p>
                    <p><Link to="/">Back to Homepage</Link>.</p>
                </footer>
            </div>
        </header>
    )
}
