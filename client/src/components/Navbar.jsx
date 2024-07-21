import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className=' main '>
        <div className="px-2.5 ">
            <img src="data:image/png;base64,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" alt="logo1"></img>
        </div>
        <div className='sideee'>
        <ul className='sim'>
        <li className='homei'><a href="/">Home</a></li> 
        <li className='blogsw'><a href="/blog">Blogs</a></li>
        <li className='discover'><a href="/froker">Discover Froker</a></li>
        </ul>
        </div>
        </div>
  )
}
