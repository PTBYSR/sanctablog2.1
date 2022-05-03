import React from 'react';
import {
  Landing,
  LandingHeading,
  LandingImage,
  Text,
} from './Home.element'
import scribe from './scribe.jpg';


function Home() {
  return (
    <>
    <Landing className='flex'>
      <LandingHeading>
        <img src={scribe} />
        <Text></Text>
      </LandingHeading>
    </Landing>
    </>
  )
}

export default Home