import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className='bg-palette-white'>
      <header className='p-4'>
        <h1 className='text-body2Bold'>My App Layout</h1>
      </header>
      <main className='p-4'>
        <Outlet />
      </main>
    </div>
  );
}
