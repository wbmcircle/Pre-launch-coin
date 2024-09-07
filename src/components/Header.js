import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import Background from '../assets/background.png'

const Header = () => {
  return (
    <AppBar position="static" style={{ marginBottom: 20 }} >
      <Toolbar style={{ display: 'flex', flexDirection: "column" }}>
        <Typography variant="h4" noWrap>Find Your Next Crypto Community</Typography>
        <Typography variant="h6" noWrap>Pre-Launch Crypto Communities Helps Build Trust Before The Launch</Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SearchIcon />
          <InputBase placeholder="Explore communities…" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;