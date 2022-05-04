import React from 'react';
import {
  Landing,
  LandingHeading,
  LandingImage,
  Text,
} from './Home.element'
// import scribe from './scribe.svg';
import scribe from './scribe.jpg';


function Home() {
  return (
    <>
    <Landing className='flex'>
      <LandingHeading className='flex'> 
        <img className='resize' src={scribe} />
        <Text className='fs-heading ff-cabazon text-dark'>Sancta's <br/> Manuscripts</Text>
      </LandingHeading>
    </Landing>
    </>
  )
}

export default Home