import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TuneIcon from '@mui/icons-material/Tune';
import XIcon from '@mui/icons-material/X';
import { Avatar, Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import * as React from 'react';
import Select from 'react-dropdown-select';
import avatar from "../assets/avatar.png";
import Coin from '../assets/exchang1.png';
import Coin2 from '../assets/exchang2.png';
import titleBackground from '../assets/title-background.png';

const topDevs = [
  {
    name: "Crypto Whale",
    username: "@crypto_Whale94",
    avatar: avatar,
    about: "Follow For The Best Returns",
    communities: [
      { name: "$Worm/SOL", status: "Launched", image: Coin2 },
      { name: "$DOG/SOL", status: "Launched", image: Coin2 },
      { name: "$Ecat/SOL", status: "Launched", image: Coin },
      { name: "$queen/SOL", status: "Launching Soon", image: Coin },
      { name: "$drulpepe/SOL", status: "Launching Soon", image: Coin },
      { name: "$911/SOL", status: "Launching Soon", image: Coin },
      { name: "$door/SOL", status: "Launching Later", image: Coin },
      { name: "$orange/SOL", status: "Launching Later", image: Coin }
    ]
  },
  {
    name: "Crypto Whale",
    username: "@crypto_Whale91",
    avatar: avatar,
    about: "Follow For The Best Returns",
    communities: [
      { name: "$Worm/SOL", status: "Launched", image: Coin2 },
      { name: "$DOG/SOL", status: "Launched", image: Coin2 },
      { name: "$Ecat/SOL", status: "Launched", image: Coin },
      { name: "$queen/SOL", status: "Launching Soon", image: Coin },
      { name: "$drulpepe/SOL", status: "Launching Soon", image: Coin },
      { name: "$911/SOL", status: "Launching Soon", image: Coin },
      { name: "$door/SOL", status: "Launching Later", image: Coin },
      { name: "$orange/SOL", status: "Launching Later", image: Coin }
    ]
  },
  {
    name: "Crypto Whale",
    username: "@crypto_Whale97",
    avatar: avatar,
    about: "Follow For The Best Returns",
    communities: [
      { name: "$Worm/SOL", status: "Launched", image: Coin2 },
      { name: "$DOG/SOL", status: "Launched", image: Coin2 },
      { name: "$Ecat/SOL", status: "Launched", image: Coin },
      { name: "$queen/SOL", status: "Launching Soon", image: Coin },
      { name: "$drulpepe/SOL", status: "Launching Soon", image: Coin },
      { name: "$911/SOL", status: "Launching Soon", image: Coin },
      { name: "$door/SOL", status: "Launching Later", image: Coin },
      { name: "$orange/SOL", status: "Launching Later", image: Coin }
    ]
  },
  {
    name: "Crypto Whale",
    username: "@crypto_Whale92",
    avatar: avatar,
    about: "Follow For The Best Returns",
    communities: [
      { name: "$Worm/SOL", status: "Launched", image: Coin2 },
      { name: "$DOG/SOL", status: "Launched", image: Coin2 },
      { name: "$Ecat/SOL", status: "Launched", image: Coin },
      { name: "$queen/SOL", status: "Launching Soon", image: Coin },
      { name: "$drulpepe/SOL", status: "Launching Soon", image: Coin },
      { name: "$911/SOL", status: "Launching Soon", image: Coin },
      { name: "$door/SOL", status: "Launching Later", image: Coin },
      { name: "$orange/SOL", status: "Launching Later", image: Coin }
    ]
  },
  // Add more developers as needed
];

const options = [
  {
    value: 1,
    label: 'Leanne'
  },
  {
    value: 2,
    label: 'Ervin'
  }
];

const filterOptions = [
  {
    name: "Crypto Launch Time",
  },
  {
    name: "Crypto Impressions"
  },
  {
    name: "Likes"
  },
  {
    name: "Comments"
  },
  {
    name: "Socials"
  }
]

export default function TopDeveloper() {
  return (
    <Box>
      <Box className="mb-3" sx={{
        backgroundColor: "#202225",
        padding: "12px 0",
        borderRadius: 3,
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: 'center',
          paddingLeft: "12px"
        }}>
          <Box style={{ marginRight: 16 }}>
            <Typography variant="h6" noWrap style={{ fontWeight: 'bold' }}>Top Developers</Typography>
          </Box>
          {filterOptions.map((filterOption) => {
            return (
              <Box className="mr-2">
                <Select
                  key={filterOption.name}
                  options={options}
                  onChange={(value) => {
                    console.log("--->", value)
                  }}
                  color='black'
                  style={{
                    borderRadius: 20,
                    padding: "4px 12px",
                    fontSize: "14px"
                  }}
                  multi
                  contentRenderer={({ props, state }) => (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                      <TuneIcon style={{ marginRight: 8 }} />
                      {filterOption.name}{state.values.length}
                    </div>
                  )}
                  dropdownRenderer={({ props, state, methods }) => (
                    <div style={{ backgroundColor: '#0f0f0f' }}>
                      {props.options.map((option) => (
                        <div
                          key={option.value}
                          onClick={() => methods.addItem(option)}
                          style={{
                            padding: '8px 12px',
                            cursor: 'pointer',
                            backgroundColor: state.values.includes(option) ? '#666' : '#0f0f0f',
                            fontSize: "14px"
                          }}
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {topDevs.map((dev) => (
            <Grid item xs={12} sm={6} md={3} key={dev.username}>
              <Card sx={{ borderRadius: "20px", backgroundColor: "#2c2f33", color: "#fff" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={titleBackground}
                  alt="background"
                />
                <CardContent sx={{
                  textAlign: 'center',
                  padding: "8px",
                  '&:last-child': {
                    paddingBottom: '8px'
                  }
                }}
                >
                  <Box className="flex justify-between" sx={{ paddingBottom: '14px' }}>
                    <Box className="flex">
                      <Avatar
                        alt={dev.name}
                        src={dev.avatar}
                        sx={{ width: 75, height: 75, marginTop: '-50px', border: '5px solid #2c2f33' }}
                      />
                      <Box>
                        <Typography variant="h1" component="div" sx={{ marginTop: 2, fontSize: "16px", marginTop: 0 }}>
                          {dev.name}
                        </Typography>
                        <Typography variant="h1" component="div" sx={{ marginTop: 2, fontSize: "14px", marginTop: 0 }}>
                          {dev.username}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="flex">
                      <Box sx={{ color: "#B9BBBE", display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', fontSize: "12px" }}>
                        <FavoriteIcon sx={{ color: 'red', height: 15 }} />
                        212
                      </Box>
                      <Box sx={{ color: "#B9BBBE", display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', fontSize: "12px" }}>
                        <CommentIcon sx={{ height: 15, color: "white" }} />
                        521
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ backgroundColor: "#17181A", borderRadius: "15px", padding: "12px 8px" }}>
                    <Box className="flex flex-row">
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Button
                            sx={{
                              backgroundColor: "#202225",
                              color: "white",
                              fontWeight: "bold",
                              textTransform: 'none',
                              fontSize: "12px",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              borderRadius: '6px'
                            }}
                            startIcon={<XIcon fontSize="small" sx={{
                              height: "18px",
                              width: "18px"
                            }} />}
                          >
                            {dev.username}
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Box>
                            <Typography variant="h6" component="div" align='left' sx={{ fontSize: "12px", position: 'relative', display: 'inline-block', '::after': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '100%', height: '1px', backgroundColor: 'white' } }}>
                              ABOUNT ME
                            </Typography>
                            <Typography variant="body2" sx={{ marginTop: 1, fontSize: "12px" }}>
                              {dev.about}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box className="p-2"
                      sx={{
                        marginTop: 2,
                        borderTop: "1px solid #43414B",
                        borderBottom: "1px solid #43414B",
                      }}>
                      <Box className="flex flex-start">
                        <Typography variant="h6" component="div" align='left' sx={{ fontSize: "13px", position: 'relative', display: 'inline-block', '::after': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '100%', height: '1px', backgroundColor: 'white' } }}>
                          Crypto Communities
                        </Typography>
                      </Box>
                      <Box className="flex flex-col pt-2">
                        <Grid container spacing={2}>
                          {dev.communities.map((community, index) => (
                            <Grid item xs={6} key={index}>
                              <Box className="flex flex-row items-center space-x-2">
                                <img src={community.image} alt={community.name} className="w-8 h-8 " />
                                <Box className="flex flex-col items-start justify-start">
                                  <Typography variant="body2" sx={{ fontSize: "12px" }}>
                                    {community.name}
                                  </Typography>
                                  <Typography variant="body2" sx={{ textAlign: "left", fontSize: "12px" }} className={`status-${community.status.toLowerCase().replace(' ', '-')}`}>
                                    {community.status}
                                  </Typography>
                                </Box>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box >
    </Box>
  );
}
