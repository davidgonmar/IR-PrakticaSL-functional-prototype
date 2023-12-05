import React from 'react';
import '../App.css';
import '../static/css/home/home.css';

export default function Home() {
  return (
    <div className='home-page-container'>
      <div style={{ height: '600px', textAlign: 'center' }}>
        <img style={{ width: '500px' }} src={require("../static/images/praktica.png")} alt='Praktica Logo' className='logo-img' />
        <p style={{ fontSize: '44px', marginTop: '70px', color: 'white' }}>Welcome!</p>
      </div>
    </div>
  );
}