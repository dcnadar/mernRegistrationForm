import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result)
        if (result.data === "Success") {
          navigate('/home')
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className=' flex bg-blue-400 justify-center items-center h-screen'>
      <div className=' bg-orange-200 rounded p-3 w-1/4'>
        <p className=' text-xl text-center font-bold'>Login</p>
        <form onSubmit={handleSubmit} action="">

          <div className=' mb-3'>
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" autoComplete='off'
              className=' block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded-none' placeholder='Enter Email' name="email" id="" />
          </div>
          <div className=' mb-3'>
            <label htmlFor="email">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" autoComplete='off'
              className=' block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded-none' placeholder='Enter Password' name="" id="" />
          </div>
          <button type="submit" className=' inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded-0  bg-green-500 text-white  w-full py-1 px-3 leading-normal no-underline btn-succes'>
            Login
          </button>
        </form>
        <p className=' py-2'>Don't have an account? Register Here</p>
        <Link to={'/register'} type="submit" className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded-0 w-full bg-red-500 text-white py-1 px-3 leading-normal no-underline btn-delete'>
          Register
        </Link>

      </div>
    </div>
  )
}

export default Login