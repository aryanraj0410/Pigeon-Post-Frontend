import React from 'react'
import Avatar from 'react-avatar'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineModeComment } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";

const Pigeon = () => {
    return (
        <div className='border-b border-grey-500'>
            <div>
                <div className='flex p-4'>
                    <Avatar src="https://i.postimg.cc/QxpGghRf/profile-main.jpg" size={40} round="20px" />
                    <div className='ml-2 w-full'>
                        <div className='flex items-center '>
                            <h1 className='font-bold'>Aryan</h1>
                            <p className='text-grey-500 text-sm ml-1'>@aryansays . 1m</p>
                        </div>
                        <div>
                            <p>Hello developers lets connect and grow together.</p>
                        </div>
                        <div className='flex justify-between my-3'>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-orange-200 rounded-full cursor-pointer'>
                                <FaRegHeart  className='ml-1'/>
                                </div>
                                <p>0</p>
                            </div>
                            <div className='flex items-center'>
                            <div className='p-2 hover:bg-orange-200 rounded-full cursor-pointer'>
                                <MdOutlineModeComment  className='ml-1'/>
                                </div>
                                <p>0</p>
                            </div>
                            <div className='flex items-center'>
                            <div className='p-2 hover:bg-orange-200 rounded-full cursor-pointer'>
                                <FaRegBookmark  className='ml-1'/>
                                </div>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pigeon