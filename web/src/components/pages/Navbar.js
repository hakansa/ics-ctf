import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";

export default function NavbarTop() {
  return (
    <Navbar className="color-nav" variant="none">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
<<<<<<< HEAD
            <Nav.Link href="Information">Information</Nav.Link>
=======
            <Nav.Link href="Home">Information</Nav.Link>
>>>>>>> 80716cdfa67b8b233a1092f7507a053dd239815a
            <Nav.Link href="Teams">Teams</Nav.Link>
            <Nav.Link href="Scoreboard">Scoreboard</Nav.Link>
            <Nav.Link href="#Challenges">Challenges</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
