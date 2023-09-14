import React from 'react'

import './footer.css'

function Footer() {
  let year = new Date()
  year = year.getFullYear()

  return (
    <div className="bg-slate-800 pt-10 pb-16 text-slate-600">
      <p className="text-center">&copy; {year} Jen Beatty Interior Design.</p>
    </div>
  );
}

export default Footer;
