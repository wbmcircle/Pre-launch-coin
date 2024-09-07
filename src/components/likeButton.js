import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LikeButton = ({ postId, likeCounts }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const token = localStorage.getItem('walletAddress');

  useEffect(() => {
    // Check if the user is logged in (this could be a check to localStorage, a global state, etc.)

    if (token) {
      setUserLoggedIn(true);
      // Fetch initial like status and count from the server
      setLikeCount(likeCounts);
    }
  }, []);



  const handleLikeClick = async () => {
    if (!userLoggedIn) {
      alert('You must be logged in to like or dislike this post.');
      return;
    }

    try {
      // Toggle like status and update count
      const newLikedStatus = !liked;
      const userInfo = JSON.parse(localStorage.getItem('accountInfo'));

      const response = await axios.post('https://prelaunchcoins.com/backend/wp-json/coin-api/v1/like-status', JSON.stringify({ 'liked': newLikedStatus, 'postId': postId, 'userId': userInfo.id }));
      if (response.data.success == true) {
        // Update like status and count based on the server response
        setLiked(newLikedStatus);
        setLikeCount(response.data.latest_count);
      } else {
        console.error('Failed to update like status');
      }
    } catch (error) {
      console.error('Error handling like click:', error);
    }
  };

  return (
    <CardContent sx={{ display: 'flex' }}>
      <FavoriteIcon sx={{ color: 'red', paddingRight: '10px' }} onClick={handleLikeClick} disabled={!userLoggedIn} />
      <Typography variant="subtitle1" component="div" sx={{ color: '#fff' }}>
        {likeCount} {likeCount === 1 ? 'Like' : 'Likes'}
      </Typography>
    </CardContent>
  );
};

export default LikeButton;
