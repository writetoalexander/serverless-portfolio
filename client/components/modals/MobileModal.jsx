import React from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';

const displayVal = 'none';

const MobileNav = styled.nav`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  height: 90%;
  width: 100%;
  height: 100vh;
`

const MobileNavItems = styled.ul`
  width: 90%;
  height: 100%;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MobileNavListItem = styled.li`
   margin: 1rem 0;
`

const MobileButton = styled.button`
  background: #0e4f1f;
  color: white;
  font: inherit;
  border: 1.5px solid #0e4f1f;
  padding: 0.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`

const MobileModal = (props) => {
console.log('loading mobile props is ', props)  

return ( 
  props.isVisible ? (
        <MobileNav>
        <MobileNavItems>
            <MobileNavListItem>
              <NavLink to='./' onClick={props.renderMobileModal}>Home</NavLink>
            </MobileNavListItem>
            <MobileNavListItem>
              <NavLink to='./portfolio' onClick={props.renderMobileModal}>Portfolio</NavLink>
            </MobileNavListItem>
            <MobileNavListItem>
              <NavLink to='./contact' onClick={props.renderMobileModal}>Contact</NavLink> 
            </MobileNavListItem>
        </MobileNavItems>
    </MobileNav>
  ) :
  (
    null    
  )
)

  
};

export default MobileModal;