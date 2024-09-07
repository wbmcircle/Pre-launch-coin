import React from 'react'
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const heroBanner = () => {
  return (
    <Container>
      <Box className="bannerOuter">

        <Typography variant="h1" sx={{ color: '#fff' }} gutterBottom >
          Crypto Communities
        </Typography>
        <Link className='bannerLink' href="/create-coin" underline="none" color="#fff">Start A Community</Link>
      </Box>
    </Container>
  )
}

export default heroBanner