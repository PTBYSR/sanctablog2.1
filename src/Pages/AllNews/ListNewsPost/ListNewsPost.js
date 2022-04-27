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
                    onClick={() => {
                        navigate(`/allnews/${post.id}`)
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