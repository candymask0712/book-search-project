import React from 'react';
import HeaderNav from './HeaderNav';
import HeaderLogo from './HeaderLogo';

const Header: React.FC = () => {
  return (
    <header className='w-full bg-palette-white fixed top-0'>
      <div className='max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between'>
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
