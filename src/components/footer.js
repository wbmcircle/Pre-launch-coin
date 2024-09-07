import React from 'react'
import Box from '@mui/material/Box';
import Logo from '../assets/logo.png';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const footer = () => {
  return (
    <Box sx={{ borderTop: '1px solid #ccc', marginTop: '50px' }}>
      <Container>
        <Box sx={{ display: 'flex', padding: '20px 0px', alignItems: 'center', justifyContent: 'space-between', color: '#fff' }} className="footer">
          <Link href="/" ><img
            className='img-reponsive'
            src={Logo}
            alt="logo"
            loading="lazy"
          /></Link>
          <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center' }}>
            © 2024 All Rights Reserved
          </Typography>

        </Box>
      </Container>
    </Box>
  )
}

export default footer