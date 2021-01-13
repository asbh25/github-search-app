import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <img src="/header.png" alt="logo" className="header__img" />
      <h2 className="header__heading">Github search app</h2>
    </header>
  );
};
