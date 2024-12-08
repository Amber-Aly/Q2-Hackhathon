import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
      <nav className="flex justify-between items-center px-10 py-4 bg-yellow-300">
        {/* Centered Links */}
        <div className="flex-1 flex justify-center space-x-8">
          {['Home', 'Shop', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:underline text-lg font-medium text-black"
            >
              {item}
            </a>
          ))}
        </div>
  
        {/* Icons */}
        <div className="flex space-x-4 text-xl">
          <span>👤</span>
          <span>❤️</span>
          <span>🛒</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</span>
          
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  

