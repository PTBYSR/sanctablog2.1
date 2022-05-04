import React from 'react'
import { Route, Link, useParams } from 'react-router-dom';
import { 
    NewsPostSection,
 }  from './NewsPost.element'
 import { NewsPostData } from './NewsPostData'



function NewsPost() {
  const { id } = useParams();
  return (
    <NewsPostSection className='flex '>
          <h1 className='ff-cabazon fs-news-heading text-red'>{NewsPostData[id - 1].title}</h1>
          <p className='ff-cabazon fs-body'>{NewsPostData[id - 1].description}</p>
          <h1>{NewsPostData[id - 1].image}</h1>
    </NewsPostSection>
  )
}

export default NewsPost