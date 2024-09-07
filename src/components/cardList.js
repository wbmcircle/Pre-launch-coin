import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import axios from 'axios';
import CountdownTimer from './CountdownTimer';
import LikeButton from './likeButton';
import { Container, Box, Grid, FormControl, Paper, InputBase, IconButton, Select, MenuItem, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const CardList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch data from WordPress endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('https://prelaunchcoins.com/backend/wp-json/wp/v2/cryptocoin?_embed');

        const formattedData = response.data.map(item => {
          console.log(item);
          const launchDate = new Date(item.meta.launchDate);
          const today = new Date();
          const launchTime = Math.floor((today - launchDate) / (1000 * 60 * 60 * 24)); // Difference in days
          return { ...item, launchTime };
        });
        setData(formattedData);
        setFilteredData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    applyFilter(event.target.value, searchTerm);
  };

  const applyFilter = (filterCriteria, searchQuery) => {
    let filtered = [...data];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.rendered.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply other filters
    if (filterCriteria === 'Least Likes') {
      filtered.sort((a, b) => a.meta.like_count - b.meta.like_count);
    } else if (filterCriteria === 'Most Likes') {
      filtered.sort((a, b) => b.meta.like_count - a.meta.like_count);
    } else if (filterCriteria === 'With Socials') {
      filtered = filtered.filter(item => item.meta.twitterLink || item.meta.telegramLink || item.meta.websiteLink);
    } else if (filterCriteria === 'Without Socials') {
      filtered = filtered.filter(item => !item.meta.twitterLink && !item.meta.telegramLink && !item.meta.websiteLink);
    } else if (filterCriteria === 'Time') {
      filtered.sort((a, b) => a.launchTime - b.launchTime);
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
    applyFilter(filter, searchTerm);
  }, [searchTerm]);

  return (
    <Container>
      <Box className="filterOuter" component="form">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <FormControl fullWidth className='filter'>
                <InputLabel id="simple-select">Filter</InputLabel>
                <Select
                  labelId="simple-select"
                  id="simple-select"
                  label="Filter"
                  value={filter}
                  onChange={handleFilterChange}
                >
                  <MenuItem value="Time">Time</MenuItem>
                  <MenuItem value="Most Likes">Most Likes</MenuItem>
                  <MenuItem value="Least Likes">Least Likes</MenuItem>
                  <MenuItem value="With Socials">With Socials</MenuItem>
                  <MenuItem value="Without Socials">Without Socials</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Display filtered data */}
      <ul>
        {filteredData.map((post) => (
          <Box className={`card-outer ${post.meta.solanaType}`} key={post.id} sx={{ width: '100%', display: 'flex', alignItems: 'center' }} >
            <Card sx={{ width: '100%', display: 'flex', p: '20px', backgroundColor: '#87878720', marginTop: '20px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }} className='cardMedia'>
                {post._embedded && post._embedded['wp:featuredmedia'] && (

                  <CardMedia
                    component="img"
                    sx={{ width: 50, height: '100%' }}
                    image={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.id}
                  />
                )}
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto', p: '0 0 0 20px' }} className="cardBox">
                    <Typography component="div" variant="h6" sx={{ color: '#fff', textAlign: 'left' }}>
                      <Link href={`/coin-details/${post.id}`} sx={{ color: '#fff' }} underline="none">
                        {post.title.rendered}
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
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
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
      </ul>
    </Container>
  );
}

export default CardList;