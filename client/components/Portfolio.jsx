import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import descriptions from '../../descriptions/descriptions.js';
import MarinerModal from './modals/MarinerModal.jsx';
import CodeChatModal from './modals/CodeChatModal.jsx';
import BrewHopModal from './modals/BrewHopModal.jsx';

const Backdrop = styled.div`
  
`


const Title = styled.h1`
  display: inline-block;
  font-family: Open Sans;
  font-size: 150%;
  font-weight: 600;
  margin-left: 50%;
  margin-right: 50%;
  white-space: nowrap;
`

const Project = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  margin-bottom: 1em;
  margin-top: 1em;

`

const Logo = styled.img`
  display: inline;  
  
`
const Description =styled.p`
  display: inline;
  margin-top: 1em;
  font-family: Open Sans;
  color: #4f4f4f;
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
      <CodeChatModal
        isVisible={props.showCodeChatModal}
        dismissModalHandler={props.dismissModalHandler}
      />
      <BrewHopModal
        isVisible={props.showBrewHopModal}
        dismissModalHandler={props.dismissModalHandler}  
      />  

      <Backdrop dismissModal={props.dismissModalHandler}>
          <Project>
              <div>             
                <Logo src={props.chillData[0].thumbnailLink} onClick={props.renderMarinerModal}></Logo>
              </div>
              <div>  
                <Description>{descriptions.mariner}</Description>
              </div>           
          </Project>
      
          <Project>
            <Logo src={props.chillData[1].thumbnailLink} onClick={props.renderCodeChatModal}></Logo>
            <Description>{descriptions.codeChat}</Description>
          </Project>    
          <Project>
            <Logo src={props.chillData[2].thumbnailLink} onClick={props.renderBrewHopModal}></Logo>
            <Description>{descriptions.brewHop}</Description>
          </Project>      
      </Backdrop>
    </div>

  )
  
}

export default Portfolio

