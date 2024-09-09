import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CryptoList from '../components/CryptoList';
import Navbar from '../components/Navbar';
import TopDeveloper from '../components/TopDevelopers';

const Home = () => {

  const [cryptoList, setCryptoList] = useState(true);

  return (
    <div>
      <Grid container>
        <Grid item style={{ flex: '0 0 20%' }}>
          <Sidebar />
        </Grid>
        <Grid item style={{ flex: '0 0 80%' }}>
          <div style={{ padding: "10px 20px" }}>
            <Navbar setCryptoList={setCryptoList} />
            <Header />
            {cryptoList ?
              <CryptoList />
              :
              <TopDeveloper />
            }
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;