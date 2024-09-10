import { Box, Button, Stack, Typography, TextField, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import Login from './Login';
import SignUp from './Signup';


const Sidebar = () => {

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        position: "fixed",
        borderRadius: 1,
        minWidth: "20%",
        overflow: "hidden",
        backgroundColor: isDarkMode ? "#2f3136" : "#F2F3F5",
        padding: 3,
        borderRight: isDarkMode ? '5px solid #202225' : "5px solid #E3E5E8",
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
          // color="#b9bbbe"
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
          // color="white"
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
          // color="#b9bbbe"
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
      {showSignUp && !showLogin && <SignUp setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />}
      {showLogin && !showSignUp && <Login setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />}
      {!showSignUp && !showLogin &&
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
              textTransform: 'none',
              fontWeight: "bold",
              fontSize: "15.3px",
            }}
            onClick={() => setShowLogin(true)}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              width: '100%',
              height: 44,
              backgroundColor: "transparent",
              backgroundSize: "100% 100%",
              color: isDarkMode ? "#B9BBBE" : "#4F5660",
              textTransform: 'none',
              fontWeight: "bold",
              fontSize: "15.3px",
            }}
            onClick={() => setShowSignUp(true)}
          >
            Create Account
          </Button>
        </Stack>
      }
    </Box>
  );
};

export default Sidebar;