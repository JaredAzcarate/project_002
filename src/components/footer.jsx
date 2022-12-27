import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from'../assets/img/logo.svg';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer (){
    return(
        <Container>
             <Row className="pb-5">
            <Col className="d-flex justify-content-start" sm={3}>
            <img src={logo} alt="Logo Footer" className='nav-logo'/>
            </Col>
            <Col className="d-flex justify-content-end">
            <div className='nav-social' sm={8}>
              <a><AiFillInstagram className='nav-social_icon'/> </a>
              <a><FaFacebookF className='nav-social_icon'/> </a>
              <a><FaLinkedinIn className='nav-social_icon'/> </a>
            </div>
            </Col>
        </Row>
        </Container>
       
    )
}

export default Footer;