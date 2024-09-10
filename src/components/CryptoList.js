import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import TelegramIcon from '@mui/icons-material/Telegram';
import TuneIcon from '@mui/icons-material/Tune';
import VerifiedIcon from '@mui/icons-material/Verified';
import XIcon from '@mui/icons-material/X';
import { Box, TableRow, Typography, useTheme } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { default as React } from 'react';
import Select from 'react-dropdown-select';
import styled from 'styled-components';
import COIN1 from '../assets/exchang1.png';
import COIN2 from '../assets/exchang2.png';
import LOGO from "../assets/logo.png";

const CryptoList = () => {

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const rows = [
    {
      pairInfo: "$door/Sol",
      launchTime: "2h 33m 45s",
      socials: "X",
      bio: "The Door is opened",
      developerPlans: "Original Meme",
      likes: "433",
      comments: "512"
    },
    {
      pairInfo: "$door/Sol",
      launchTime: "2h 33m 45s",
      socials: "X",
      bio: "The Door is opened",
      developerPlans: "Original Meme",
      likes: "433",
      comments: "3234"
    }
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
      name: "Network",
    },
    {
      name: "Developer Plans"
    },
    {
      name: "Times"
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

  return (
    <Box>
      <Box className="mb-3" sx={{
        backgroundColor: isDarkMode ? "#202225" : "#F2F3F5",
        padding: "12px 0",
        borderRadius: 3,
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: 'center',
          paddingLeft: "8px"
        }}>
          <Box style={{ marginRight: 16 }}>
            <Typography variant="h6" noWrap style={{ fontWeight: 'bold' }}>CryptoList</Typography>
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
                      {filterOption.name} {state.values.length}
                    </div>
                  )}
                  dropdownRenderer={({ props, state, methods }) => (
                    <div sx={{ backgroundColor: isDarkMode ? "#202225" : "#F2F3F5", }}>
                      {props.options.map((option) => (
                        <div
                          key={option.value}
                          onClick={() => methods.addItem(option)}
                          style={{
                            padding: '8px 12px',
                            cursor: 'pointer',
                            fontSize: "14px",
                            backgroundColor: state.values.includes(option) ? isDarkMode ? '#666666' : '#AAAAAA' : isDarkMode ? '#0F0F0F' : '#F0F0F0',
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
        <Box className="flex mt-2 text-center">
          <Typography style={{ flex: '0 0 13%', padding: "0 16px" }} className='text-center'>Pair Info</Typography>
          <Typography style={{ flex: '0 0 12%', padding: "0 16px" }}>Launch Time</Typography>
          <Typography style={{ flex: '0 0 10%', padding: "0 16px" }}>Socials</Typography>
          <Typography style={{ flex: '0 0 15%', padding: "0 16px" }}>Bio</Typography>
          <Typography style={{ flex: '0 0 30%', padding: "0 16px" }}>Developer Plans</Typography>
          <Typography style={{ flex: '0 0 10%', padding: "0 16px" }}>Likes</Typography>
          <Typography style={{ flex: '0 0 10%', padding: "0 16px" }}>Comments</Typography>
        </Box>
      </Box>
      <Box>
        {rows.map((row, index) => (
          <Box key={row.comments} sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: isDarkMode ? index % 2 !== 0 && '#202225' : index % 2 !== 0 && '#F2F3F5',
            border: isDarkMode ? '1px solid #202225' : "1px solid #F2F3F5",
            borderRadius: '8px',
            padding: '5px',
            position: "relative"
          }}>
            <Box className="absolute flex flex-col space-y-2" sx={{
              left: "-4px"
            }}>
              <img src={COIN1} alt='coin1' style={{ height: "12px", width: '12px' }} />
              <img src={COIN2} alt="coin2" style={{ height: "12px", width: '12px' }} />
            </Box>
            <Box sx={{ width: '13%', display: 'flex', justifyContent: 'space-between', paddingLeft: "20px" }}>
              <Box className="flex items-center justify-start">
                <img src={LOGO} alt="coin" style={{ height: "44px", width: "44px" }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '12px', fontWeight: 'bold' }}>
                  <Typography sx={{ fontWeight: 'bold' }}>{row.pairInfo}</Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>Launched</Typography>
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
            <Box sx={{ width: '12%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <QueryBuilderIcon sx={{ height: 14 }} />
              {row.launchTime}
            </Box>
            <Box sx={{ width: '10%', display: 'flex', justifyContent: 'center' }}>
              <XIcon sx={{ color: 'grey', height: "14px" }} />
              <TelegramIcon sx={{ color: 'grey', height: "14px" }} />
            </Box>
            <Box sx={{ width: '15%', display: 'flex', justifyContent: 'center' }}>
              {row.bio}
            </Box>
            <Box sx={{ width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', paddingRight: 4 }}>
                <VerifiedIcon sx={{ color: '#3BA55C', height: "18px" }} htmlColor='white' />
                {row.developerPlans}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <VerifiedIcon sx={{ color: '#3BA55C', height: "18px" }} />
                {row.developerPlans}
              </Box>
            </Box>
            <Box sx={{ width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <FavoriteIcon sx={{ color: 'red' }} />
              {row.likes}
            </Box>
            <Box sx={{ width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <CommentIcon />
              <Typography sx={{ fontSize: "14px" }}>
                {row.comments}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CryptoList;