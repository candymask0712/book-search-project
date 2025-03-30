interface Props {
  message?: string;
}

const LoadingFallback: React.FC<Props> = ({ message = '로딩 중...' }) => {
  return (
    <div className='flex h-screen w-screen justify-center items-center'>
      <div className='flex flex-col items-center'>
        <div className='w-12 h-12 border-4 border-palette-primary border-t-transparent rounded-full animate-spin mb-4' />
        <span className='text-body1'>{message}</span>
      </div>
    </div>
  );
};

export default LoadingFallback;
