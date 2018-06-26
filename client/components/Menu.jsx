import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LinkedIn from './assets/linkedIn.png'

export default class Menu extends React.Component {
  render() {
    const MenuContainer = styled.div`
      display: flex;
      height: 80px;
      flex-direction: row-reverse;
      background-color: lightblue;
      padding-right: 3%;
      a{
        padding-right: 2%;
        color: black;
        text-decoration: none;
      }
      font-family: Open Sans;
    `;

    const LinkedInButton = styled.img`
      position: absolute;
      max-width: 100%;
      max-height: 100%;
      
      margin-left: 10%;
      margin-right 65%;
      left: 0;
      right: 0;


      
    `

    const LinkContainer = styled.a`
      position: absolute; 
      height: 5%;
      width: 5%;
      margin-top: 2%;
      margin-left: 3%;
      left: 0;
      right: 0;
      border-radius: 5px;
       

    `
    const NavLinkContainer = styled.div`
      margin-top: 2%;
      padding-right: 2%;

    `


    return (
      <MenuContainer>
        <NavLinkContainer>
          <NavLink to='/contact'>contact</NavLink>
        </NavLinkContainer>  
        <NavLinkContainer>
          <NavLink to='/portfolio'>portfolio</NavLink>
        </NavLinkContainer>
        <NavLinkContainer>
          <NavLink to='/'>home</NavLink>
        </NavLinkContainer> 
        <LinkContainer href={'https://www.linkedin.com/in/alex-boerschinger/'}>
          <LinkedInButton src={LinkedIn}></LinkedInButton>
        </LinkContainer>
      </MenuContainer>
    )
  }
}
