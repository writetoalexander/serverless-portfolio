import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Profile from '../homePhotos/profile.png';
import descriptions from '../../descriptions/descriptions.js';

export default class Home extends React.Component {
  render() {
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
      grid-template-columns: 70% 30%;
      gap: 1em;
      margin-left: 10%;
      margin-right: 10%;
    `

    const DescriptionContainer = styled.div`
      display: inline;   
    `

    const Skills = styled.ul`
      list-style-type: none;
    `

    return (
      <HomeContainer>
        <ProfilePic src={Profile}/>
        <InfoContainer>
          <div>
            <h1>About Me</h1>
            <div>{descriptions.aboutMe}
            </div>

          </div>
          <div>
            <h1>Skills</h1>  
            <Skills>
              <li>Javascript</li>
              <li>React</li>
              <li>Node.js</li>
            </Skills>
          </div>
        </InfoContainer>
      </HomeContainer>
    )
  }
}
