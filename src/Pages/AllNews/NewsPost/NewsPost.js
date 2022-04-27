import React from 'react'
import { useParams } from 'react-router-dom'
import { 
    NewsPostSection,
 }  from './NewsPost.element'

function NewsPost() {
  let {newspost} = useParams();
  return (
    <NewsPostSection>
      this is the {newspost}
    </NewsPostSection>
  )
}

export default NewsPost