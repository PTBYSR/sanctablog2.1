import React from 'react';
import {
  Landing,
  LandingHeading,
  LandingImage,
  Text,
} from './Home.element'
import scribe from './scribe.svg';


function Home() {
  return (
    <>
    <Landing className='flex'>
      <LandingHeading>
        <img src={scribe} />
        <Text className='fs-heading ff-cabazon text-dark'>Sancta's <br/> Manuscripts</Text>
      </LandingHeading>
    </Landing>
    </>
  )
}

export default Home