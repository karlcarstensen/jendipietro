import React from 'react'

import Footer from './Footer';
import Header from './Header';
import Instagram from './Instagram';

import './App.css';

function App() {
  return (
    <div className='container mx-auto px-4'>
      <Header />
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
