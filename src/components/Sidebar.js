import { Box, Button, Stack, Typography, TextField, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';


const Sidebar = () => {

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const signUp = async () => {
    return;
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userName,
        email: userEmail,
        password: userPwd,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Sign up successful:', data);
      setShowSignUp(false);
      setShowLogin(true);
      // Handle successful sign up (e.g., redirect, show message)
    } else {
      const errorData = await response.json();
      console.error('Sign up error:', errorData);
      // Handle sign up error (e.g., show error message)
    }
  }

  const logIn = async () => {
    return;
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userName,
        password: userPwd,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Sign In successful:', data);
      setShowSignUp(false);
      setShowLogin(false);
      // Handle successful sign in (e.g., redirect, show message)
    } else {
      const errorData = await response.json();
      console.error('Sign In error:', errorData);
      // Handle sign in error (e.g., show error message)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        position: "fixed",
        borderRadius: 1,
        overflow: "hidden",
        backgroundColor: isDarkMode ? "#2f3136" : "#F2F3F5",
        padding: 3,
        borderRight: isDarkMode ? '5px solid #202225' : "5px solid #E3E5E8"
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
      {showSignUp && !showLogin && <Stack
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        spacing={2}
        sx={{ marginTop: 4 }}
      >
        <Typography sx={{ fontSize: "14px" }}>Email</Typography>
        <TextField
          variant="outlined"
          placeholder='Email'
          fullWidth
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          InputProps={{
            style: {
              backgroundColor: '#40444b',
              color: '#b9bbbe',
              borderRadius: "8px",
            }
          }}
        />
        <Typography sx={{ fontSize: "14px", textAlign: "left" }}>Username</Typography>
        <TextField
          variant="outlined"
          fullWidth
          placeholder='Username'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          InputProps={{
            style: {
              backgroundColor: '#40444b',
              color: '#b9bbbe',
              borderRadius: "8px",
            }
          }}
          InputLabelProps={{
            style: {
              color: '#b9bbbe'
            }
          }}
        />
        <Typography sx={{ fontSize: "14px" }}>Password</Typography>
        <TextField
          type="password"
          variant="outlined"
          fullWidth
          placeholder='Password'
          value={userPwd}
          onChange={(e) => setUserPwd(e.target.value)}
          InputProps={{
            style: {
              backgroundColor: '#40444b',
              color: '#b9bbbe',
              borderRadius: "8px",
            }
          }}
          InputLabelProps={{
            style: {
              color: '#b9bbbe'
            }
          }}
        />
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
          onClick={signUp}
        >
          Create Account
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
          onClick={() => {
            setShowSignUp(false);
            setShowLogin(true);
          }}
        >
          Login Instead
        </Button>
      </Stack>}
      {showLogin && !showSignUp && <Stack
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        spacing={2}
        sx={{ marginTop: 4 }}
      >
        <Typography sx={{ fontSize: "14px", textAlign: "left" }}>Username</Typography>
        <TextField
          variant="outlined"
          fullWidth
          placeholder='Username'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          InputProps={{
            style: {
              backgroundColor: '#40444b',
              color: '#b9bbbe',
              borderRadius: "8px",
            }
          }}
          InputLabelProps={{
            style: {
              color: '#b9bbbe'
            }
          }}
        />
        <Typography sx={{ fontSize: "14px" }}>Password</Typography>
        <TextField
          type="password"
          variant="outlined"
          fullWidth
          placeholder='Password'
          value={userPwd}
          onChange={(e) => setUserPwd(e.target.value)}
          InputProps={{
            style: {
              backgroundColor: '#40444b',
              color: '#b9bbbe',
              borderRadius: "8px",
            }
          }}
          InputLabelProps={{
            style: {
              color: '#b9bbbe'
            }
          }}
        />
        <Button
          variant="contained"
          sx={{
            width: '100%',
            height: 44,
            backgroundColor: "#5865F2",
            backgroundSize: "100% 100%",
            textTransform: 'none',
            fontWeight: "bold",
            fontSize: "15.3px",
          }}
          onClick={logIn}
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
            fontWeight: "bold",
            textTransform: 'none',
            fontSize: "15.3px",
          }}
          onClick={() => {
            setShowLogin(false)
            setShowSignUp(true)
          }}
        >
          Create Account Instead
        </Button>
      </Stack>}
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