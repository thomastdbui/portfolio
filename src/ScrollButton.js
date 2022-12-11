import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './StylesButton';
// import { Button } from 'react-bootstrap';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500){
      setVisible(true)
    } 
    else if (scrolled <= 500){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (

        <Button  >
        <FaArrowCircleUp className='scrollUpButton' onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} />
        </Button>

  );
}
  
export default ScrollButton;