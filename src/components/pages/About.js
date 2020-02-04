import React from 'react';
import { Link } from 'react-router-dom';
import setTitle from '../setTitle';

const About = () => {
  // Set title of page
  setTitle('About');
  return (
    <div className='container'>
      <h3>About</h3>
      <p>UBA Card Creator App</p>
      <p>Version 1.0</p>
      <Link className='btn about' to='/' style={link}>
        Back
      </Link>
    </div>
  );
};
const link = {
  textDecoration: 'none',
  display: 'inline-block',
  marginTop: '0.5rem'
};

export default About;
