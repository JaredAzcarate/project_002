import {React, useState} from "react"; 
import { Container, Row, Col, Alert } from 'react-bootstrap';
import '../styles/newsletters.css'

function Newletters () {

const [email,setEmail] = useState('');

function subscribeNotification (e) {
    e.preventDefault();
    console.log('Subscripto');        
}
    return(
        <Container>
            <Row className="p-3 align-items-center newsBox">
                <Col>
                <div>
                    <h3>Subscribe to our Newsletter
                    & Never miss latest updates</h3>
                </div>
                </Col>

                <Col>
                <form onSubmit={subscribeNotification}>
                    <input type="email" placeholder="Type you email" onChange={(e) => setEmail(e.target.value)} /> 
                    <button type="submit" className="mt-3 ">Subscribe</button>
                </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Newletters;