import React, {useState, useEffect} from "react"; 
import { Container, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/skills.css';
import SkillItem from "./skill-item";

function Skills(props) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


      
    return(
    <Container>
        <section className='skills-section text-center'>
                <Row className="skills-section_container">
                    <h1>Skills</h1>
                    <p className="lead mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quo eum voluptates laboriosam ex nihil architecto. Consequuntur modi alias illo inventore aut velit assumenda molestias neque suscipit incidunt! Impedit, rerum?</p>

                <Carousel 
                responsive={responsive}
                containerClass="carousel-container" >

                    <div className="skills-item">
                        <SkillItem
                        porcentaje='50'
                        idioma='HTML'
                        />
                    </div>   

                    <div className="skills-item">
                        <SkillItem
                        porcentaje='70'
                        idioma='CSS'
                        />
                    </div>

                    <div className="skills-item">
                        <SkillItem
                        porcentaje='80'
                        idioma='SASS'
                        />
                    </div>

                    <div className="skills-item">
                        <SkillItem
                        porcentaje='45'
                        idioma='Javascript'
                        />
                    </div>  

                    <div className="skills-item">
                        <SkillItem
                        porcentaje='85'
                        idioma='React'
                        />
                    </div>                    

                    <div className="skills-item">
                        <SkillItem
                        porcentaje='65'
                        idioma='Bootstrap'
                        />
                    </div>

                </Carousel>
                </Row>
        </section>
    </Container>
    )
}


export default Skills;