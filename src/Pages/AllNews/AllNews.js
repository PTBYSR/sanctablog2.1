import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { 
  AllNewsSection,
 } from './AllNews.element';
 import NewsPost from './NewsPost/NewsPost'

function AllNews() {
  return (
    <AllNewsSection>
      <Router>
        <Routes>
          <Route>
            <Link path='/:username'>
              <NewsPost />
            </Link>
          </Route>
        </Routes>
      </Router>
    </AllNewsSection>
  )
}

export default AllNews