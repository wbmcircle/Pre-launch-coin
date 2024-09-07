import React from 'react';
import { Grid } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CryptoList from '../components/CryptoList';

const Home = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <div style={{ padding: 20 }}>
            <Header />
            <CryptoList />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;