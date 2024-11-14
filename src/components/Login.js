import React, { useState } from 'react';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/userSlice';
import { FaUser, FaEnvelope, FaLock, FaUserAlt } from 'react-icons/fa';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        const res = await axios.post(
          `${USER_API_END_POINT}/login`,
          { email, password },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );
        dispatch(getUser(res?.data?.user));
        if (res.data.success) {
          navigate('/');
          toast.success(res.data.message);
        }
      } else {
        const res = await axios.post(
          `${USER_API_END_POINT}/register`,
          { name, username, email, password },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          setIsLogin(true);
          toast.success(res.data.message);
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
      console.log(error);
    }
    setLoading(false);
  };

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://www.pixelstalk.net/wp-content/uploads/images8/Aesthetic-HD-Wallpaper.jpg')", // Replace with your image URL
      }}
    >
      {/* Blurred overlay */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>

      {/* Form container */}
      <div className="relative w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md z-10">
        <div className="text-center mb-6">
          <img
            className="mx-auto"
            width="150px"
            src="https://logopond.com/logos/6b309aa83be5cc279fd2a7483ca6f8c4.png"
            alt="mainlogo"
          />
          <h1 className="text-4xl font-bold mt-4">{isLogin ? 'Login' : 'Sign Up'}</h1>
        </div>
        <form onSubmit={submitHandler} className="space-y-4">
          {!isLogin && (
            <>
              <div className="relative">
                <FaUserAlt className="absolute left-3 top-2 text-gray-500" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full pl-10 p-2 border border-gray-300 rounded-full outline-none focus:border-blue-500"
                />
              </div>
              <div className="relative">
                <FaUser className="absolute left-3 top-2 text-gray-500" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="w-full pl-10 p-2 border border-gray-300 rounded-full outline-none focus:border-blue-500"
                />
              </div>
            </>
          )}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-2 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full pl-10 p-2 border border-gray-300 rounded-full outline-none focus:border-blue-500"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-2 text-gray-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-10 p-2 border border-gray-300 rounded-full outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            {loading ? 'Loading...' : isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
        <div className="text-center">
          <h1>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span
              onClick={loginSignupHandler}
              className="font-bold text-blue-500 cursor-pointer hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
