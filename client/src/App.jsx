import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './assets/pages/Home';
// import Blogs from './assets/pages/Blogs';
import Discover from './assets/pages/Discover';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import Footerp from './components/Footerp';
import Like from './components/Like';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path='/' element={<Home />} />
        {/* <Route path='/blog' element={<Blogs />} /> */}
        <Route path='/discover' element={<Discover />} />
        <Route path='/p' element={<Pagination />} />
        {/* <Route path='/t' element={<Like />} /> */}
      </Routes>
      <Footer/>
      <Footerp/>
    </>
  );
}
