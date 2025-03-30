import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

export default function App() {
  return (
    <div className="bg-palette-white">
      <Header />
      <main className="pt-16 max-w-[960px] mx-auto mt-14">
        <Outlet />
      </main>
    </div>
  );
}
