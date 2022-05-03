import React from 'react';
import {
  Landing,
  LandingHeading,
  LandingImage,
} from './Home.element'

function Home() {
  return (
    <>
    <Landing className='flex'>
      <LandingImage>
        landing
      </LandingImage>
      <LandingHeading>
        landing
      </LandingHeading>
    </Landing>
    </>
  )
}

export default Home