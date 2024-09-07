import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CallMadeIcon from '@mui/icons-material/CallMade';

const UserDetails = () => {
  const token = localStorage.getItem('walletAddress');
  const accountInfo = JSON.parse(localStorage.getItem('accountInfo'));

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item sm={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} className='discWall'>
          </Grid>
          <Grid item sm={12} md={8}>
            <Grid container spacing={2}>
              <Grid item sm={2} md={2}>
                <img src={accountInfo.profileImage} alt='userimg' className='userImage' />
              </Grid>
              <Grid item sm={6} md={5}>
                <Typography variant="h5" gutterBottom sx={{ color: '#fff', textAlign: 'left' }}>
                  {accountInfo.username}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" gutterBottom sx={{ color: '#fff', textAlign: 'left' }}>
                      0 Followers
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                      <Link href="#" >
                        <FavoriteIcon sx={{ color: 'red', paddingRight: '10px' }} />
                      </Link>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle2" gutterBottom sx={{ color: 'red', textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                      Like Received: 0 <FavoriteIcon sx={{ color: 'red', paddingLeft: '5px', paddingRight: '5px' }} />
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                      <Typography variant="subtitle2" gutterBottom sx={{ color: 'green', textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                        Mentions Received: 0 <ChatBubbleOutlineIcon sx={{ color: 'green', paddingLeft: '10px' }} />
                      </Typography>
                    </Box>
                  </Box>
                </Box>

              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item sm={12} md={8} >
                <Box className="linkCopy">
                  <Box className="linkCopyInner" sx={{ width: '100%', maxWidth: '450px', backgroundColor: '#29293a', borderRadius: '7px', marginBottom: '15px', overflow: 'hidden', padding: '10px 0px 0px 0px', padding: '7px 10px', marginLeft: '20px', color: '#fff', textAlign: 'left', border: '1px solid #fff', marginTop: '10px' }}>{token}</Box>
                  <Typography variant="subtitle2" gutterBottom sx={{ color: '#fff', textAlign: 'right', display: 'flex', justifyContent: 'flex-end' }}>
                    View on solscan <CallMadeIcon sx={{ color: '#fff', paddingRight: '10px' }} />
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

    </>
  )
}

export default UserDetails 