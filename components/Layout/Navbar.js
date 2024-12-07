// components/Layout/Navbar.jsx
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#6300a3] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">SpinWheels</div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">Contact</Link>
              </li>
            </ul>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white bg-opacity-70 text-[#6300a3] px-4 py-2 rounded-full placeholder-[#6300a3] focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#6300a3]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17.64 15.36a8 8 0 111.43-1.43L21 21z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 mt-4">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">Contact</Link>
            </li>
            <div className="relative mt-2 w-full px-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white bg-opacity-70 text-[#6300a3] px-4 py-2 rounded-full placeholder-[#6300a3] focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#6300a3]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17.64 15.36a8 8 0 111.43-1.43L21 21z" />
                </svg>
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
