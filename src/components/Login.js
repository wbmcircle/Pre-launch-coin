import { Box, Button, Stack, Typography, TextField, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function Login({ setShowLogin, setShowSignUp }) {

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const [userName, setUserName] = useState("");
  const [userPwd, setUserPwd] = useState("");

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
    <Stack
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
    </Stack>
  )
}