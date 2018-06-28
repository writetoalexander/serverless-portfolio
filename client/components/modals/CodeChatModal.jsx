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
  max-width: 85%;
  max-height: 85%;
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
        
        <MarinerImage src={props.chillData[3].webContentLink}>
        </MarinerImage>
      </ModalContainer>
    </div>  
  ) :
  (
    null    
  )
);

export default Modal;




