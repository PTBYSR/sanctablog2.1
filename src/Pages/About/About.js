import React from 'react'
import { 
  AboutSection

} from './About.element'
// import { ReactComponent as SIluminated } from './s-illuminated.png';
import SIluminated from './s-illuminated.png'

function About() {
  return (
    <AboutSection>
    About
    <img src={SIluminated} alt='letter s'/>
    </AboutSection>
  )
}

export default About