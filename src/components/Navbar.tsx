'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black/70 to-transparent absolute top-0 w-full z-10">
      <div className="flex items-center space-x-6">
        <Link href="/">
        <img
          src="/assets/images/logo.png"
          alt="Netflix"
          className="w-24 hidden md:block"
        />
        <img
          src="/assets/images/n-logo.png"
          alt="Netflix"
          className="w-4 md:hidden"
        />
        </Link>

        <ul className="hidden md:flex space-x-4 text-white text-sm">
          <li className="hover:underline cursor-pointer">Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="flex justify-center text-white text-sm items-center gap-x-4 md:hidden text-center relative">
        <button>TV Shows</button>
        <button>Movies</button>

        {/* Dropdown */}
        <div className="relative">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Categories ˅
          </button>

          {isDropdownOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-gray-800 rounded shadow-lg z-50">
              <ul className="text-left text-sm text-white py-2">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Action
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Comedy
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Drama
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Documentary
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4 text-white">
        <button className="hidden md:block">
          <img src="/assets/images/search.png" alt="Netflix" className="w-6" />
        </button>
        <button className="hidden md:block">Kids</button>
        <button className="hidden md:block">
          <img src="/assets/images/bell.png" alt="Netflix" className="w-6" />
        </button>
        <button className="md:hidden">
          <img src="/assets/images/cast.png" alt="Netflix" className="w-6" />
        </button>
        <div className="w-6 h-6 bg-white rounded-sm"></div> {/* Avatar */}
      </div>
    </nav>
  )
}
