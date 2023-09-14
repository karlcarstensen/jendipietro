import React from 'react'

import './header.css'

function Header() {
  return (
    <div className="py-10">
      <h1 className="pb-4 text-sm md:text-base"><span className='mr-4'>Jen DiPietro Design</span>Interior Design, San Francisco Bay Area, CA</h1>
      <p className='max-w-3xl py-4'>
        Even as a young girl, Jen would spend hours redesigning her bedroom. From humble beginings helping friends design their apartments and homes, she has channeled her passion into a full-time business.
      </p>
      <p>
        <a href="mailto:beatty.jennifer@gmail.com">Let's discuss your project</a>
      </p>
    </div>
  );
}

export default Header;
