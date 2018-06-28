import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import descriptions from '../descriptions/descriptions.js'
import Menu from './components/Menu';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chillData: [],
      descriptions: descriptions,
      showMarinerModal: false,
      showCodeChatModal: false,
      showBrewHopModal: false,
      imageTracker: 0,
      modalImages: []
    }
    this.getAppData = this.getAppData.bind(this)
  }

  componentWillMount(){
    this.getAppData();
  }

  getAppData() {

    axios.get('https://kpuqymwzal.execute-api.us-east-1.amazonaws.com/enableCors/getDrives')
         .then(resp => {
           console.log('resp is ', resp)
           this.setState({chillData: resp.data})
         })      

  }

  dismissModalHandler() {
    this.setState({
      showMarinerModal: false,
      showCodeChatModal: false,
      showBrewHopModal: false,
      imageTracker: 0
    });
  }

  renderMarinerModal() {
    this.setState({
      showMarinerModal: true
    });
  }

  renderCodeChatModal() {
    this.setState({
      showCodeChatModal: true
    });
  }

  renderBrewHopModal() {
    this.setState({
      showBrewHopModal: true
    });
  }

  increaseImageTracker() {
    if (this.state.imageTracker !== 2) {
      this.setState({
        imageTracker: this.state.imageTracker + 1
      });
    } else {
      this.dismissModalHandler();
    }

  }

  decreaseImageTracker() {
    if(this.state.imageTracker !== 0) {
      this.setState({
        imageTracker: this.state.imageTracker - 1
      });
    } else {
      this.dismissModalHandler();
    }
  }




  render() {
    const AppContainer = styled.div`
      

    `;


    const AppContent = styled.div`

    `;

    return (
      <AppContainer>
        <Menu chillData={this.state.chillData}/>
        <AppContent>
             <Route
               exact path="/"
               render={ routeProps => 
                 <Home {...routeProps}
                   chillData={this.state.chillData} 
                 /> }
             />

             <Route
               exact path="/portfolio"
               render={routeProps =>
                 <Portfolio {...routeProps}
                   chillData={this.state.chillData} 
                   descriptions={this.state.descriptions}
                   showMarinerModal={this.state.showMarinerModal}
                   showCodeChatModal={this.state.showCodeChatModal}
                   showBrewHopModal={this.state.showBrewHopModal}
                   dismissModalHandler={this.dismissModalHandler.bind(this)}
                   renderMarinerModal={this.renderMarinerModal.bind(this)}
                   renderCodeChatModal={this.renderCodeChatModal.bind(this)}
                   renderBrewHopModal={this.renderBrewHopModal.bind(this)}
                   increaseImageTracker={this.increaseImageTracker.bind(this)}
                   decreaseImageTracker={this.decreaseImageTracker.bind(this)}
                   imageTracker={this.state.imageTracker}
                 /> }
             />
              <Route
                exact path="/contact"
                render={routeProps =>
                  <Contact 
                  />}
              />
         </AppContent>
      </AppContainer>
    )
  }
}
