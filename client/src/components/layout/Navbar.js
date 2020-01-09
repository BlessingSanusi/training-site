import React from 'react';
import {Link } from 'react-router-dom'
import Logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to="/"><img src={Logo} alt="logo"/></Link>
      </h1>
      <ul>
        <li>
          <Link to='/register'> Register </Link>
        </li>
        <li>
          <Link to='/login'> Login </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
