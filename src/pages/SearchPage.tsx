import CaretUp from '../assets/icons/caret-up.svg?react';
import IconButton from "../components/button/IconButton";

const SearchPage = () => {
  return <div>
    <IconButton icon={<CaretUp />} variant="secondary" iconPosition="left" />
  </div>;
};

export default SearchPage;
