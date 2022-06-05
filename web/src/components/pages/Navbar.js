import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";

export default function NavbarTop() {
  return (
    <Navbar className="color-nav" variant="none">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="Information">Information</Nav.Link>
            <Nav.Link href="Teams">Teams</Nav.Link>
            <Nav.Link href="Scoreboard">Scoreboard</Nav.Link>
            <Nav.Link href="#Challenges">Challenges</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
