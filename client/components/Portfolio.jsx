import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import descriptions from '../../descriptions/descriptions.js'



const Portfolio = (props) => (
  <div>
    <ul className="drive">
      <li>
        <div>Mariner</div>
        <img src={props.chillData[1].thumbnailLink}>
        </img>
        <p>
        {descriptions.mariner}
        </p>
      </li>
      <li>
        <div>Code Chat</div>
        <img src={props.chillData[2].thumbnailLink}></img>
        <p>{descriptions.codeChat}</p>
      </li>
      <li>
        <div>Brew Hop</div>
        <img src={props.chillData[0].thumbnailLink}></img>
        <p>{descriptions.brewHop}</p>
      </li>
    </ul>
  </div>
)

export default Portfolio

