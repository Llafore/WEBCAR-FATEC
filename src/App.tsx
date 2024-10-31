import { useState } from 'react'
import Header from './components/Header.tsx';
import Sidebar from './components/Sidebar.tsx';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Header onMenuClick={() => toggleDrawer(true)} />
      <Sidebar open={drawerOpen} onClose={() => toggleDrawer(false)} />
    </>
  );
}

export default App
