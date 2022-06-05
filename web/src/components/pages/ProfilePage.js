import React from "react";
import NavbarPostLog from "./NavbarPostLogin";
import "../../App.css";
import { Link } from "react-router-dom";

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "#1f1e1e",
};

export default function ProfilePage() {
  return (
    <header style={HeaderStyle}>
      <NavbarPostLog />
      <div className="text-center m-5-auto">
        <form action="/home">
          <p>
            <label>Username</label>
            <br />
            <input
              style={{ backgroundColor: "#0C0B0B", color: "white" }}
              type="text"
              name="username"
              value={"Baran"}
              required
            />
          </p>
          <p>
            <label>E-mail</label>
            <br />
            <input
              style={{ backgroundColor: "#0C0B0B", color: "white" }}
              type="text"
              name="e-mail"
              value={"ugurbaranozer@gmail.com"}
              required
            />
          </p>
          <h1 style={{bottom: "60px", fontSize: "30px"}}>Change Password</h1>
          <p>
            <label>Password</label>
            <br />
            <input type="password" name="password" required />
          </p>
          <p>
            <label>Confirm Password</label>
            <br />
            <input type="password" name="password2" required />
          </p>

          <button
            style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "10px",
              border: "none",
              margin: "10px",
              padding: "10px",
            }}
            id="settings"
            type="submit"
          >
            Save Settings
          </button>
        </form>
      </div>
    </header>
  );
}
