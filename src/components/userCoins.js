import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import axios from 'axios';
import CountdownTimer from './CountdownTimer';
import LikeButton from './likeButton';


const UserCardList = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const token = localStorage.getItem('walletAddress');
  // Fetch custom posts from WordPress
  useEffect(() => {
    axios.get('https://prelaunchcoins.com/backend/wp-json/coin-api/v1/posts-by-user?usertoken=' + token + '')
      .then(response => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle filter input change
  const handleFilterChange = (event) => {
    setFilterCategory(event.target.value);
  };

  // Filter and search posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterCategory ? post.categories.includes(Number(filterCategory)) : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <Container>
      {filteredPosts.map(post => (
        <Box className={`card-outer ${post.meta.solanaType}`} key={post.id} sx={{ width: '100%', display: 'flex', alignItems: 'center' }} >
          <Card sx={{ width: '100%', display: 'flex', p: '20px', backgroundColor: '#87878720', marginTop: '20px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }} className='cardMedia'>
              {post.thumbnail && post.thumbnail && (

                <CardMedia
                  component="img"
                  sx={{ width: 50, height: '100%' }}
                  image={post.thumbnail}
                  alt={post.id}
                />
              )}
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto', p: '0 0 0 20px' }} className="cardBox">
                  <Typography component="div" variant="h6" sx={{ color: '#fff', textAlign: 'left' }}>
                    <Link href={`/coin-details/${post.id}`} sx={{ color: '#fff' }} underline="none">
                      {post.title}
                    </Link>
                    <CountdownTimer targetDateTime={post.meta.launchDate} returnType="class" />
                  </Typography>
                  <Typography variant="subtitle1" component="div" sx={{ color: '#fff', textAlign: 'left' }}>
                    <CountdownTimer targetDateTime={post.meta.launchDate} returnType="timer" />
                  </Typography>
                </CardContent>

              </Box>
            </Box>
            <Box>
              <CardContent sx={{ width: '300px' }} className='carDesc'>
                <Typography variant="subtitle1" component="div" sx={{ color: '#fff', width: '100%', textAlign: 'left' }}>
                  <div dangerouslySetInnerHTML={{ __html: post.description }} />
                </Typography>
              </CardContent>
            </Box>
            <Box>
              <CardContent sx={{ width: '150px' }}>
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
              </CardContent>
            </Box>
            <Box>
              <LikeButton postId={post.id} likeCounts={post.meta.like_count}></LikeButton>
            </Box>

          </Card>
        </Box>
      ))}
    </Container>
  )
}

export default UserCardList;