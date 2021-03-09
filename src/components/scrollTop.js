import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import styled from 'styled-components';

const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <ToTopArrow>
      <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
    </ToTopArrow>
  );
}

const ToTopArrow = styled.div`
  .scrollTop {
    position: fixed; 
    width: auto;
    bottom: 20px;
    left: 15px;
    align-items: center;
    height: 20px;
    justify-content: center;
    z-index: 1000;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    opacity: 0.5;
  }
  
  .scrollTop:hover{
    opacity: 1;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export default ScrollArrow;