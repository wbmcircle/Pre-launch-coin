import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TmpSidebar from '../components/TmpSidebar';
import CryptoList from '../components/CryptoList';
import { useTheme } from '@mui/material';
import Navbar from '../components/Navbar';
import TopDeveloper from '../components/TopDevelopers';

const Home = () => {

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const [cryptoList, setCryptoList] = useState(true);

  return (
    <div>
      <Grid container>
        <Grid item style={{ flex: '0 0 20%' }}>
          <Sidebar />
        </Grid>
        <Grid item style={{ flex: '0 0 80%' }}>
          <div style={{ padding: "10px 20px", backgroundColor: isDarkMode ? "#2f3136" : "#FFFFFF", minHeight: "100vh" }}>
            <Navbar cryptoList={cryptoList} setCryptoList={setCryptoList} />
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