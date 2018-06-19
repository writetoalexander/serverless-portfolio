import React from 'react';
import Backdrop from '../backdrop/Backdrop.jsx';
import styled from 'styled-components';

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
  background-color: #448EB8;
  z-index: 500;
  transition: all 0.3s ease-out;
  -webkit-user-drag: element;
`

const Modal = (props) => (
  props.isVisible ? (
    <div>
      <Backdrop clicked={props.dismissModalHandler} isVisible={props.isVisible} />
      <ModalContainer
        style={{
          opacity: props.isVisible ? '1' : '0'
        }}>
        <img src={props.chillData[0].thumbnailLink}>
        </img>
      </ModalContainer>
    </div>  
  ) :
  (
    null    
  )
);

export default Modal;