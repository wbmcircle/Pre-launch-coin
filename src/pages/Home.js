import React from 'react';
import { Grid } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CryptoList from '../components/CryptoList';

const Home = () => {
  return (
    <div>
      <Grid container>
        <Grid item style={{ flex: '0 0 20%' }}>
          <Sidebar />
        </Grid>
        <Grid item style={{ flex: '0 0 80%' }}>
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