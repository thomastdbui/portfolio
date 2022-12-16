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

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import koalaGif from './images/koala-sm.gif';
import kelly1 from './sketches-gallery/kelly1.png';
import kelly2 from './sketches-gallery/kelly2.png';
import kelly3 from './sketches-gallery/kelly3.png';
import rachel1 from './sketches-gallery/rachel1.png';
import rachel2 from './sketches-gallery/rachel2.png';
import rachel3 from './sketches-gallery/rachel3.png';
import sean1 from './sketches-gallery/sean1.png';
import sean2 from './sketches-gallery/sean2.png';
import sean3 from './sketches-gallery/sean3.png';
import thomas1 from './sketches-gallery/thomas1.jpeg';
import thomas2 from './sketches-gallery/thomas2.jpeg';
import thomas3 from './sketches-gallery/thomas3.jpeg';
import studentsLogin from './low-fi-gallery/students-login.png';
import studentPOV from './low-fi-gallery/student-pov.png';
import tutorStudentPOV from './low-fi-gallery/tutor-student-pov.png';
import parentDashboard from './low-fi-gallery/parent-dashboard.png';
import parentSearchTutors from './low-fi-gallery/parent-search-tutors.png';
import parentBilling from './low-fi-gallery/parent-billing.png';
import tutorDashboard from './low-fi-gallery/tutor-dashboard.jpeg';
import tutorGames from './low-fi-gallery/tutor-games.png';
import tutorStudents from './low-fi-gallery/tutor-students.png';
import tutorSchedule from './low-fi-gallery/tutor-schedule.png';
import userVid1 from './images/UserTesting-4340258A.mp4';
import userVid2 from './images/UserTesting-4340258B.mp4';
import userVid3 from './images/UserTesting-4340258C.mp4';
import koko_logo from './images/koko-logo.jpg';


// import modal1;

import hifiDesktopNotes from './images/wireframes/hi-fi-desktop-notes.png';
import hifiDesktopTablet from './images/wireframes/hi-fi-desktop-tablet.png';
import hifiMobileNotes from './images/wireframes/hi-fi-mobile-notes.png';
import hifiTabletNotes from './images/wireframes/hi-fi-tablet-notes.png';
import hifiMobile from './images/wireframes/hi-fi-mobile.png';
import lofiMobile from './images/wireframes/lo-fi-mobile.png';

import lofiDesktop from './images/wireframes/lo-fi-desktop.png';
import lofiTablet from './images/wireframes/lo-fi-tablet.png';
import stylesSheet from './images/wireframes/styles-sheet.png';





  




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

  


    

   

    function LoFiSketches() {
        return (
          <Accordion alwaysOpen>
              
            <Accordion.Item eventKey="1">
              <Accordion.Header>Desktop</Accordion.Header>
              <Accordion.Body>
                  <div className='md-flex'>
                      <Figure>
                          <Figure.Image className='sketch' src={lofiDesktop}/>
                      </Figure>
                  </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Tablet</Accordion.Header>
              <Accordion.Body>
                  <div className='md-flex'>


                      <Figure>
                          <Figure.Image className='sketch' src={lofiTablet}/>

                      </Figure>
                      
                  </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Mobile</Accordion.Header>
              <Accordion.Body>
                  <div className='md-flex'>
                      <Figure>
                          <Figure.Image className='sketch' src={lofiMobile}/>
                      </Figure>
                     
                  </div>
              </Accordion.Body>
            </Accordion.Item>
        
            
          </Accordion>
        );
      }

    function HiFi() {
        return (
            <div>

            
            


            <Accordion alwaysOpen>
                        
                <Accordion.Item eventKey="1">
                <Accordion.Header>Desktop</Accordion.Header>
                <Accordion.Body>
                    <div className='md-flex'>
                        <Figure>
                            <Figure.Image className='sketch' src={hifiDesktopTablet}/>
                        </Figure>
                        <Figure>
                            <Figure.Image className='sketch' src={hifiDesktopNotes}/>
                        </Figure>
                    </div>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                <Accordion.Header>Tablet</Accordion.Header>
                <Accordion.Body>
                    <div className='md-flex'>
                        <Figure>
                            <Figure.Image className='sketch' src={hifiDesktopTablet}/>
                        </Figure>
                        <Figure>
                            <Figure.Image className='sketch' src={hifiTabletNotes}/>
                        </Figure>
                        
                    </div>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                <Accordion.Header>Mobile</Accordion.Header>
                <Accordion.Body>
                    <div className='md-flex'>
                        <Figure>
                            <Figure.Image className='sketch' src={hifiMobile}/>
                        </Figure>
                        <Figure>
                            <Figure.Image className='sketch' src={hifiMobileNotes}/>
                        </Figure>
                        
                    </div>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                <Accordion.Header>Styles Sheet</Accordion.Header>
                <Accordion.Body>
                    <div className='md-flex'>
                        <Figure>
                            <Figure.Image className='sketch' src={stylesSheet}/>
                        </Figure>
                                             
                    </div>
                </Accordion.Body>
                </Accordion.Item>


            </Accordion>
            </div>
        )
    }

   
    var background_color = '#c75146'
    

    return (
        <>   
            <Modal className='modal' 
                
                show={props.showKoKo} 
           
                 onHide={() => props.setShowKoKo(false)}>
              <Modal.Header className='modal-header' closeButton >
                <Modal.Title className='modal-title'>
                    <a className='modal-brand' href="#modal-home">
                        KoKo Chicken
                    </a>
                </Modal.Title>
                {ModalNavbar()}
              </Modal.Header>

              {/* <ScrollButton/> */}

              

              {/* <Modal.Body className='modal-body'> */}

                <div id='modal-home' className='p-5'>
                    {/* style={{ backgroundImage: `url(https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`, height: "100vh"}}> */}
                    <div className='mask' style={{ backgroundColor: background_color, height:"100vh"}}>
                        <div  className='d-flex justify-content-center align-items-center h-100'>
                            <div id='textBox' className='text-white'>
                                <div className='row'>
                                    <div className='col koala-header-text' >
                                        <h1 style={{marginBottom: '2rem'}} className='display-1'>KoKo Chicken</h1>
                                        <h4 className='mb-3'>Responsively-Redesigned a website for a hometown Korean fried chicken restaurant</h4>
                                    </div>
                                    <div className='col'>
                                        <img id="koko-logo" src={koko_logo} style={{width: '20rem', height: '20rem'}}></img>
                                    </div>
                                </div>
                                {/* <h5 className='mb-3'>—— studying Computer Science @ Brown</h5> */}
                            </div>
                        </div>
                    </div>
                </div>

              
                < div className='modal-body' id='context' >
                    <div id = 'modal-body-content' className='d-flex justify-content-center align-items-center h-100'>
                        <div id='textBox' className='text-black' >
                            <h1  className='display-4 mb-5'>Context</h1>
                            <div className='row '>
                                <div className='col two-col'>
                                    <h2 className='mb-3 '>Overview </h2>
                                    <h5 className='mb-3'> 
                                    This project allowed me to better understand usability, interface design, and guiding users by analyzing
                                     a selected website, then redesigning and rebuilding this version of the page. The website I selected was 
                                     a local restaurant near my home called KoKo Chicken and BBQ. As a hungry customer one night, I tried to view 
                                     the menu and place an order on this website, but was left clueless and confused about how to go about my task.
                                      The following sections detail my procedure: analyzing the usability, creating lo-fi and hi-fi prototypes,
                                       then implementing the redesign.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                < div className='modal-body' id='research' style={{ backgroundColor: background_color}}>
                    <div id = 'modal-body-content' className='d-flex justify-content-center align-items-center h-100'>
                        <div id='textBox' className='text-white'>
                            <h1 className='display-4 mb-5'>Research</h1>
                            <div className='pt-5 pb-5'>
                                <h1>Iniitial Usability Issues</h1>
                                <Container className='mt-5 mb-5 '>
                                    <Row>
                                        <Col>
                                            <h4 className='mb-3'>Minimal Images and Confusing Menu</h4>
                                            <h7 className='mb-3'>When first interacting with the website, there are no images on what the dishes they serve are, except until the very end. 
                                                As a user, we look for images to see, to gauge our options on the menu. Even more, there was no easy way to acess the menu, 
                                                lost in a complicated amount of buttons and information.
                                            </h7>
                                        </Col>
                                        <Col>
                                            <h4 className='mb-3'>Too Much Information</h4>
                                            <h7 className='mb-3'>The theme of this website seemed to be maximalism. The more information the better. Rather than guiding users,
                                                all the possible information was given straight to them, with no guidance or a roadmap. There was no clear organization to differentiate the three 
                                                different locations. 
                                            </h7>
                                        </Col>
                                        <Col>
                                            <h4 className='mb-3'>Awkward Yelp Section</h4>
                                            <h7 className='mb-3'>A huge part of the website were the yelp reviews which took up a vast portion of the screen real estate.
                                                Worse, they combined all three locations and their reviews, with no clear organization once again. Even more, most users would find
                                                this website from Yelp. Then most have already read reviews, and don't need to be overwhelmed again. 
                                            </h7>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            
                            <h1 className='mt-5 '>Accessibility Tests and Findings</h1>
                            <Container className='mt-5 mb-5'>

                                <Row>
                                    <Col>
                                        <h4 className='mb-3'>Missing Alternative Text</h4>
                                        <h7 className='mb-3'>There were 21 instances of missing alternative text. Thus, a screen reader would not be able to view them. This is an easy fix:
                            adding the alt section for images and buttons. 
                                        </h7>
                                    </Col>
                                    <Col>
                                        <h4 className='mb-3'>Very Low Contrast</h4>
                                        <h7 className='mb-3'>There were 48 errors related to things displayed having very low contrast. This would 
                            be a relatively easy fix: using darker fonts, with lighter backgrounds and vice versa. 
                                        </h7>
                                    </Col>
                                    <Col>
                                        <h4 className='mb-3'>Accesibility Menu!</h4>
                                        <h7 className='mb-3'>Interestingly, there is a blue button on the side that is allows for accesibility customization. Here, the font size, contrast, 
                            and other features are allowed to be adjusted, although not perfectly. Overall a great addition, it's just that it's best features are not present
                            upon opening the page. 
                                        </h7>
                                    </Col>
                                </Row>
                            </Container>
                           
                        </div>
                    </div>
                </div>
                < div className='modal-body' id='design-iterations' >
                    <div id = 'modal-body-content' className='d-flex justify-content-center align-items-center h-100'>
                        <div id='textBox' className='text-black'>
                            <h1 className='display-4 mb-5'>Design Iterations</h1>
                            <h2 className='mb-3 '>Low-Fidelity Sketches </h2>
                            <h5 className='mb-3'>Here's the Lo-Fidelity Wireframes, with annotations marked in yellow.
                            </h5>

                            {LoFiSketches()}
                            <h2 className='mb-3 mt-5'>High-Fidelity Sketches </h2>
                            <h5 className='mb-3'> Here's the Hi-Fidelity Wireframes, with annotations matched with the blue numbers. </h5>
                            {HiFi()}
                        
                        </div>
                    </div>
                </div>
                < div id = 'modal-body-content' className='modal-body' id='conclusion' style={{ backgroundColor: background_color}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div id='textBox' className='text-white'>
                            <h1 className='display-4 mb-5'>Conclusion</h1>

                            <h5 className='mb-3'> Finally, I redesigned my website 
                                using HTML, CSS, and Bootstrap. Desktop and Tablet view are relatively the same, just scaled down for Tablet. 
                                However, on Mobile view, the top nav bar is condensed into a hamburger menu that expands when you click on it. Furthermore, the Order
                                Online and Menu buttons have drop-downs allowing users to choose the location. Here's the websites. 
                            </h5>
                            <div className="d-grid gap-2  p-5">
                                <Button rounded className="mb-3"variant="light" href="https://www.kokochickenbbq.com/" target="_blank">See the Old Website</Button>{' '}
                                <Button variant="light" href="https://tiredcoder714.github.io/koko-responsive-redesign-uiux/" target="_blank">See the Redesigned One!</Button>{' '}
                                
                            </div>
                            <h5 className='mb-3'>
                               This was one of the first times I had ever used HTML, CSS, and the very first time I used Bootstrap. This project allowed me to exercise these skills
                                and create an entire website from scratch. Additionally, this project allowed me to practice prototyping: from making lo-fidelity wireframes to a high-fi prototype. 
                                Additionally, I learned a plethora of good design principles were emphasized: contrast, styles sheets, accessibility, etc. 
                            </h5>
                            
                        </div>
                    </div>
                </div>
            </Modal>
          </>
        
    )
}

export default Work;