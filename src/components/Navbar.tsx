'use client'

import Link from 'next/link'
import { useState } from 'react'
import { BiMessage } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

export default function HeaderComp() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <nav className='shadow-md fixed top-0 w-full z-50 bg-[#1D232A] h-16 flex items-center'>
      <div className='flex justify-between items-center container mx-auto py-4 px-4 lg:px-0'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-x-2'>
          <div className='p-2 rounded bg-blue-500 flex items-center justify-center'>
            <BiMessage size={20} className='text-white' />
          </div>
          <p className='text-xl font-semibold text-blue-300'>Chattyfy</p>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-x-5'>
            <li>
              <Link href='/profile' className='flex items-center gap-x-2 text-white hover:text-blue-300'>
                <div className='size-7 bg-gray-600 rounded-full flex items-center justify-center text-sm'>
                  JD
                </div>
                <p>John Doe</p>
              </Link>
            </li>
            <li>
              <Link href='/settings' className='flex items-center gap-x-1 text-white hover:text-blue-300'>
                <span>⚙️</span>
                <p>Settings</p>
              </Link>
            </li>
            <li>
              <button className='flex items-center gap-x-1 cursor-pointer text-white hover:text-blue-300' type='button'>
                <span>🚪</span>
                <p>Logout</p>
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className='block md:hidden'>
          <button onClick={() => setIsDrawerOpen(!isDrawerOpen)} className='text-white'>
            <GiHamburgerMenu size={18} />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`
          block md:hidden fixed top-0 left-0 h-full w-full p-4 bg-gray-900 shadow-lg z-50 
          transform transition-transform duration-300 ease-in-out
          ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className='flex items-center justify-between'>
            <Link href='/' className='flex items-center gap-x-2' onClick={() => setIsDrawerOpen(false)}>
              <div className='p-2 rounded bg-blue-500 flex items-center justify-center'>
                <BiMessage size={20} className='text-white' />
              </div>
              <p className='text-xl font-semibold text-blue-300'>Chattyfy</p>
            </Link>
            <button className='cursor-pointer text-white' onClick={() => setIsDrawerOpen(false)}>
              <ImCross size={16} />
            </button>
          </div>
          
          <hr className='mt-4 border-gray-700' />
          
          <ul className='flex flex-col gap-y-4 mt-4 px-4'>
            <li>
              <Link 
                href='/profile' 
                onClick={() => setIsDrawerOpen(false)} 
                className='flex items-center gap-x-3 text-white hover:text-blue-300 py-2'
              >
                <div className='size-8 bg-gray-600 rounded-full flex items-center justify-center'>
                  JD
                </div>
                <div>
                  <p className='font-medium'>John Doe</p>
                  <p className='text-sm text-gray-400'>View Profile</p>
                </div>
              </Link>
            </li>
            
            <li className='pt-2'>
              <Link 
                href='/settings' 
                onClick={() => setIsDrawerOpen(false)} 
                className='flex items-center gap-x-3 text-white hover:text-blue-300 py-2'
              >
                <span className='text-xl'>⚙️</span>
                <span>Settings</span>
              </Link>
            </li>
            
            <li>
              <button 
                onClick={() => setIsDrawerOpen(false)} 
                className='flex items-center gap-x-3 text-white hover:text-blue-300 py-2 w-full text-left'
                type='button'
              >
                <span className='text-xl'>🚪</span>
                <span>Logout</span>
              </button>
            </li>
          </ul>

          {/* Additional static info */}
          <div className='absolute bottom-8 left-4 right-4'>
            <div className='bg-gray-800 p-4 rounded-lg'>
              <p className='text-sm text-gray-400'>App Version</p>
              <p className='text-white font-medium'>1.0.0</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}