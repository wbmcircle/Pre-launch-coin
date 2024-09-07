import React from 'react';
import { List, ListItem, ListItemText, Button, Typography } from '@mui/material';
import { Image } from '@mui/icons-material';
import Logo from '../assets/bitcoin.png';

const Sidebar = () => {
  return (
    <div style={{
      height: '100vh',
      padding: '20px',
      display: 'flex',
      justifyContent: "center",
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      borderRight: '4px solid #000'
    }}>
      <img
        src={Logo}
        width={33}
        height={33}
        alt="logo"
        className='img-reponsive' />
      <Typography variant="h6" style={{ fontSize: '14px' }}>Welcome To</Typography>
      <Typography variant="h5" style={{ fontSize: '18px', fontWeight: 'bold' }}>Pre Launch Coins</Typography>
      <Typography variant="subtitle1" style={{ fontSize: '13px', marginBottom: 40 }}>Explore Coins Before They Launch</Typography>
      <Typography variant="body2" style={{ fontSize: '13px', marginBottom: 40 }}>72 Coins Launching Soon</Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '20px', minWidth: 165 }}>
        Login
      </Button>
      <Button color="primary" style={{ marginTop: '10px' }}>
        Create Account
      </Button>
    </div>
  );
};

export default Sidebar;