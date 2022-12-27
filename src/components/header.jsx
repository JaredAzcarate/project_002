import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from'../assets/img/logo.svg';
import '../styles/header.css';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


function BasicExample() {

  const[scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const scrolled = () => {
      if (window.scrollY > 50) {
        setScrolled (true);
      } 
      else {setScrolled (false)}
      }

      window.addEventListener('scroll', scrolled);
  }, [])

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled':''}>
      <Container className='nav-container'>
        <Navbar.Brand href="#home">
            <img
            src={logo}
            alt='Logo'
            className='nav-logo'
            ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav-menu'>
          <Nav className="me-auto nav-menu">
            <Nav.Link href="#home" className='nav-menu_item'>Home</Nav.Link>
            <Nav.Link href="#link" className='nav-menu_item'>Skills</Nav.Link>
            <Nav.Link href="#link" className='nav-menu_item'>Projects</Nav.Link>

            <div className='nav-social'>
              <a><AiFillInstagram className='nav-social_icon'/> </a>
              <a><FaFacebookF className='nav-social_icon'/> </a>
              <a><FaLinkedinIn className='nav-social_icon'/> </a>
            </div>

            <button className='nav-button_cta'><span>Let's connect</span></button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;