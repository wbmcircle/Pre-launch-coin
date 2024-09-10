import { Box, Button, Grid, Stack, useTheme, Typography } from '@mui/material';
import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonIcon from '@mui/icons-material/Person';
import COIN1 from '../assets/exchang1.png';
import COIN2 from '../assets/exchang2.png';

const itemData = [
  {
    img: Logo,
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
];

const cryptos = [
  {
    pairInfo: "$door/Sol",
    launchTime: "2h 33m 45s",
    img: COIN1
  },
  {
    pairInfo: "$door/Sol",
    launchTime: "2h 33m 45s",
    img: COIN2
  }
];

const TmpSidebar = () => {

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const [cryptoList, setCryptoList] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 1,
        borderRight: isDarkMode ? '5px solid #202225' : "5px solid #E3E5E8",
      }}
    >
      <Grid container spacing={1} >
        <Grid item xs={2}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: "8px",
              paddingRight: 0
            }}
          >
            <ImageList cols={1} rowHeight={48} gap={4} sx={{ overflowY: 'unset' }}>
              {itemData.map((item) => (
                <ImageListItem key={item.img} sx={{ marginBottom: "5px" }} >
                  <img
                    // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: "55px",
                      padding: "1px",
                      borderRadius: "8px"
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box
            sx={{
              backgroundColor: isDarkMode ? "#2f3136" : "#F2F3F5",
              borderRadius: "8px",
              padding: "12px",
              minHeight: '100vh'
            }}
          >
            <Typography
              variant="h6"
              align="left"
              // color="#b9bbbe"
              sx={{
                fontSize: 25,
                fontWeight: "bold",
                marginBottom: 1
              }}
            >
              Following
            </Typography>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: cryptoList ? "transparent" : "#5865F2",
                  color: isDarkMode ? "#FFFFFF" : "#060607",
                  fontWeight: "bold",
                  textTransform: 'none',
                  fontSize: "16px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
                startIcon={<EmojiEmotionsIcon fontSize="small" sx={{
                  height: "22px",
                  width: "22px"
                }} />}
                onClick={() => { }}
              >
                Cryptos
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  // height: 44,
                  backgroundColor: !cryptoList ? "transparent" : "#5865F2",
                  color: isDarkMode ? "#FFFFFF" : "#060607",
                  textTransform: 'none',
                  fontWeight: "bold",
                  fontSize: "16px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center"
                }}
                startIcon={<PersonIcon fontSize="small" sx={{
                  height: "22px",
                  width: "22px"
                }} />}
                onClick={() => { }}
              >
                Top Developers
              </Button>
            </Stack>
            <Box className="mt-3">
              <Typography
                variant="h6"
                align="left"
                // color="#b9bbbe"
                sx={{
                  fontSize: 13,
                  fontWeight: "bold",
                  marginBottom: 1
                }}
              >
                Cryptos
              </Typography>
              {cryptos.map((crypto) => (
                <Box className="flex  justify-between">
                  <Box className="flex">
                    <img src={crypto.img} alt="coin" style={{ height: "37px", width: "37px" }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '12px', fontWeight: 'bold' }}>
                      <Typography sx={{ fontWeight: 'bold', fontSize: "16px" }}>{crypto.pairInfo}</Typography>
                      <Typography sx={{ fontSize: "16px" }}>Launched</Typography>
                    </Box>
                  </Box>
                  <Box className="flex items-end">
                    <Typography
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#8750e1",
                        borderRadius: "50%",
                      }}
                    ></Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TmpSidebar;