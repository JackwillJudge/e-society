import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const MenuBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-Society</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#list">Members</Nav.Link>
            <Nav.Link style={{marginLeft:"100px", marginRight:"100px"}} href="#Add">Add Members</Nav.Link>
            <Nav.Link href="#Delete">Delete Member</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuBar;
