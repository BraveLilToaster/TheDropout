import React, { Component } from 'react'
import './App.css'
import { bandsInTown } from './agent'
import { Container, Section } from './components/Layout'
import { Display4 } from './components/Typography'
import Hero from './components/Hero'
import HeroVideo from './components/HeroVideo'
import HeroText from './components/HeroText'
import SocialHeader from './components/SocialHeader'
import TourDateList from './components/TourDateList'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tourDates: [],
    }
  }

  componentDidMount(){
    bandsInTown.getTourDates
      .then(data => {
        this.setState({tourDates: data})
      })
  }

  render() {
    return (
      <div>
        <SocialHeader />
        <Hero>
          <HeroVideo />
          <HeroText />
        </Hero>
        <Container>
          <Section>
            <Display4 align={'center'} >
              Tour Dates
            </Display4>
            <TourDateList tourDates={this.state.tourDates} />
          </Section>

        </Container>
      </div>
    )
  }
}

export default App;
