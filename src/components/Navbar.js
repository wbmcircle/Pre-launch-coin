import React from 'react';
import { Box, Button } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = ({ setCryptoList }) => {
  return (
    <Box className="flex mb-2">
      <Button
        variant="contained"
        sx={{
          width: 150,
          backgroundColor: "#5865F2",
          backgroundSize: "100% 100%",
          color: "white",
          fontWeight: "bold",
          textTransform: 'none',
          fontSize: "12px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginRight: "4px"
        }}
        startIcon={<EmojiEmotionsIcon fontSize="small" sx={{
          height: "18px",
          width: "18px"
        }} />}
        onClick={() => { setCryptoList(true) }}
      >
        Cryptos
      </Button>
      <Button
        variant="contained"
        sx={{
          width: 150,
          // height: 44,
          backgroundColor: "#5865F2",
          backgroundSize: "100% 100%",
          color: "white",
          textTransform: 'none',
          fontWeight: "bold",
          fontSize: "12px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
        startIcon={<PersonIcon fontSize="small" />}
        onClick={() => { setCryptoList(false) }}
      >
        Top Developers
      </Button>
    </Box>
  )
}

export default Navbar;