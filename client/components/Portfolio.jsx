import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import descriptions from '../../descriptions/descriptions.js'
import MarinerModal from './modals/MarinerModal.jsx'

const Backdrop = styled.div`
  background-color: #D1D1D1;
`


const Title = styled.div`
  font-family: Open Sans;
  font-size: 150%;
  font-weight: 600;
  margin-left: 7%;
`

const Project = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  margin-bottom: 1em;

`

const Logo = styled.img`
  
  
`
const Description =styled.p`
  margin-top: initial;
  font-family: Open Sans;
`


const Portfolio = (props) => {
  console.log('props is ', props)
  return (
    <div>
      <MarinerModal 
        chillData={props.chillData} 
        isVisible={props.showMarinerModal} 
        dismissModalHandler={props.dismissModalHandler} 
        increaseImageTracker={props.increaseImageTracker}
        decreaseImageTracker={props.decreaseImageTracker}
        imageTracker={props.imageTracker}/>
      <Backdrop dismissModal={props.dismissModalHandler}>
          <Title>Mariner</Title> 
          <Project>             
              <Logo src={props.chillData[3].thumbnailLink} onClick={props.renderMarinerModal}></Logo>
              <Description>{descriptions.mariner}</Description>         
          </Project>
        
          <Title>Code Chat</Title>
          <Project>
            <Logo src={props.chillData[4].thumbnailLink}></Logo>
            <Description>{descriptions.codeChat}</Description>
          </Project>
          <Title>Brew Hop</Title>        
          <Project>
            <Logo src={props.chillData[2].thumbnailLink}></Logo>
            <Description>{descriptions.brewHop}</Description>
          </Project>      
      </Backdrop>
    </div>

  )
  
}

export default Portfolio

