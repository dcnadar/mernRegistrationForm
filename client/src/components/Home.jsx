import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>Home
            <Link to={'/login'} type="submit" className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded-0 w-full bg-red-500 text-white py-1 px-3 leading-normal no-underline btn-delete'>
                Login
            </Link>
        </div>

    )
}

export default Home