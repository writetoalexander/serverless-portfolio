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
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
`

const Column = styled.div`
  flex: 40%;
  max-width: 45%;
  padding: 1em;
  @ media screen and (max-width: 200px) {
    flex: 90%;
    max-width: 90%;
  }
`

const ColoumnImage = styled.img`
  vertical-align: middle;

  &:hover {
    cursor: pointer;
  }
`

const FirstWord = styled.p`
  margin-top: 1em;
  display: inline;
  font-family: Open Sans;
  font-weight: 700;
  color: #4f4f4f;

  &:hover {
    cursor: pointer;
  }

`

const ColumnDescription = styled.p`
  display:inline;
  font-family: Open Sans;
  color: #4f4f4f;

  &:hover {
    cursor: pointer;
  }

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
            <Column>
                          
              <ColoumnImage src={props.chillData[9].thumbnailLink} onClick={props.renderMarinerModal}></ColoumnImage>
            </Column>  
            
            <Column>
              <FirstWord onClick={props.renderMarinerModal}>{descriptions.marinerFirst}</FirstWord>  
              <ColumnDescription onClick={props.renderMarinerModal}>{descriptions.mariner}</ColumnDescription>
            </Column>          
          </Project>
      
          <Project>
            <Column>
              <ColoumnImage src={props.chillData[10].thumbnailLink} onClick={props.renderCodeChatModal}></ColoumnImage>
            </Column>
            <Column>
               <FirstWord onClick={props.renderCodeChatModal}>{descriptions.codeChatFirst}</FirstWord>   
              <ColumnDescription onClick={props.renderCodeChatModal}>{descriptions.codeChat}</ColumnDescription>
            </Column> 
          </Project>    
          <Project>
            <Column>
              <ColoumnImage src={props.chillData[11].thumbnailLink} onClick={props.renderCodeChatModal}></ColoumnImage>
            </Column>
            <Column>
               <FirstWord onClick={props.renderBrewHopModal}>{descriptions.brewHopFirst}</FirstWord>   
              <ColumnDescription onClick={props.renderBrewHopModal}>{descriptions.brewHop}</ColumnDescription>
            </Column>             
          </Project>      
      </Backdrop>
    </div>

  )
  
}

export default Portfolio

