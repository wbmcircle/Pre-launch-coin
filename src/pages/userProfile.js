import React, { useEffect } from 'react';
import UserDetails from '../components/userDetails';
import Container from '@mui/material/Container';
import Footer from '../components/footer';
import Header from '../components/header';
import Typography from '@mui/material/Typography';
import UserCardList from '../components/userCoins';
import Link from '@mui/material/Link';


const UserProfile = () => {
  const token= localStorage.getItem('walletAddress');
  if(!token){
    window.location.href = '/';
  }
  return (
 
    <>
    <Header/>
    
    {token ? (
      <>
      <Container>
       <UserDetails/>
      <Typography variant="h3" sx={{color:'#fff', padding:'80px 0px 50px'}} gutterBottom >Communities Created</Typography>
      </Container>
      <UserCardList token={token}/>
      </>
      
      

    ):(
      <Container>
         <Link className='headerLink'   underline="none" color="#fff">Please Login</Link>
         </Container>
    )}
   
    
    <Footer/>
    </>
  )
}

export default UserProfile