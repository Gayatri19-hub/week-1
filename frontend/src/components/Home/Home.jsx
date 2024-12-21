import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-4">
      <Link to={'/signup'} className="rounded-full px-8 py-2 text-white mt-4 text-base font-semibold">
        Sign up
      </Link>
      <Link to={'/login'} className="rounded-full px-8 py-3 bg-white text-black mt-4 text-base font-semibold">
        Log in
      </Link>
    </div>
  )
}

export default Home