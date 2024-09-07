import React from 'react'
import Header from '../components/header';
import CryptoForm from '../components/cryptoForm';
import Footer from '../components/footer';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



const createForm = () => {
  const token= localStorage.getItem('walletAddress');
  // if(!token){
  //   alert("You need to Connect Wallet first");
  //   window.location.href = '/';
  // }
  return (
    <>    
    <Header/>
    <Container>
    <Typography className="formTitle" variant="h1" sx={{color:'#fff', padding:'80px 0px'}} gutterBottom >Create A Crypto Community</Typography>
    <CryptoForm/>
    </Container>
    <Footer/>
    </>

  )
}

export default createForm