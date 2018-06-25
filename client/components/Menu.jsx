import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

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


    return (
      <MenuContainer>
        <NavLink to='/portfolio'>portfolio</NavLink>
        <NavLink to='/'>home</NavLink>
      </MenuContainer>
    )
  }
}
