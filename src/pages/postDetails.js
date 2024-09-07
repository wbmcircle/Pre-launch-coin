import React from 'react';
import { useParams } from 'react-router-dom';
// import ProfileAvatar from '../components/profileAvatar';
import PostData from '../components/postData';
// import DevPlans from '../components/devPlans';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Footer from '../components/footer';
import Header from '../components/header';

const PostDetails = () => {
  const { id } = useParams();
    return (
      <>
    <Header/>
    <Container sx={{padding:'30px 0px'}}>
      <Box className="profileOuter" sx={{ width: '100%', maxWidth: '600px', height:'fit-content', borderRadius: '20px',padding: '10px', margin: "0 auto", textAlign: 'center'}}>
      <PostData postId={id}/>
    </Box>
    </Container>
    <Footer/>
    </>
       
  )
}

export default PostDetails