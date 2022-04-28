import React from 'react'
import { NewsPostData } from '../NewsPost/NewsPostData'
import { useNavigate } from 'react-router-dom';

function ListNewsPost() {
    const navigate = useNavigate();
  return (
    <div>
        {NewsPostData.map((post) => {
            return(
                <div
                    style={{border: '1px solid pink'}}
                    onClick={() => {
                        navigate(`/allnews/${post.id}`)
                        alert('hey')
                    }}
                >
                    <h1>{post.title}</h1>
                    <h1>{post.description}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default ListNewsPost 