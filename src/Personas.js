import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Marquee from "react-fast-marquee";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Accordion } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';
import ScrollButton from './ScrollButton';

import CardGroup from 'react-bootstrap/CardGroup';


import eileen_persona from './images/eileen-persona.jpeg';
import larry_persona from './images/larry-persona.jpeg';
import storyboard from './images/storyboard.png';
import elevator_interface from './images/interface.jpeg';
import personas_png from './images/personas-png.png';





  




function Work(props) {


    function ModalNavbar() {
      return (
        <>
          {['md'].map((expand) => (
                <Navbar id="modal-navbar" key={expand}  bg="light" expand={expand} className="mb-3" sticky='top' >
                    <Container className='justify-content-end' id='modal-nav-container'>
                        {/* <Navbar.Brand href="#">tiredcoder714</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav  
                            // activeKey={active}
                            // onSelect={(selectedKey) => setActive(selectedKey)}
                            className="justify-content-center flex-grow-1 pe-3">
                                <Nav.Link className="nav-link"  href="#context">Context</Nav.Link>
                                <Nav.Link className="nav-link"  href="#research">Research</Nav.Link>
                                <Nav.Link className="nav-link"  href="#design-iterations">Design Iterations</Nav.Link>
                                <Nav.Link className="nav-link" href="#conclusion">Conclusion</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
          ))} 
        </>
      );
    }

  


    


    function userTestAnalysis() {
        return (
            <div>
            <CardGroup className='mb-5'>
                <Card>
                    {/* <Card.Img variant="top"/> */}
                    <Card.Body>
                        <Card.Title className='card-title'>Questions</Card.Title>
                        <Card.Text className='card-text'>
                            <p className='mt-3'>

                                <li>Have you swiped up to another floor using this elevator? </li>
                                <li>How do you interact with the card reader?  </li> 
                                <li>After swiping your card, what do you look for to know it went through? </li>
                                <li>How do you know if the swipe fails?  </li>
                                <li>If the swipe fails, what do you do? </li>
                                <li>Design your ideal interface for authentication in this elevator. </li>
                            </p>
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer> */}
                </Card>
                <Card>
                    {/* <Card.Img variant="top" /> */}
                    <Card.Body>
                    <Card.Title className='card-title'>General Responses</Card.Title>
                    <Card.Text className='card-text'>
                                <div className='mt-3'>
                                    <li>Some users forget whether or not you have to swipe or click the button first.</li>
                                    <li>Most people end up continually swiping and pressing until it works.</li>
                                    <li>It’s annoying that the main way of knowing the authentication is successful is the lit up button, because the button always lights up when you press it, only to fade to black again if it was unsuccessful. During that time, the user believes that they successfully swiped it through, only for it to fail.</li>
                                    <li>There should be another way of authentication, with a tap based system, rather than swiping, or more identifications on how to operate and understand the system. </li>
                                    <li>Should give access to all CS students for the elevators; it’s annoying for both TAs and students. </li>
                                </div>
                    </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer> */}
                </Card>
                <Card>
                    {/* <Card.Img variant="top"  /> */}
                    <Card.Body>
                    <Card.Title className='card-title'>Observations</Card.Title>
                    <Card.Text className='card-text'>
                        <div className='mt-3'>
                            <li>For new users, it’s difficult to figure out how to use the system for the first time, as there are no clear directions or symbols. </li>
                            <li>For experienced users, the way to interact with the system is still troublesome. It’s not intuitive and requires users to think and remember how they used it in the past, usually still requiring multiple attempts.</li>
                            <li>Although there is a beeping noise along with combinations of red and green lights, these two combined don’t convey enough information for the user to comfortably understand their interaction with the system.</li>
                            <li>Because of this, users wait and rely on other factors such as the white light on the floor button, direction arrow on top of the door, and feeling whether or not they are physically going up to understand the results of their actions.   </li>
                        </div>
                    
                    </Card.Text>
                    </Card.Body>
                 
                </Card>
            </CardGroup>
        
            </div>
        )
    }

    
    var backgroundColor = '#457b9d'
    

    return (
        <>   
            <Modal className='modal' 
                
                show={props.showPersonas} 
           
                 onHide={() => props.setShowPersonas(false)}>
              <Modal.Header className='modal-header' closeButton >
                <Modal.Title className='modal-title'>
                    <a className='modal-brand' href="#modal-home">
                        Personas and Storyboarding
                    </a>
                </Modal.Title>
                {ModalNavbar()}
              </Modal.Header>

              {/* <ScrollButton/> */}

              

              {/* <Modal.Body className='modal-body'> */}

                <div id='modal-home' className='p-5'>
                    {/* style={{ backgroundImage: `url(https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`, height: "100vh"}}> */}
                    <div className='mask' style={{ backgroundColor: backgroundColor, height:"100vh"}}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div id='textBox' className='text-white'>
                                <div className='row'>
                                    <div className='col koala-header-text' >
                                        <h1 style={{marginBottom: '2rem'}} className='display-1'>Personas and Storyboarding</h1>
                                        <h4 className='mb-3'>Created User Personas and tracked a User Journey for interacting with an elevator interface</h4>
                                    </div>
                                    <div className='col'>
                                        <img src={personas_png} style={{width: '30rem'}}></img>
                                    </div>
                                </div>
                                {/* <h5 className='mb-3'>—— studying Computer Science @ Brown</h5> */}
                            </div>
                        </div>
                    </div>
                </div>

              
                < div className='modal-body' id='context' >
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div id='textBox' className='text-black' >
                            <h1  className='display-4 mb-5'>Context</h1>
                            <div className='row '>
                                <div className='col two-col'>
                                    <h2 className='mb-3 '>Overview </h2>
                                    <h5 className='mb-3'> This project is creating personas and storyboarding based on observing real users interacting with an interface (the CIT Elevator).
                                     I’ve interviewed individuals and observed their interactions with the interface. Additionally, I created personas based on these users,
                                      and created a storyboard for one of my personas. Overall, I came out with important insights on the design and user experience of the CIT Elevator.</h5>
                                </div>
                                <div className='col two-col'>
                                    <h2 className='mb-3'>The CIT Elevator </h2>
                                    <h5 className='mb-3'> This interface is the authentication interface for swiping up and down the Brown University's Center of Information Technology (CIT) Elevator.
                                     Usually, only Computer Science TAs have swipe access to 
                                    floors 3 and above. However, it’s not always intuitive on how to properly use this interface. To correctly authenticate and select the floor, one must
                                     first swipe their ID (with the magnetic strip pointing left), then push the button. To confirm that the card was swiped in the correct direction, the 
                                     red light will turn green for a second, then back to red. To confirm that the correct floor was chosen and authenticated, the light on the button will
                                      stay lit.</h5>
                                </div>
                            </div> 
                            <div className='d-flex justify-content-center align-items-center mt-5 '>

                                <Figure>
                                    <Figure.Image className='sketch' src={elevator_interface} id='elevator_interface' />
                                    <Figure.Caption className='sketch-text'>The CIT Elevator's Interface</Figure.Caption>
                                </Figure>
                            </div>

                        </div>

                    </div>
                </div>
                < div className='modal-body' id='research' style={{ backgroundColor: backgroundColor}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div id='textBox' className='text-white'>
                      
                            <h1 className='mb-3 mt-5'>User Testing and Analysis</h1>
                            <h6 className='mb-5'>To properly understand the interface, I interviewed users by combining my observations and asking about the most common issues</h6>
 
                            {userTestAnalysis()}
                        </div>
                    </div>
                </div>
                < div className='modal-body' id='design-iterations' >
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div id='textBox' className='text-black'>
                            <h1 className='display-4 mb-5'>Design Iterations</h1>
                            <h2 className='mb-3 '>User Personas and Empathy Maps </h2>
                            <h5 className='mb-3'>Here, I created a persona based on overarching trends amongst the users I interviewed. I did this by creating a four-quadrant empathy map, describing what users think, feel, say, and do
                            for one archetypal character that represents part of the spectrum of users I observerd</h5>


                            <div className='d-flex justify-content-center align-items-center mt-5 '>
                                <Figure className='p-5'>
                                    <Figure.Image className='sketch' src={larry_persona} id='persona'/>
                                    <Figure.Caption className='sketch-text'>Late Larry</Figure.Caption>
                                </Figure>
                                <Figure className= 'p-5'>
                                    <Figure.Image className='sketch' src={eileen_persona} id='persona' />
                                    <Figure.Caption className='sketch-text'>Experienced Eileen</Figure.Caption>
                                </Figure>
                                
                            </div>

                            <h2 className='mb-3 mt-5'>Storyboard</h2>
                            <h5 className='mb-3'> Here, I created a storyboard for one of my personas: Late Larry. I emphasized presenting authenticity, emotion, and spimplicity. For the persona's user journey, I aimed to reflect the goals and include 
                            all the necessary steps for using the interface. </h5>

                            <div className='d-flex justify-content-center align-items-center mt-5 '>

                                <Figure>
                                    <Figure.Image className='sketch' src={storyboard} id='storyboard'/>

                                </Figure>
                            </div>

                            


                        </div>
                    </div>
                </div>
                < div className='modal-body' id='conclusion' style={{ backgroundColor: backgroundColor}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div id='textBox' className='text-white'>
                            <h1 className='display-4 mb-5'>Conclusion</h1>
                            <h5 className='mb-3'> This project of creating personas and storyboarding was one of the most crucial steps for understanding how users interact with interfaces. 
                            The interviews forced me to think critically about interaction and how to gracefully get to a user's unknown habits and intuitions, along with their preferences and dislikes. 
                            This process, as a whole, allowed me to appreciate good design, and glean a more critical eye for intuitive and clean design as opposed to clunky and conufusin UI. Overall, 
                            this process allowed me to exercise a designer's mindset. 
                            </h5>
                            
                        </div>
                    </div>
                </div>
            </Modal>
          </>
        
    )
}

export default Work;