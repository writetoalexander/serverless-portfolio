import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

export default class Contact extends React.Component {
  render() {
    
    const HomeContainer = styled.div`
      
    `;

    const ContactMe = styled.h1`
      font-faminly: Open Sans;
      color: #4f4f4f;
      margin-left: 2%;
    `

    const ContactGrid = styled.div`
      display: grid;
      grid-template-columns: 30% 70%;
      gap: 1em;
      margin-left: 2%;
      margin-right: 10%;
    `

    const ContactMedium = styled.div`
      font-faminly: Open Sans;
      color: #4f4f4f;


    `
    const ContactAddress = styled.a`
      font-faminly: Open Sans;
      color: #0077b7;
    `

   


    return (
      <HomeContainer>
        <ContactMe>Contact Me</ContactMe>
        <ContactGrid>
          <ContactMedium>Email:</ContactMedium>
          <ContactAddress>writetoalexander@gmail.com</ContactAddress>
          <ContactMedium>Github: </ContactMedium>
          <ContactAddress href={'https://github.com/writetoalexander'}>writetoalexander</ContactAddress>
          <ContactMedium>LinkedIn: </ContactMedium>
          <ContactAddress href={'https://www.linkedin.com/in/alex-boerschinger/'}>alex-boerschinger</ContactAddress>
        </ContactGrid>
      </HomeContainer>
    )
  }
}