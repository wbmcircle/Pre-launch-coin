import { Search as SearchIcon } from '@mui/icons-material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonIcon from '@mui/icons-material/Person';
import { AppBar, Box, Button, InputBase, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Background from '../assets/background.png';

const Header = () => {

  return (
    <Box
      position="static"
      style={{
        // backgroundImage: `url(${Background})`,
        // backgroundSize: 'cover',
        borderRadius: 10,
        marginBottom: 20,
      }} >
      
      <Toolbar style={{
        padding: 10,
        borderRadius: 10, 
        display: 'flex',
        flexDirection: "column",
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        color: "white"
      }}>
        <Typography variant="h4" noWrap style={{ fontSize: '25px', fontWeight: 'bold', marginBottom: 10 }}>Find Your Next Crypto Community</Typography>
        <Typography variant="h6" noWrap style={{ fontSize: '18px', marginBottom: 10 }}>Pre-Launch Crypto Communities Helps Build Trust Before The Launch</Typography>
        <Box style={{
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          border: '1px solid #000',
          borderRadius: 8,
          padding: 8,
          minWidth: 660,
          justifyContent: 'space-between'
        }}>
          <InputBase placeholder="Explore Pre-Launch Crypto Pages" style={{ color: 'grey', fontSize: 17 }} />
          <SearchIcon style={{ color: 'grey' }} height={17} />
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Header;