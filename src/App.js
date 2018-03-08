import React, { Component } from 'react'
import './App.css'
import Hero from './components/Hero'
import HeroVideo from './components/HeroVideo'
import HeroText from './components/HeroText'

class App extends Component {
  render() {
    return (
      <div>
        <Hero>
          <HeroVideo />
          <HeroText />
        </Hero>
      </div>
    );
  }
}

export default App;
