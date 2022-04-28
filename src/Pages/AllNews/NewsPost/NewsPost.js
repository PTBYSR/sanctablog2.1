import React from 'react'
import { useParams } from 'react-router-dom';
import { 
    NewsPostSection,
 }  from './NewsPost.element'
 import { NewsPostData } from './NewsPostData'

function NewsPost() {
  const { id } = useParams();
  return (
    <NewsPostSection>
      <h1>HIIIIII</h1>
      <h1>{NewsPostData[id - 1].title}</h1>
      <p>{NewsPostData[id - 1].description}</p>
    </NewsPostSection>
  )
}

export default NewsPost