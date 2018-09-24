import React from 'react';
import styled from 'styled-components';

const Toggle = styled.button`
  width: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
  vertical-align: middle;
  @media (min-width: 40rem) {
    display: none;
  }
`
const ToggleBar = styled.span`
  width: 100%;
  height: 0.2rem;
  background: black;
  display: block;
  margin: 0.6rem 0;
`

const ToggleButton = (props) => {
  console.log('props in ToggleButton ', props)
  return (
  <Toggle onClick={props.renderMobileModal}>
    <ToggleBar/>
    <ToggleBar/>
    <ToggleBar/>
  </Toggle>

  )
 
}

export default ToggleButton;