import React from 'react';
import cn from 'classnames';
import { LinkType } from '../../types/link.type';
import { Link } from 'react-router-dom';

interface Props {
  link: LinkType;
  isActive: boolean;
}

const NavItem: React.FC<Props> = ({ link, isActive }) => {
  return (
    <Link
      to={link.href}
      className={cn('text-body1', {
        underline: isActive,
        'underline-offset-8': isActive
      })}
    >
      {link.label}
    </Link>
  );
};

export default NavItem;
