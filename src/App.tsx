import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <header className='p-4 bg-gray-200'>
        <h1 className='text-xl font-bold'>My App Layout</h1>
      </header>
      <main className='p-4'>
        <Outlet />
      </main>
    </div>
  );
}
