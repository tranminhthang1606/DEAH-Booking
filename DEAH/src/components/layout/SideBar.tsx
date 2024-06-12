import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (

    <div>
      <>
        {/* component */}
        <link
          rel='stylesheet'
          href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css'
        />
        <div className='min-h-screen flex flex-row bg-gray-100'>
          <div className='flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden'>
            <div className='flex items-center justify-center h-20 shadow-md'>
              <h1 className='text-3xl uppercase text-indigo-500'>Admin</h1>
            </div>
            <ul className='flex flex-col py-4'>
              <li>
                <Link
                  to={"/dashboard"}
                  className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'>
                  <span
                    style={{ textDecoration: "none" }}
                    className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                    <i className='bx bx-home' />
                  </span>
                  <span className='text-sm font-medium'>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/list_tour"}
                  className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'>
                  <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                    <i className='bx bx-music' />
                  </span>
                  <span className='text-sm font-medium'>Tour List</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/add_tour"}
                  className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'>
                  <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                    <i className='bx bx-drink' />
                  </span>
                  <span className='text-sm font-medium'>Tour Add</span>
                </Link>
              </li>

              <li>
                <a
                  href='#'
                  className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'>
                  <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                    <i className='bx bx-user' />
                  </span>
                  <span className='text-sm font-medium'>Profile</span>
                </a>
              </li>

              <li>
                <p
                  className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'>
                  <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                    <i className='bx bx-log-out' />
                  </span>
                  <span className='text-sm font-medium'>Log out</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </>
    </div>
  );
};
export default SideBar