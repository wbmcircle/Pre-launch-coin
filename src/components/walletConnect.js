import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';
import Link from '@mui/material/Link';

Modal.setAppElement('#root'); // Bind modal to your app element (accessibility)

const PhantomWalletLogin = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isNewUser, setIsNewUser] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  useEffect(() => {

    const token = localStorage.getItem('walletAddress');

    if (token) {
      setWalletAddress(token);
    } else {
      setWalletAddress(null);
    }

  }, []);

  const checkUserExists = async (publicKey) => {


    try {
      const response = await axios.post('https://prelaunchcoins.com/backend/wp-json/coin-api/v1/check-wallet', { walletAddress: publicKey });
      window.location.href = '/';
      if (response.data.exists) {
        // Automatically log in the user
        localStorage.setItem('walletAddress', publicKey);
        localStorage.setItem('accountInfo', JSON.stringify(response.data));
      } else {
        // Prompt the user to create a username
        setIsNewUser(true);
        setModalIsOpen(true); // Open the modal

      }
    } catch (error) {

      console.error('Error checking wallet:', error);
    }


  };



  const handleCreateUser = async (e) => {
    e.preventDefault();


    if (!username) {
      alert("Username is required");
    } else if (!email) {
      alert("Email is required");
    } else if (!bio) {
      alert("bio is required");
    } else if (!profileImage) {
      alert("Image is required");
    } else {
      const formData = new FormData();
      formData.append('walletAddress', walletAddress);
      formData.append('username', username);
      formData.append('email', email);
      formData.append('bio', bio);
      formData.append('profileImage', profileImage);
      console.log(formData);


      try {
        const response = await axios.post('https://prelaunchcoins.com/backend/wp-json/coin-api/v1/register-wallet', formData, {

        });

        if (response.data.success) {
          alert('User created and logged in successfully');
          setModalIsOpen(false); // Close the modal
          // Handle redirect or user session management
        } else {
          alert('User creation failed');
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }

    }


  };

  const handleFileChange = (event) => {
    setProfileImage(event.target.files[0]);
  };

  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        const response = await window.solana.connect();
        const publicKey = response.publicKey.toString();
        checkUserExists(publicKey);
        setWalletAddress(publicKey);

      } catch (error) {
        console.error('Wallet connection failed:', error);
      }
    } else {
      alert('Please install Phantom Wallet');
    }
  };

  const handleLogout = () => {
    // Clear user info and token from local storage
    localStorage.removeItem('walletAddress');
    localStorage.removeItem('accountInfo'); // Assuming you store the token with the key 'token'


    // Optionally, redirect to the login page or home page
    window.location.href = '/'; // or '/home' depending on your app's routing
  };

  return (
    <div>
      {walletAddress ? (
        isNewUser ? (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="User Registration Form"
            className='modForm'
          >
            <Box
              component="form"
              onSubmit={handleCreateUser}
              noValidate
              autoComplete="off"
            >

              <>
                <Grid className='formOuter'>
                  <Grid item xs={12} >
                    <FormControl sx={{ width: '100%', backgroundColor: '#29293a', borderRadius: '2px', marginBottom: '15px' }}>
                      <TextField id="outlined-name" label="User Name*"
                        name="username" onChange={(e) => setUsername(e.target.value)} variant="outlined" sx={{ color: '#fff' }} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} >
                    <FormControl sx={{ width: '100%', backgroundColor: '#29293a', borderRadius: '2px', marginBottom: '15px' }}>
                      <TextField type="email" id="outlined-ticker" label="Email*"
                        name="userEmail" onChange={(e) => setEmail(e.target.value)} variant="outlined" sx={{ color: '#fff' }} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} >
                    <FormControl sx={{ width: '100%', backgroundColor: '#29293a', borderRadius: '2px', marginBottom: '15px' }}>
                      <TextField id="outlined-description" label="Bio*" onChange={(e) => setBio(e.target.value)} name="userBio" variant="outlined" sx={{ color: '#fff' }} multiline rows={4} />
                    </FormControl>
                  </Grid>


                  <Grid item xs={12} >
                    <FormControl sx={{ width: '100%', backgroundColor: '#29293a', borderRadius: '2px', marginBottom: '15px', padding: '10px 0px 0px 0px' }} className='imageForm'>
                      <FormLabel id="demo-radio-buttons-group-label" sx={{ textAlign: "left", padding: "0px 10px", }}>Profile Image*</FormLabel>
                      <Input type="file" name="userImage" onChange={handleFileChange} sx={{ p: '0px 10px 10px 10px' }} />
                    </FormControl>

                  </Grid>
                </Grid>
                <Grid item xs={12} >
                  <Button variant="contained" type="submit" sx={{ width: '100%', marginTop: '20px' }}>Sign up</Button>
                </Grid>
              </>



            </Box>
          </Modal>
        ) : (
          <><Link className='headerLink' href="/user-profile" underline="none" color="#fff">Profile<EastIcon /></Link>
            <Link className='headerLink' onClick={handleLogout} underline="none" color="#fff">Disconnect Wallet<EastIcon /></Link>
          </>

        )
      ) : (
        <Link className='headerLink' underline="none" color="#fff" onClick={connectWallet}>Connect Phantom Wallet<EastIcon /></Link>
      )}
    </div>
  );
};

export default PhantomWalletLogin;
