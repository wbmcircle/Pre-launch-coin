import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import Logo from '../assets/logo.png';


const Sidebar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        padding: 8,
        borderRadius: 1,
        overflow: "hidden",
        backgroundColor: "#2f3136",
        padding: 3,
        borderRight: '5px solid #000'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: 2,
            backgroundImage: `url(${Logo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>
      <Box>
        <Typography
          variant="h6"
          align="center"
          color="#b9bbbe"
          sx={{
            marginTop: 2,
            fontSize: 15
          }}
        >
          Welcome To
        </Typography>
        <Typography
          variant="h4"
          align="center"
          color="white"
          fontWeight="bold"
          sx={{
            marginTop: 1,
            fontSize: 25
          }}
        >
          Pre Launch Coins
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="#b9bbbe"
          sx={{
            marginTop: 1
          }}
        >
          Explore Coins Before They Launch
        </Typography>
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{ marginTop: 4 }}
      >
        <Box
          sx={{
            width: 10,
            height: 10,
            backgroundColor: "#8750e1",
            borderRadius: "50%",
          }}
        />
        <Typography variant="body2" color="#b9bbbe">
          72 Coins Launching Soon
        </Typography>
      </Stack>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ marginTop: 4 }}
      >
        <Button
          variant="contained"
          sx={{
            width: '100%',
            height: 44,
            backgroundColor: "#5865F2",
            backgroundSize: "100% 100%",
            color: "white",
            fontWeight: "bold",
            fontSize: "15.3px",
          }}
        >
          Login
        </Button>
        <Typography variant="body2" color="#b9bbbe">
          Create Account
        </Typography>
      </Stack>
    </Box>
  );
};

export default Sidebar;