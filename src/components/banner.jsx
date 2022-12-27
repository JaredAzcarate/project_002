import React, {useState, useEffect} from 'react';
import{Row, Col, Container} from 'react-bootstrap';
import '../styles/banner.css'
import Astronauta from '../assets/img/header-img.svg';
import { AiOutlineSend } from "react-icons/ai";
import Typewriter from 'typewriter-effect';

function Banner() {

    const[desaparecer, setDesaparecer] = useState(false);

    useEffect(()=>{
        const desaparecer = () =>{
            if(window.scrollY > 200){setDesaparecer(true)}
            else (setDesaparecer(false))
        } 

        window.addEventListener('scroll', desaparecer)

    }, []);

    let send = ()=>{
        alert('Thanks for touch  👍 ')
    };

    return(
        <section className='section-banner' id='home'>
            <Container>
                <Row className='vh-100 align-items-center justify-content-center'>
                    <Col className='col-6 banner-text text-sm-start text-center' lg={7} xs={12}>
                        <span className='banner-text_destaque'>Welcome to Project 2</span>
                        <h1 className='display-1'>Hi! This is  <Typewriter
                        options={{
                            loop: true,
                        }}

                        onInit={(typewriter) =>{
                            typewriter
                            .typeString('my second project.')
                            .pauseFor(3000)
                            .deleteAll()
                            .typeString('developed with React and Bootstrap.')
                            .pauseFor(3000)
                            .start(); 
                        }}/>
                        </h1>
                        <p className='mt-3 lead'>Ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button className='h4 mt-3' onClick={() => {send()}}>Let's Connect <AiOutlineSend className='button-icon'/></button>
                    </Col>

                    <Col className='col-6 banner-img' lg={5}>
                        <img src={Astronauta} alt="Astronauta" className={desaparecer ? 'desaparecer' : ''} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;