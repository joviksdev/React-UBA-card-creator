import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/UBA-logo-red.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <Link to='/' className='link'>
          <div className='header-icon'>
            <img style={style} src={logo} alt='Bank logo' />
            <h3>Card Creator App</h3>
          </div>
        </Link>
        <Link to='/about' className='link'>
          About
        </Link>
      </div>
    </div>
  );
};

const style = {
  width: '4rem'
};

export default Header;
