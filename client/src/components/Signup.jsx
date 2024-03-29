import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result)
        navigate('/login')
      }
      )
      .catch(err => console.log(err))

  }
  return (
    <div className=' flex bg-blue-400 justify-center items-center h-screen'>
      <div className=' bg-orange-200 rounded p-3 w-1/4'>
        <p className=' text-xl text-center font-bold'>Registeration Form</p>
        <form onSubmit={handleSubmit} action="">
          <div className=' mb-3'>
            <label htmlFor="email">Name</label>
            <input onChange={(e) => setName(e.target.value)} type="text" autoComplete='off'
              className=' block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded-none' placeholder='Enter Name' name="email" id="" />
          </div>
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
          <button type="submit" className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded-0  bg-green-500 text-white  w-full py-1 px-3 leading-normal no-underline btn-succes'>
            Register
          </button>
        </form>
        <p>Already have an account? Login Here</p>
        <Link to={'/login'} type="submit" className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded-0 w-full bg-red-500 text-white py-1 px-3 leading-normal no-underline btn-delete'>
          Login
        </Link>
      </div>
    </div >

  )
}

export default Signup