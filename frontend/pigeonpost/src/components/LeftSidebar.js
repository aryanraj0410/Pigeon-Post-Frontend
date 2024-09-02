import React from 'react'
import { IoHome } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { IoBookmarks } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";

const LeftSidebar = () => {
  return (
    <div className='w-[20%]'>
        <div>
            <img className='ml-1' width={"50px"} src = "https://logopond.com/logos/6b309aa83be5cc279fd2a7483ca6f8c4.png" alt="pigeon-logo"/>
        </div>
        <div className='my-4'>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                <div>
                <IoHome size="24px"/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Home</h1>
            </div>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                <div>
                <MdOutlineExplore size="24px"/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Explore</h1>
            </div>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                <div>
                <IoNotifications size="24px"/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Notification</h1>
            </div>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                <div>
                <RiAccountPinBoxFill size="24px"/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Profile</h1>
            </div>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                <div>
                <IoBookmarks size="24px"/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
            </div>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                <div>
                <FaSignOutAlt size="24px"/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Logout</h1>
            </div>
            <button className='px-4 py-2 border-none text-md bg-[#dd4018] w-full rounded-full text-white font-bold'> Post</button>
        </div>
    </div>
  )
}

export default LeftSidebar