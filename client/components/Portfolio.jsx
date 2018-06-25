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

// const Project = styled.div`
//   display: grid;
//   grid-template-columns: 30% 70%;
//   margin-bottom: 1em;
//   margin-top: 1em;

// `

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
`

// const Logo = styled.img`
//   display: inline;  
  
// `
const ColumnDescription = styled.p`
 
  margin-top: 1em;
  font-family: Open Sans;
  color: #4f4f4f;
  vertical-align: middle;

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
                          
              <ColoumnImage src={props.chillData[0].thumbnailLink} onClick={props.renderMarinerModal}></ColoumnImage>
            </Column>  
            
            <Column>  
              <ColumnDescription>{descriptions.mariner}</ColumnDescription>
            </Column>          
          </Project>
      
          <Project>
            <Column>
              <ColoumnImage src={props.chillData[1].thumbnailLink} onClick={props.renderCodeChatModal}></ColoumnImage>
            </Column>
            <Column>  
              <ColumnDescription>{descriptions.codeChat}</ColumnDescription>
            </Column> 
          </Project>    
          <Project>
            <Column>
              <ColoumnImage src={props.chillData[2].thumbnailLink} onClick={props.renderCodeChatModal}></ColoumnImage>
            </Column>
            <Column>  
              <ColumnDescription>{descriptions.codeChat}</ColumnDescription>
            </Column>             
          </Project>      
      </Backdrop>
    </div>

  )
  
}

export default Portfolio

