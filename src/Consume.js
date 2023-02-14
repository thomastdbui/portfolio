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

// import koalaGif from './images/koala-sm.gif';
import utensils from './images/utensils.png';





  




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
                                <Nav.Link className="nav-link" href="#conclusion">Conclusion</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
          ))} 
        </>
      );
    }

  
    
    var backgroundColor = '#d4a373'
    

    return (
        <>   
            <Modal className='modal' 
                
                show={props.showConsume} 
           
                 onHide={() => props.setShowConsume(false)}>
              <Modal.Header className='modal-header' closeButton >
                <Modal.Title className='modal-title'>
                    <a className='modal-brand' href="#modal-home">
                        Consume @ Brown
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
                                        <h1 style={{marginBottom: '2rem'}} className='display-1'>Consume @ Brown</h1>
                                        <h4 className='mb-3'>Developed an interactive interface for choosing your next meal at Brown University</h4>
                                    </div>
                                    <div className='col'>
                                        <img src={utensils} style={{width: '20rem', height: '20rem'}}></img>
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
                                    <h5 className='mb-3'> Through this project, I learned JavaScript, using React and React Bootstrap. Using react's components and data states, I created a list-based
                                    interface. Essentially, I created an interface to select items out of alist, which aggregates them! In this project, I added filters by location, and type (food or drink). 
                                    Additionally, I added a favorites list, and the ability to sort by satisfaction level (high to low and low to high)</h5>
                                </div>
                                <div className='col two-col'>
                                    <h2 className='mb-3'>Brown's Dining Options </h2>
                                    <h5 className='mb-3'> Brown's dining options are relatively alright. However, there are some things at certain dining halls that are not bad. This list-based interface holds some of the most
                                    iconic meals and drinks (for both good and bad reasons) at all locations on campus.  </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                < div className='modal-body' id='research' style={{ backgroundColor: backgroundColor}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div id='textBox' className='text-white'>
                            <h1 className='display-4 mb-5'>Research</h1>
                            <h1 className='mb-3'>Rating Satisfication Level</h1>
                            <h5 className='mb-3'>The most crucial part of this webapp is the satisfaction level for each item. To create the most accurate and sound
                            ratings for each of these items, the research process is as follows. The bigges and most important step in the research process is something called a 
                            mandatory, overpriced meal plan. Since's it's mandatory, I was forced to make the most use of the money I had already had to spend. From eating nearly all my meals on campus
                            for 1 and a half years, I've developed an accurate pallette to properly rate each consumable. Please do note that the satisfaction levels for these rankings are slightly shifted.
                            In general, only eating dining hall food has lowered my standards a bit. So, then a 10/10 for these rankings are the very best that Brown offers, but not 10/10 food in general. Important note:
                            there is one item in this list that is 100/10———this is actually RISD's dining hall, not Brown's.</h5>


                        </div>
                    </div>
                </div>
              
                < div className='modal-body' id='conclusion' >
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div id='textBox' className='text-black'>
                            <h1 className='display-4 mb-5'>Conclusion</h1>
                            <h5 className='mb-3'> This process of creating a React / JavaScript Webapp taught me the concepts of JS components, along with passing in props, 
                            and states. The ability to create a webapp / website that is able to show different content depending on different states is something I've learned through this project.
                            </h5>
                            <h5 className='mb-3'>
                                Additionally, I was able to exercise usability and design principles to consider layout and hierarchy. 
                            </h5>
                            <h5 className='mb-3'> 
                                Here's my webapp!
                            </h5>
                            <div className="d-grid gap-2  p-5">
                                <Button variant="dark" href="https://thomastdbui.github.io/development-uiux/" target="_blank">Take me to Consume @ Brown!</Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
          </>
        
    )
}

export default Work;