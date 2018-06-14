import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Menu from './components/Menu';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chillData: [],
    }
    this.getAppData = this.getAppData.bind(this)
  }

  componentDidMount(){
    console.log('something happening')
    this.getAppData()
  }

  getAppData() {

    axios.get('https://kpuqymwzal.execute-api.us-east-1.amazonaws.com/enableCors/getDrives')
         .then(resp => {
           console.log('resp is ', resp.data)
           this.setState({chillData: resp.data})
         })

  }

  render() {
    const AppContainer = styled.div`

    `;


    const AppContent = styled.div`

    `;

    return (
      <AppContainer>
        <Menu/>
        <AppContent>
             <Route
               exact path="/"
               render={ routeProps => <Home {...routeProps} /> }
             />

             <Route
               exact path="/portfolio"
               render={  routeProps =>
                 <Portfolio {...routeProps}
                   chillData={this.state.chillData}
                 /> }
             />
         </AppContent>
      </AppContainer>
    )
  }
}
