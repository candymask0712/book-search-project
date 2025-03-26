import React from 'react';
import { useLocation } from 'react-router-dom';
import { LINKS } from '../../constants/links';
import NavItem from './NavItem';

const HeaderNav: React.FC = () => {
  const pathname = useLocation().pathname;

  return (
    <nav className='flex items-center space-x-8'>
      {LINKS.map((link) => (
        <NavItem
          key={link.href}
          link={link}
          isActive={pathname === link.href}
        />
      ))}
    </nav>
  );
};

export default HeaderNav;
