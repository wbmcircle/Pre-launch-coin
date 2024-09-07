import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import CountdownTimer from './CountdownTimer';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

const PostData = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch the post data by ID
        const postResponse = await axios.get(`https://prelaunchcoins.com/backend/wp-json/wp/v2/cryptocoin/${postId}?_embed`);
        setPost(postResponse.data);
        console.log(post);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const DevPlans = post.meta.developerPlans;

  return (
    <>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        badgeContent={
          <Chip className='profileName' label={post.meta.ticker} sx={{ backgroundColor: '#fff', marginLeft: 'auto', marginRight: 'auto' }} />
        }
        className='profileOuter'
      >
        {post._embedded && post._embedded['wp:featuredmedia'] && (<Avatar alt="Travis Howard" src={post._embedded['wp:featuredmedia'][0].source_url} sx={{ width: "120px", height: "120px", fontSize: '40px' }} />)}

      </Badge>
      <Box sx={{ paddingTop: '40px', color: '#fff' }} >
        <Typography variant="h4" gutterBottom >
          {post.title.rendered}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box className="btnStyle" sx={{ marginTop: '40px' }}>
            <Typography variant="subtitle1" gutterBottom sx={{ marginBottom: '0' }}>
              <CountdownTimer targetDateTime={post.meta.launchDate} returnType="timer" />
            </Typography>
          </Box>
          <Box className="btnStyle" sx={{ marginTop: '40px' }}>
            <Stack direction="row" spacing={3}>
              {post.meta.twitterLink && (
                <Link href={post.meta.twitterLink}>
                  <XIcon fontSize="large" sx={{ color: '#fff' }} />
                </Link>
              )}
              {post.meta.telegramLink && (
                <Link href={post.meta.telegramLink}>
                  <TelegramIcon fontSize="large" sx={{ color: '#fff' }} />
                </Link>
              )}
              {post.meta.websiteLink && (
                <Link href={post.meta.websiteLink}>
                  <LanguageIcon fontSize="large" sx={{ color: '#fff' }} />
                </Link>
              )}
            </Stack>
          </Box>
          <Box className="btnStyle" sx={{ marginTop: '40px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <FavoriteIcon sx={{ color: 'red', paddingRight: '10px' }} />
              <Typography variant="subtitle1" component="div" sx={{ color: '#fff' }}>
                1
              </Typography>
            </Box>
          </Box>
        </Box>


      </Box>
      <Box sx={{ margin: '40px auto 0 auto' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#fff' }} >
          Dev Plans
        </Typography>

        <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap" sx={{ padding: '0px 20px', margin: '30px 0px' }}>
          {DevPlans.map((plan, index) => (
            <Chip label={plan} key={index} sx={{ color: '#fff', backgroundColor: '#0E151F', border: '1px solid #262931', borderRadius: '0.4em' }} />
          ))}

        </Stack>
      </Box>

    </>
  )
}

export default PostData