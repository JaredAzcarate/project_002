import { Container, NavItem, NavLink, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import '../styles/projects.css'
import Nav from 'react-bootstrap/Nav';
import Project from './individualProject';
import CapaImg1 from '../assets/img/project-img1.png'
import CapaImg2 from '../assets/img/project-img2.png'
import CapaImg3 from '../assets/img/project-img3.png'


function Projects() {
    const projects = [
        {
        img: CapaImg1 ,
        alt:'Project exemple',
        description:'Lorem Impsu exemple'
        },

        {
        img: CapaImg2 ,
        alt:'Project Exemple',
        description:'Lorem Impsu exemple'
        },

        {
        img: CapaImg3 ,
        alt:'Project Exemple',
        description:'Lorem Impsu exemple'
        },

        {
        img: CapaImg2 ,
        alt:'Project Exemple',
        description:'Lorem Impsu exemple'
        },

        {
        img: CapaImg1 ,
        alt:'Project Exemple',
        description:'Lorem Impsu exemple'
        },
        
        {
        img: CapaImg3 ,
        alt:'Project Exemple',
        description:'Lorem Impsu exemple'
        }
    ]
  return (
    <section className='projects mt-5 text-center'>
        <Container>

                <div className='projects-text mb-5'>
                    <h1>Projects</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam natus quae non optio atque minus praesentium totam illo delectus modi sint, cupiditate vero nesciunt. Eius explicabo omnis obcaecati molestias reprehenderit!</p>
                </div>
            
            <TabContainer defaultActiveKey='tab1'>
                <Nav className='tab-nav align-items-center justify-content-center'>
                    <Nav.Item> 
                        <Nav.Link eventKey='tab1'> Tab 1</Nav.Link>
                    </Nav.Item>

                    <Nav.Item> 
                        <Nav.Link eventKey='tab2'> Tab 2</Nav.Link>
                    </Nav.Item>

                    <Nav.Item> 
                        <Nav.Link eventKey='tab3'> Tab 3</Nav.Link>
                    </Nav.Item>
                </Nav>

                <TabContent
                >
                    <TabPane eventKey='tab1'>
                        <div className='tab-grid'>
                            {projects.map((project, index)=>{
                                    return(
                                        <Project
                                        key={index}
                                        {...project}
                                        /> 
                                    )})
                            }
                        </div>
                        
                    </TabPane>

                    <TabPane eventKey='tab2'>
                    <div className='tab-grid'>
                        <h2>This is Tab 2</h2>
                        </div>
                    </TabPane>

                    <TabPane eventKey='tab3'>
                    <div className='tab-grid'>
                        <h2>This is Tab 3</h2>
                    </div>
                    </TabPane>
                </TabContent>

            </TabContainer>
            
            
        </Container>
        
    </section>
    
  );
}

export default Projects;