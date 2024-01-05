import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Home', url: '/home' },
    { label: 'Products', url: '/products' },
    { label: 'About Us', url: '/aboutus' },
    { label: 'Blog', url: '/blog' },
    { label: 'Solutions', url: '/solutions' },
    { label: 'Team', url: '/team' },
    { label: 'Contact Us', url: '/contactus' },
  ];

  return (
    <header className='header_container'>
      <div className='header_left'>
        <h1 onClick={() => navigate('/home')}>Kerchak</h1>
      </div>
      <nav className='header_right'>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.url}  activeClassName='active' exact>
                {item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;