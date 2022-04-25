import React from 'react'
import { useParams } from 'react-router-dom'

function AllNews() {
  let {newspost} = useParams();
  return (
    <div>
      <div>this is { newspost }</div>
    </div>
  )
}

export default AllNews