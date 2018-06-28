import React from 'react';
import Backdrop from '../backdrop/Backdrop.jsx';
import styled from 'styled-components';


const ModalContainer = styled.div`
  position: fixed; 
  height: 85%;
  width: 80%;
  margin-top: -5%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 105px;
  border-radius: 5px;
  background-color: white;
  z-index: 500;
  transition: all 0.3s ease-out;
  -webkit-user-drag: element;
`

const MarinerImage = styled.img`
  position: absolute;
  max-width: 80%;
  max-height: 85%;
  margin-top: 40px;
  margin-left: 10%;
  margin-right 65%;
  left: 0;
  right: 0;
`
const Next = styled.a`
  display: inline;
  font-family: Open Sans;
  &:hover {
    cursor: pointer;
  }
`

const ToggleContainer = styled.div`
  display: flex;
  height: 20px;
  flex-direction: row-reverse;
  background-color: lightblue;
  padding-right: 3%;
  a{
    padding-right: 2%;
    color: #4f4f4f;
    text-decoration: none;
   }
  font-family: Open Sans;  
`

const Prev = styled.a`
  display: inline;
  font-family: Open Sans;
  &:hover {
    cursor: pointer;
  }
` 






 

const Modal = (props) => {
  const Graph = props.chillData[14].webContentLink;
  const HighLevel = props.chillData[8].webContentLink;
  const Diagram = props.chillData[6].webContentLink;
  const images = [Graph, HighLevel, Diagram];

  return ( 
    props.isVisible ? (
      <div>
        <Backdrop clicked={props.dismissModalHandler} isVisible={props.isVisible} />
        <ModalContainer
          style={{
            opacity: props.isVisible ? '1' : '0'
          }}>
          <ToggleContainer>       
            <Next onClick={() => {props.increaseImageTracker()}}>Next</Next>
            <Prev onClick={() => {props.decreaseImageTracker()}}>Prev</Prev>
          </ToggleContainer>  
          <MarinerImage src={images[props.imageTracker]}>
          </MarinerImage>
        </ModalContainer>
      </div>  
    ) :
    (
      null    
    )
  )
  
};

export default Modal;