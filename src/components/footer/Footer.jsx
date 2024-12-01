import React from "react";

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex justify-between items-center'>
          <p>&copy; 2023 JobBoard. All rights reserved.</p>
          <nav>
            <ul className='flex space-x-4'>
              <li>
                <a href='#' className='hover:text-gray-300'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300'>
                  Privacy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300'>
                  Terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
