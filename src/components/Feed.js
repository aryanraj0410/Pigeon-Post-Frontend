import React from 'react'
import CreatePost from './CreatePost.js'
import Pigeon from './Pigeon.js'
import { useSelector } from 'react-redux'

const Feed = () => {
    const {pigeons} = useSelector(store=>store.pigeon);
    return (
        <div className='w-[50%] border border-grey-200'>
            <div>
            <CreatePost/>
            {
                pigeons?.map((pigeon)=> <Pigeon key= {pigeon?._id} pigeon={pigeon}/>)  
                 
            }
            <Pigeon>
                
            </Pigeon>
            
            </div>
        </div>
    )
}

export default Feed
