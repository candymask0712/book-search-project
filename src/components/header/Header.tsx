// TODO: 명령어로 react import 삭제
import React from 'react';
import HeaderNav from './HeaderNav';
import HeaderLogo from './HeaderLogo';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-palette-white fixed top-0 z-30">
      <div className="flex h-16 items-center">
        <div className="flex basis-1/4 justify-center">
          <HeaderLogo />
        </div>
        <div className="basis-3/4 flex justify-start pl-80">
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
