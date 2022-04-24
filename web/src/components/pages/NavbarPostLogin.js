import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavbarPostLog() {
  return (
    <Navbar className="nav-post" variant="bg">
      <Nav.Link className="text-left" href="/Home">
        Information
      </Nav.Link>

      <Nav.Link className="text-left" href="/Teams">
        Teams
      </Nav.Link>

      <Nav.Link className="text-left" href="/Scoreboard">
        Scoreboard
      </Nav.Link>

      <Nav.Link className="text-left" href="/Challenges">
        Challenges
      </Nav.Link>

      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
      </Container>

      <Nav.Link className="text-right" href="/">
        Profile
      </Nav.Link>

      <Nav.Link className="text-right" href="/Team">
        Team
      </Nav.Link>

      <Nav.Link className="text-right" href="/">
        Logout
      </Nav.Link>

    </Navbar>
  );
}
