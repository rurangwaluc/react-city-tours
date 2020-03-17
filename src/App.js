import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './App.scss'
import Navbar from './components/Navbar/Navabr'
import TourList from './components/TourList'


class App extends Component {
  render() {
    return (
      <main>
       <Navbar />
       <TourList />
      </main>
      
    );
  }
}

export default App;