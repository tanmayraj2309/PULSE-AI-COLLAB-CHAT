import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Logout = () => {
    const navigate = useNavigate();
    const logoutHandler=()=>{
        console.log("Logout called");
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        navigate('/login');
    }
  return (
    <div>
      <button
      onClick={()=>{
        logoutHandler();
      }} className='text-2xl bg-blue-500 p-2 rounded-md'
      >
        Logout
      </button>
    </div>
  )
}

export default Logout;
