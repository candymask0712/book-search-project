import React from 'react';
import { Link } from 'react-router-dom';
import DefaultButton from '../button/Button';
interface Props {
  message?: string;
}

const DefaultFallback: React.FC<Props> = ({
  message = '문제가 발생하였습니다. 홈으로 이동해주세요.'
}) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className='text-body1 mb-4'>{message}</p>
      <Link to='/'>
        <DefaultButton
          variant='primary'
          size='medium'
        >
          홈으로 이동
        </DefaultButton>
      </Link>
    </div>
  );
};

export default DefaultFallback;
