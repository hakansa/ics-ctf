import React from "react";
import NavbarPostLog from "./NavbarPostLogin";
import "../../App.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "#1f1e1e",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProfilePage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <header style={HeaderStyle}>
      <NavbarPostLog />
      <div className="text-center m-5-auto">
        <form>
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
          <h1 style={{ bottom: "60px", fontSize: "30px" }}>Change Password</h1>
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
            onClick={handleOpen}
            style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "10px",
              border: "none",
              margin: "10px",
              padding: "10px",
            }}
            id="settings"
          >
            Save Settings
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              style={{ backgroundColor: "#404241", border: "0px" }}
              sx={style}
            >
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Successfully Saved.
              </Typography>
            </Box>
          </Modal>
        </form>
      </div>
    </header>
  );
}
