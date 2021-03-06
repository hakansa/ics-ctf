import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

// write admin panel navbar by checking local storage username is admin
function NavbarTop() {
  if (localStorage.getItem("username") === "admin") {
    return (
      <Navbar className="color-nav" variant="none">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#Admin">Admin Panel</Nav.Link>
              <Nav.Link href="#Scoreboard">Scoreboard</Nav.Link>
              <Nav.Link href="#Challenges">Challenges</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar className="color-nav" variant="none">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#Scoreboard">Scoreboard</Nav.Link>
              <Nav.Link href="#Challenges">Challenges</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

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

      <Nav.Link className="text-right" href="/Profile">
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
