import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
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
        <Button
          type='primary'
          size='large'
          className='bg-palette-primary border-palette-primary'
        >
          홈으로 이동
        </Button>
      </Link>
    </div>
  );
};

export default DefaultFallback;
