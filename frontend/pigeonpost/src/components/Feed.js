import React from 'react'
import CreatePost from './CreatePost'
import Pigeon from './Pigeon'

const Feed = () => {
    return (
        <div className='w-[50%] border border-grey-200'>
            <div>
            <CreatePost/>
            <Pigeon/>
            </div>
        </div>
    )
}

export default Feed
