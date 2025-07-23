import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButtons from './FloatingActionButtons';

const MainLayout = () => {
  return (
    <div className="bg-zinc-800 font-sans">
      <Header />
      <main>
        <Outlet />
      </main>
      <FloatingActionButtons />
      <Footer />
    </div>
  );
};

export default MainLayout;