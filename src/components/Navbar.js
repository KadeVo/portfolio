import React, { useState, useEffect } from 'react'
import devcourse from '../assets/images/devprogram.pdf'

const Navbar = () => {
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`bg-${
        isSticky ? 'black' : 'transparent'
      } p-4 fixed top-0 w-full z-50 transition duration-300 ease-in-out`}
    >
      <div className="justify-between items-center">
        <ul className="flex space-x-4 justify-end">
          <li>
            <a
              href={devcourse}
              className={`text-${
                isSticky ? 'white' : 'black'
              } hover:text-gray-500`}
              target="_blank"
              rel="noreferrer"
            >
              Dev Academy Letter
            </a>
          </li>
          <li>
            <a
              href="https://sites.google.com/view/kadinvo/home"
              className={`text-${
                isSticky ? 'white' : 'black'
              } hover:text-gray-500`}
              target="_blank"
              rel="noreferrer"
            >
              Marketing Portfolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
