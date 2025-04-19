import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [formData, setFormData] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await fetch('api/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  
    const data = await res.text();
    navigate('/sign-in')
    console.log(data);
  };
  
  console.log(formData)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sing Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange} />
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>SIGN UP</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sing in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp