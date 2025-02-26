import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-950 to-gray-800 text-white shadow-lg w-full py-2 z-10">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              ResumeAI
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-400 font-medium transition-all duration-200">
              Home
            </Link>
            <Link to="/builder" className="hover:text-blue-200 font-medium transition-all duration-200">
              Resume Builder
            </Link>
            <Link to="/templates" className="hover:text-blue-200 font-medium transition-all duration-200">
              Templates
            </Link>
            <Link to="/builder" className="bg-blue-900 hover:bg-blue-500 px-6 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-lg">
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header