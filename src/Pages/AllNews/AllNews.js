import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom'
import { 
  AllNewsSection,
 } from './AllNews.element';
 import NewsPost from './NewsPost/NewsPost'

function AllNews() {
  let {id} = useParams();
  return (
    <AllNewsSection>
            <Link to='allnews/'>
              hi
            </Link>
            <Link to='allnews/'>
              hi
            </Link>
            <Link to='allnews/'>
              hi
            </Link>
    </AllNewsSection>
  )
}

export default AllNews