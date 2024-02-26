import * as React from 'react';
import './css/Downloadbot.css';
import EurLogo from '../asset/Eurusd.png';
import XauLogo from '../asset/Xauusd.png';

export const Downloadbot = () => {
  return (
    <div className='card-container-wrapper'>
    <div className='card-container'>
        <img 
        src={EurLogo}
        className='card-img'
        />
        <h1 className='card-title'>EUR/USD</h1>
        <p className='card-description'>
          This is template for Euro to USD.
        </p>
        <a href='cardPage' className='card-btn'>Learn More</a>
    </div>
    <div className='card-container'>
        <img 
        src={XauLogo} 
        className='card-img'
        />
        <h1 className='card-title'>XAU/USD</h1>
        <p className='card-description'>
        This is template for Gold to USD.
        </p>
        <a href='cardPage' className='card-btn'>Learn More</a>
    </div>
  </div>
  );
}
