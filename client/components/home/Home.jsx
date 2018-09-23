import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import descriptions from '../../../descriptions/descriptions.js';


  
    
const HomeContainer = styled.div`
      
`;

const ProfilePic = styled.img`
  display: block;
  height: 300px;
  width: auto;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right auto;
      
`


const InfoContainer = styled.div`
  display: grid;
  grid-template-areas: "aboutMeContainer"
                       "skillListContainer"; 
  @media (min-width: 40rem) {
    grid-template-areas: 30% 30% [col-3-start] 30%;
  } 
`

const AboutContainer = styled.div`
  grid-area: aboutMeContainer;
  display: flex;
  flex-direction: column;
   @media (min-width: 40rem) {
    grid-column-start: 1;
    grid-column-end: 2;
  }

`
    
const AboutMeTitle = styled.h1`
  align-self: row-start;
  font-family: Open Sans;
  color: #4f4f4f;
  margin: 0;
`

const AboutMeDescription = styled.p`
  margin-top: 0.5rem;
  margin-left: 3px;
  font-family: Open Sans;
  color: #4f4f4f;
`

const SkillContainer = styled.div`
  grid-area: skillListContainer;
  display: flex;
  flex-direction: column;
  @media (min-width: 40rem) {
    grid-column-start: 3;
    grid-row-start: 1;
    margin-top: 0;
    margin-left: 1rem;
  }
`



const Skills = styled.li`
  display: inline;
  padding: 2%;
  padding-left: 0;
  padding-top: 0;
  color: #4f4f4f;
`
const SkillTitle = styled.h1`
  font-family: Open Sans;
  color: #4f4f4f;
  margin-bottom: 0;
  @media(min-width: 40rem) {
    margin-top: 0;
    align-self: center;
  }

`

const SkillList = styled.ul`
  padding-left: 0;
  margin-left: 0;
  margin-top: 0.5rem;
  list-style-type: none;
  font-family: Open Sans;
`


const Name = styled.h2`
  display: block;
  margin-bottom: 0%;
  font-family: Open Sans;
  color: #4f4f4f;
`

const Title = styled.h3`
  display: block;
  margin-top: 0%;
  font-family: Open Sans;
  color: #4f4f4f;
`

    
const Home = (props) => {
  if (props.chillData.length > 1) {
    return (
    <HomeContainer>

      <Name>Alex Boerschinger</Name>
      <Title>Software Engineer</Title>
      <ProfilePic src={props.chillData[2].webContentLink}/>
      <InfoContainer>
        <AboutContainer>
          <AboutMeTitle>About Me</AboutMeTitle>
          <AboutMeDescription>{descriptions.aboutMe}</AboutMeDescription>

        </AboutContainer>
        <SkillContainer>
          <SkillTitle>Skills</SkillTitle>  
          <SkillList>
            <Skills>JavaScript </Skills>
            <Skills>React </Skills>
            <Skills>Redux </Skills>
            <Skills>Node.js </Skills>
            <Skills>Webpack </Skills>
            <Skills>MOCHA </Skills>
            <Skills>HTML </Skills>
            <Skills>CSS </Skills>
            <Skills>AWS </Skills>
            <Skills>(EC2, </Skills>
            <Skills>S3, </Skills>
            <Skills>Lambda, </Skills>
            <Skills>API Gateway) </Skills>

               
          </SkillList>
        </SkillContainer>
      </InfoContainer>
    </HomeContainer>
  )
  } else {
    return null;
  }
  

}

export default Home;
