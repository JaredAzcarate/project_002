import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormImg from '../assets/img/contact-img.svg'
import '../styles/contact.css'

function Contact (){

    const infoForm = {
        name: '',
        lastName: '',
        email: '',
        phone: '',
        menssage: ''
    }

   const [textForm, setTextForm] = useState(infoForm);
   const [statusMenssage, setStatusMenssage] = useState({})

    const formUpdate = (category, value) =>{
        setTextForm({
            ...textForm, [category]:value
        })
    }

    const send = async (e) =>{
        e.preventDefault();

        let response = await fetch("http://localhost:3001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(infoForm),
        });

    let result = await response;

    if(result === 200) {
        setStatusMenssage({sucess: true, menssage:'Menssage sent with sucess'});
    } else {
        setStatusMenssage({sucess: false, menssage:'Something went wrong'});
    }
     
   
    }
        
    return(
        <div className='form-bg'>
            <Container>
                <Row className='p-5'>
                    <Col>
                        <img src={FormImg} alt='Contact'></img>
                    </Col>

                    <Col>
                        <h1>Get In Touch</h1>

                        <form onSubmit={send}>
                            <Row>
                                <Col sm={6} className="px-2 mb-3">
                                    <input type="text" placeholder='Name' onChange={(e) => formUpdate('name', e.target.value)}/>
                                </Col>       

                                <Col sm={6} className="px-2 mb-3">
                                    <input type="text" placeholder='Last Name' onChange={(e)=> formUpdate('last name', e.target.value)}/>
                                </Col>

                                <Col sm={6} className="px-2 mb-3">
                                    <input type="email" placeholder='Your email' onChange={(e)=>formUpdate('email', e.target.value)}/>
                                </Col>  

                                <Col sm={6} className="px-2 mb-3">
                                    <input type="number" placeholder='Phone Number' onChange={(e)=>formUpdate('phone', e.target.value)}/>
                                </Col>  

                                <Col sm={12} className="px-2 mb-3">
                                    <textarea placeholder='Menssage' onChange={(e)=> formUpdate('menssage', e.target.value)}></textarea>
                                    <button type='submit' className='submit-button' >Send</button>
                                </Col>

                                <Col sm={12} className="px-1">
                                    <p className={statusMenssage.sucess === false ? 'danger' : 'ok'}>{statusMenssage.menssage}</p>
                                </Col>      
                            </Row>
                                                 
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default Contact;