import { useState } from 'react'
import Header from './components/Header.tsx';
import Sidebar from './components/Sidebar.tsx';
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <BrowserRouter>
      <Header onMenuClick={() => toggleDrawer(true)} />
      <Sidebar open={drawerOpen} onClose={() => toggleDrawer(false)} />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App
