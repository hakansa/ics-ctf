import React, { useContext } from "react";
import NavbarPostLog from "./NavbarPostLogin";
import "../../App.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ButtonContext } from "./ButtonContext";
import { Link } from 'react-router-dom'

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "#1f1e1e",
  maxWidth: "100%",
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

export default function ChallengePage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { solved, setSolved } = useContext(ButtonContext);
  const handleTheme = () => {
    setSolved(!solved);
  };
  console.log(solved);
  return (
    <header style={HeaderStyle}>
      <NavbarPostLog />
      <div className="info-text">
        <h2
          style={{
            float: "left",
            maxWidth: "100%",
            paddingLeft: "300px",
            paddingTop: "50px",
            left: "100px",
          }}
        >
          Challenge Definition
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2>Difficulty: Medium</h2>
          <h2>Credits: 150 pts</h2>
        </h2>
      </div>
      <div
        className="submit-form"
        style={{
          float: "right",
          position: "relative",
          top: "410px",
          right: "500px",
        }}
      >
        <form style={{ maxWidth: "fit-content" }} action="/home">
          <p>
            <label>Submit Your Answer</label>
            <br />
            <input type="text" name="answer" required />
          </p>
          <Button style={{ color: "#51DA62" }} onClick={handleOpen}>
            SUBMIT
          </Button>
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
                <Link to="/Challenges">
                  <Button style={{ color: "#51DA62" }} onClick={handleTheme}>
                    OK
                  </Button>
                </Link>
              </Typography>
            </Box>
          </Modal>
        </form>
      </div>
    </header>
  );
}
