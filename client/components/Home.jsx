import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
//import Profile from '../homePhotos/Alex_Profile_Shape.png';
import descriptions from '../../descriptions/descriptions.js';


  
    
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
  grid-template-columns: 60% 40%;
  gap: 1em;
  margin-left: 10%;
  margin-right: 10%;
`

    

const SkillList = styled.ul`
  max-width: 30% {
    .flex-grid {
      display: flex;
    }
  }
  margin-top: 1%;
  list-style-type: none;
  font-family: Open Sans;

`

const Skills = styled.li`
  display: inline-block;
  padding: 4%;
  color: #4f4f4f;
`
const SkillTitle = styled.h1`
  display: inline;
  margin-right: 60%;
  margin-left: 40%;
  font-family: Open Sans;
  color: #4f4f4f;
`

const AboutMeTitle = styled.h1`
  display: inline;
  font-family: Open Sans;
  color: #4f4f4f;
`

const AboutMeDescription = styled.p`
  font-family: Open Sans;
  color: #4f4f4f;
`
const Name = styled.h2`
  display: block;
  margin-left: 10%;
  margin-bottom: 0%;
  font-family: Open Sans;
  color: #4f4f4f;

`

const Title = styled.h3`
  display: block;
  margin-left: 10%;
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
      <ProfilePic src={props.chillData[0].webContentLink}/>
      <InfoContainer>
        <div>
          <AboutMeTitle>About Me</AboutMeTitle>
          <AboutMeDescription>{descriptions.aboutMe}</AboutMeDescription>

        </div>
        <div>
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
        </div>
      </InfoContainer>
    </HomeContainer>
  )
  } else {
    return null;
  }
  

}

export default Home;

   
  

