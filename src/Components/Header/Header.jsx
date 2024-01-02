import React from 'react'

const Header = () => {
  return (
    <div className='header_container'>
      <div className='header_left'>
      <h1>Logo izq</h1>
      </div>
        <div className='header_right'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/contactus">ContactUs</a></li>

          </ul>
        </div>

    </div>
  )
}

export default Header