import React from 'react';
import {
  Landing,
  SideBar,
  HeadlineSection,
  TagSection,
} from './Home.element'

function Home() {
  return (
    <>
    <Landing className='flex'>
      <SideBar></SideBar>
      <HeadlineSection></HeadlineSection>
      <TagSection></TagSection>
    </Landing>
    </>
  )
}

export default Home