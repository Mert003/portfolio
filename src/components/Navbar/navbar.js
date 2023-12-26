import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo.png";
import {Link} from "react-scroll";

import "./navbar.css";

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} width={50} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">

          <Link to="hero" smooth={true} duration={500}> <Nav.Item as="li" href="#home">Home</Nav.Item> </Link>
          <Link to="about" smooth={true} duration={500}> <Nav.Item as="li" >About Me</Nav.Item> </Link>
          <Link to="projects" smooth={true} duration={500}> <Nav.Item as="li" >Projects</Nav.Item></Link>
          <Link to="other" smooth={true} duration={500}> <Nav.Item as="li">Other Skills</Nav.Item></Link>
          <Link to="contact" smooth={true} duration={500}> <Nav.Item as="li" >Contact</Nav.Item></Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;