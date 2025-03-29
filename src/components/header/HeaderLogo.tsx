import { Link } from 'react-router-dom';
import { DEFAULT_LINK_HREF } from '../../constants/nav';
import COMMON from '../../constants/common';

const HeaderLogo: React.FC = () => {
  return (
    <Link to={DEFAULT_LINK_HREF}>
      <h1 className="text-title1">{COMMON.TITLE}</h1>
    </Link>
  );
};

export default HeaderLogo;
