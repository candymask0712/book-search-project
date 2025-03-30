import React from 'react';
import { useLocation } from 'react-router-dom';
import { LINK_LIST } from '../../constants/nav';
import NavItem from './NavItem';

const HeaderNav: React.FC = () => {
  const pathname = useLocation().pathname;

  return (
    <nav className="flex items-center space-x-8">
      {LINK_LIST.map(link => (
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
