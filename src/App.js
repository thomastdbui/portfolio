import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Marquee from "react-fast-marquee";
import Koala from './Koala'
import KoKo from './KoKo'
import Personas from './Personas'
import Consume from './Consume'
import ScrollButton from './ScrollButton';
import Image from 'react-bootstrap/Image';




// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Card } from 'react-bootstrap';



import koalaGif from './images/koala-sm.gif';
import friedChicken from './images/fried-chicken.jpeg';
import blueroom from './images/blueroom.jpeg';
import personas from './images/personas.png';
import Headshot from './images/Headshot.jpg'



  







function MyNavbar() {
    // const [active, setActive] = useState('home');


  return (
    <>
      {['md'].map((expand) => (
          
        // <div id='entireNav'>
            <Navbar id="navbar" key={expand}  bg="light" expand={expand} className="mb-3" fixed='top' >
                <Container>
                    <Navbar.Brand  href="#">
                        <div className='boujee-text-dark'>
                            Thomas Bui
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Thomas Bui
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>         
                        <Nav  
                        // activeKey={active}
                        // onSelect={(selectedKey) => setActive(selectedKey)}
                        className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link class="nav-link boujee-text-dark"  href="#about">
                                    About
                                {/* </div> */}
                                </Nav.Link>
                            <Nav.Link class="nav-link boujee-text-dark"  href="#work">
                                {/* <div className='boujee-text-dark'> */}
                                    Work
                                {/* </div> */}
                            </Nav.Link>
                            <Nav.Link class="nav-link boujee-text-dark" href="#contact">
                                {/* <div className='boujee-text-dark'> */}
                                    Contact
                                {/* </div> */}
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
              
        // </div>
        
      ))}
        
    </>
  );
}






function App(props) {

    // const [currPage, setCurrPage] = useState("Home");
    const [showKoala, setShowKoala] = useState(false);
    const [showKoKo, setShowKoKo] = useState(false);
    const [showConsume, setShowConsume] = useState(false);
    const [showPersonas, setShowPersonas] = useState(false);


    return (
        <div id="app" className="App" style={{backgroundColor: '#e5e5e5'}}>  
            {MyNavbar()}
            
            <header style={{height: "100vh"}}>
                <div id="home" className='p-5  bg-image'
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`, height: "100vh"}}>
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height:"100vh"}}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='boujee-text-header'>Hi, I'm Thomas! </h1>
                                <h4 className='mb-3'>Passionate about finding creative solutions for social good through technology</h4>
                                <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
            {/* <ScrollButton/> */}
            

        
          
            < div id='about' style={{backgroundColor: '#262626', height: "100vh"}}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div id='textBox' className='text-white'>
                        <h1 className='boujee-text'>About </h1>
                        <div className='about-holder'>
                            <div className='headshot-holder'>
                                <Image className='headshot' src={Headshot} alt="Thomas" roundedCircle />
                            </div>
                            <div className='about-content-holder'>
                                <h5 className='mb-3'>Hi there! I was born and raised in sunny Southern California and currently based in Providence, Rhode Island. I'm a second-year student at Brown University interested in 
                                design and software engineering. 
                                Please don't hesitate to to reach out! </h5>
                                <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            < div id='work' style={{ minHeight: "100vh"}}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div id='textBox' className='text-black'>
                        <h1 className='boujee-text-dark'>Work </h1>
                        <div className="py-5">
                            <div className="row workRow">
                                <div className="col-lg-12 mb-3 mb-lg-0" > 
                                    <a onClick={() => setShowKoala(true)}>
                                        <div className="hover hover-1 text-white rounded" >
                                            <img className='koala-holder' src={koalaGif} alt="Koala"/>
                                            <div className="hover-overlay"></div>
                                            <div className="hover-1-content px-5 py-4" >
                                                <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light">Koala</span></h3>
                                                <p className="hover-1-description font-weight-bold mb-0  ">Iteratively designed an interactive interface for an emerging startup</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>


                            <div className="row workRow">
                                <div className="col-lg-12 mb-3 mb-lg-0" > 
                                    <a onClick={() => setShowKoKo(true)}>
                                        <div className="hover hover-1 text-white rounded" >
                                            <img className='koko-holder' src={friedChicken} alt="KoKo Chicken"/>
                                            <div className="hover-overlay"></div>
                                            <div className="hover-1-content px-5 py-4" >
                                                <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light">KoKo Chicken</span></h3>
                                                <p className="hover-1-description font-weight-light mb-0">Responsively-Redesigned a website for a hometown Korean fried chicken restaurant</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="row workRow">
                                <div className="col-lg-12 mb-3 mb-lg-0" > 
                                    <a onClick={() => setShowConsume(true)}>
                                        <div className="hover hover-1 text-white rounded" ><img src={blueroom} alt="The Blue Room"/>
                                            <div className="hover-overlay"></div>
                                            <div className="hover-1-content px-5 py-4" >
                                                <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light">Consume @ Brown</span></h3>
                                                <p className="hover-1-description font-weight-light mb-0">Developed an interactive interface for choosing your next meal at Brown University</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="row workRow">
                                <div className="col-lg-12 mb-3 mb-lg-0" > 
                                    <a onClick={() => setShowPersonas(true)}>
                                        <div className="hover hover-1 text-white rounded" ><img src={personas} alt="Personas and Storyboarding"/>
                                            <div className="hover-overlay"></div>
                                            <div className="hover-1-content px-5 py-4" >
                                                <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light">Personas and Storyboarding</span></h3>
                                                <p className="hover-1-description font-weight-light mb-0">Created User Personas and tracked a User Journey for interacting with an elevator interface</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* these are modals */}
                        <Koala showKoala = {showKoala} setShowKoala = {setShowKoala}></Koala>
                        <KoKo showKoKo = {showKoKo} setShowKoKo = {setShowKoKo}></KoKo>
                        <Consume showConsume = {showConsume} setShowConsume = {setShowConsume}></Consume>
                        <Personas showPersonas = {showPersonas} setShowPersonas = {setShowPersonas}></Personas>
                        


                    </div>
                </div>
            </div>

            < div id='contact' style={{backgroundColor: '#262626', height: "100vh"}}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div id='textBox' className='text-white'>
                        <h1 className='boujee-text mb-5'>Contact </h1>
                        <div id='contact-box'>
                            <h5 className='mb-3' >Email: </h5>
                            <h5 className='mb-3'>thomas_bui@brown.edu </h5>

                        </div>
                        <div id='contact-box'>
                            <h5 className='mb-3'>Phone Number: </h5>
                            <h5 className='mb-3'>(714) 989-3506</h5>

                        </div>
                        <div id='contact-box'>
                            <h5 className='mb-3'>Linkedin: </h5>
                            <h5 className='mb-3'><a href="https://www.linkedin.com/in/thomastdbui/" target="_blank">thomastdbui</a> </h5>

                        </div>
                        {/* <h5 className='mb-3'>Github: </h5> */}

                    </div>
                </div>
            </div>
            
            
            <div className='marquee-holder' >
                <Marquee className='marquee' pauseOnHover speed='30' gradient={false}>
                   |   Thomas once solved a Rubik's cube in 9 seconds     |   thomas has played piano for over 10 years.   |   Thomas's favorite hobbies are always active ones   |  
                   any time the weather is sunny and above 60 degrees, catch Thomas playing spikeball   |   Thomas played basketball and tennis for his high school team   |  
                   one of Thomas's middle school phase was magic tricks   |   Thomas's pandemic hobby was singing   |   Thomas loves jazz and is learning jazz piano improvisation   |   
                   Thomas is left-handed, but does everything else with his right arm   |   Thomas's favorite song is When I was Your Man by Bruno Mars
                </Marquee> 
            </div>



        </div>
    


    );
}

export default App;

