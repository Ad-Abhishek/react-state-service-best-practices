import React from 'react'
import Posts from './Posts'


const PostTable = () => {
  return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-sm-9">
                <Posts />
            </div>
        </div>
    </div>
  )
}

export default PostTable