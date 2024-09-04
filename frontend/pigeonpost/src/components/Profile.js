import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

const Profile = () => {
  return (
    <div className='w-[50%] border-l border-r border-gray-350'>
      <div >
        <div className='flex items-center  py-2'>
          <Link to="/" className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
            <IoMdArrowRoundBack size={"24px"} />
          </Link>
          <div className='ml-2'>
            <h1 className='font-bold text-lg'>Aryan</h1>
            <p className='text-gray-500 text-sm'>10 post</p>


          </div>

        </div>
        <img src="https://pbs.twimg.com/profile_banners/1058430396008820736/1687620759/1080x360" alt="banner" />
        <div className='absolute top-52 ml-2 border-4 border-white rounded-full '>
          <Avatar src="https://i.postimg.cc/QxpGghRf/profile-main.jpg" size={120} round="100px" />
        </div>
        <div className='text-right m-4'>
          <button className='px-4 py-1 rounded-full border border-gray-400 hover:bg-gray-300'>
            Edit Profile
          </button>
        </div>
        <div className='m-4'>
          <h1 className='font-bold text-xl'>Aryan</h1>
          <p>@aryansays</p>
        </div>
        <div className='m-4 text-sm'>
          <p>I am a Gamer who uploads videos on social media. I like this work very much 🤠. You can follow me on Instagram and YouTube also.</p>
        </div>
      </div>
    </div>
  )
}

export default Profile