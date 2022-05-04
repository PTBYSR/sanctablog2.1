import React from 'react'
import { NewsPostData } from '../NewsPost/NewsPostData'
import { useNavigate, Link } from 'react-router-dom';

function ListNewsPost() {
    const navigate = useNavigate();
  return (
    <div>
        {NewsPostData.map((post) => {
            return(
                <div
                    className='ff-cabazon'
                    style={{border: '1px solid pink'}}
                    onClick={() => {
                        navigate(`/allnews/${post.id}`)
                    }}
                >
                        <h1>{post.title}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default ListNewsPost 