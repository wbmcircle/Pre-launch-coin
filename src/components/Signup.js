import { Button, Stack, TextField, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function SignUp({ setShowSignUp, setShowLogin }) {

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

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

  return (
    <Stack
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
    </Stack>
  )
}