import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
    window.location.reload();
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose} onKeyDown={onClose}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={<Typography fontWeight="bold">Filtros</Typography>} />
          </ListItemButton>
        </ListItem>
        {['Mais baratos', 'Mais confiáveis', 'Sedans', 'Coupes'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={<Typography fontWeight="bold">Marcas</Typography>} />
          </ListItemButton>
        </ListItem>
        {['Honda', 'Toyota', 'Chevrolet'].map((brand) => (
          <ListItem key={brand} disablePadding>
            <ListItemButton onClick={() => handleNavigation(`/pesquisa/${brand}`)}>
              <ListItemText primary={brand} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer open={open} onClose={onClose}>
      {DrawerList}
    </Drawer>
  );
};

export default Sidebar;
