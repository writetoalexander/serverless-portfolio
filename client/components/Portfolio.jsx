import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

// // export default class Portfolio extends React.Component {
// //   constructor(props){
// //     super(props)
// //   }

// //   render() {

// //     return (
// //       <div>
//         <ul className="drive">
//           {chillData.map((drive) => {
//             return (
//               <li key={drive.id}><a>{drive.thumbnailLink}</a>

//               </li>
//             )
//           })}
//         </ul>
        
// //       </div>

// //     )
// //   }
// // }
const Portfolio = (props) => (
  <div>
    <ul className="drive">
      {props.chillData.map((drive) => {
        return (
          <li key={drive.id}><img src={drive.thumbnailLink}></img>

          </li>
        )
      })}
    </ul>
  </div>
)

export default Portfolio

