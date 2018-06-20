import React from 'react';
import Backdrop from '../backdrop/Backdrop.jsx';
import styled from 'styled-components';
import HighLevel from '../assets/highLevel.png';
import Graph from '../assets/saGraph.png';
import codeChat from '../assets/code-chat.png'

const ModalContainer = styled.div`
  position: absolute;
  width: 766px;
  height: 829px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 105px;
  border-radius: 5px;
  background-color: #D2D2D2;
  z-index: 500;
  transition: all 0.3s ease-out;
  -webkit-user-drag: element;
`

const MarinerImage = styled.img`
  position: absolute;
  height: 500px;
  width: 600px;
  margin-top: 40px;
  margin-left: 11%;
  margin-right 65%;
  left: 0;
  right: 0;

`


const Modal = (props) => (
  props.isVisible ? (
    <div>
      <Backdrop clicked={props.dismissModalHandler} isVisible={props.isVisible} />
      <ModalContainer
        style={{
          opacity: props.isVisible ? '1' : '0'
        }}>
        
        <MarinerImage src={codeChat}>
        </MarinerImage>
      </ModalContainer>
    </div>  
  ) :
  (
    null    
  )
);

export default Modal;





