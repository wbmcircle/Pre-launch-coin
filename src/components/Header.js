import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import Background from '../assets/background.png'

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{
        marginBottom: 20,
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover'
      }} >
      <Toolbar style={{ display: 'flex', flexDirection: "column" }}>
        <Typography variant="h4" noWrap style={{ fontSize: '24px', fontWeight: 'bold' }}>Find Your Next Crypto Community</Typography>
        <Typography variant="h6" noWrap style={{ fontSize: '18px', }}>Pre-Launch Crypto Communities Helps Build Trust Before The Launch</Typography>
        <Box style={{
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          border: '1px solid #000',
          borderRadius: 8,
          padding: 8,
          margin: 10,
          minWidth: 500,
          justifyContent: 'space-between'
        }}>
          <InputBase placeholder="Explore communities…" style={{ color: 'grey' }} />
          <SearchIcon style={{ color: 'grey' }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;