import React from 'react'
import Avatar from 'react-avatar'
import { IoIosImages } from "react-icons/io";

const CreatePost = () => {
    return (
        <div className='w-[100%]'>
            <div>
            <div className='flex items-center justify-evenly border border-bottom-grey-200'>
                <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                    <h1 className='font-semibold text-gray-600 text-lg'>For you</h1>
                </div>
                <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                    <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
                </div>
            </div>

            <div>
                <div className='flex items-center p-4'>
                    <div>
                     <Avatar src="https://i.postimg.cc/QxpGghRf/profile-main.jpg" size={40} round="20px" />
                    </div>
                    <input className='w-full outline-none border-none text-xl m-2' type="text" placeholder="What is happening"/>
                </div>
                <div className='flex items-center justify-between p-4 border-b border-grey-400'>
                    <div >
                       <IoIosImages size="24px"/> 
                    </div>
                    <button className='bg-[#dd4018] px-4 py-1 text-lg text-white border-none rounded-full'>Post</button>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default CreatePost