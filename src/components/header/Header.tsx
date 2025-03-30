// TODO: 명령어로 react import 삭제
import React from 'react';
import HeaderNav from './HeaderNav';
import HeaderLogo from './HeaderLogo';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-palette-white fixed top-0 z-30">
      <div className="max-w-screen-xl mx-auto h-16 flex items-center">
        <div className="flex-[4]">
          <HeaderLogo />
        </div>
        <div className="flex-[6]">
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
