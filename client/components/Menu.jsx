import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ToggleButton from './ToggleButton'
import MobileModal from './modals/MobileModal';


  
const props = props || null;

const MenuContainer = styled.div`
  display: flex;
  height: 4rem;
  z-index: 101;
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





const NavLinkContainer = styled.div`
  margin-top: 2%;
  padding-right: 2%;
  @media (max-width: 40rem) {
    display: none;
  }

`


const Menu = (props) => {
  console.log('props is ', props)
  if (props.chillData.length > 1) {
    return (
      <MenuContainer>
        <ToggleButton renderMobileModal={props.renderMobileModal}/>
        <NavLinkContainer>
          <NavLink to='/contact'>contact</NavLink>
        </NavLinkContainer>  
        <NavLinkContainer>
          <NavLink to='/portfolio'>portfolio</NavLink>
        </NavLinkContainer>
        <NavLinkContainer>
          <NavLink to='/'>home</NavLink>
        </NavLinkContainer> 
       
      </MenuContainer>
    )

  } else {
    return null;
  }
  

}

export default Menu;

  
