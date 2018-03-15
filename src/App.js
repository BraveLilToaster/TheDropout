import React, { Component } from 'react'
import './App.css'
import { bandsInTown } from './agent'
import { Social } from './Icons'
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
    const socialLinks = [
      {
        icon: Social.spotify,
        color: 'rgb(30, 215, 96)',
        link: 'https://open.spotify.com/artist/32Dm8babudNSOuAasp3Bjz',
      },
      {
        icon: Social.facebook,
        color: 'rgb(59, 89, 152)',
        link: 'https://open.spotify.com/artist/32Dm8babudNSOuAasp3Bjz',
      },
      {
        icon: Social.instagram,
        color: 'rgb(238, 72, 87)',
        link: 'https://open.spotify.com/artist/32Dm8babudNSOuAasp3Bjz',
      },
    ]

    return (
      <div>
        <SocialHeader socialLinks={socialLinks} />
        <Hero>
          <HeroVideo />
          <HeroText />
        </Hero>
        <Container>
          <Section>
            <Display4 align={'center'} fontWeight={'bold'}>
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
