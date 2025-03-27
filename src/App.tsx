import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

export default function App() {
  return (
    <div className="bg-palette-white h-screen">
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
