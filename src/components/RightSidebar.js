import React from "react";
import { FcSearch } from "react-icons/fc";
import Avatar from "react-avatar";
import { Link } from 'react-router-dom';

const RightSidebar = ({otherUsers}) => {
  return (
    <div className="w-[20%] ">
      <div className="flex text-gray-600 items-center p-2 bg-gray-100 rounded-full outline-none ">
        <FcSearch size="25px" />
        <input
          type="text"
          className="flex bg-transparent outline-none px-2"
          placeholder="Search"
        />
      </div>
      <div className="p-4 bg-gray-300 rounded-2xl my-4">
        <h1 className="font-bold text-lg">Who to follow</h1>
        {
          otherUsers?.map((user) => {
            return (
              <div key={user?._id} className='flex items-center justify-between my-2'>
                <div className='flex'>
                  <div>
                  <Avatar src="https://i.postimg.cc/QxpGghRf/profile-main.jpg" size={50} round="100px" />
                  </div>
                  <div className='ml-2'>
                    <h1 className='font-bold'>{user?.name}</h1>
                    <p className='text-sm'>{`@${user?.username}`}</p>
                  </div>
                </div>
                <div>
                <Link to={`/profile/${user?._id}`}>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                  </Link>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  );
};

export default RightSidebar;
