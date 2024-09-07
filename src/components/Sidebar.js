import React from 'react';
import { List, ListItem, ListItemText, Button, Typography } from '@mui/material';
import { Image } from '@mui/icons-material';
import Logo from '../assets/logo.png';

const Sidebar = () => {
  return (
    <div style={{ height: '100vh', padding: '20px', display: 'flex', justifyContent: "center", alignItems: 'center', flex: 1, flexDirection: 'column' }}>
      <Image src={Logo} alt="logo" className='img-reponsive' />
      <Typography variant="h6">Welcome To</Typography>
      <Typography variant="h5">Pre Launch Coins</Typography>
      <Typography variant="subtitle1">Explore Coins Before They Launch</Typography>
      <Typography variant="body2">72 Coins Launching Soon</Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Login
      </Button>
      <Button variant="outlined" color="primary" style={{ marginTop: '10px' }}>
        Create Account
      </Button>
    </div>
  );
};

export default Sidebar;