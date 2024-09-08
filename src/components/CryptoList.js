import TuneIcon from '@mui/icons-material/Tune';
import { Box, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography, makeStyles } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { default as React } from 'react';
import styled from 'styled-components';
import Select from 'react-dropdown-select';
import DEVICON from '../assets/check.png';
import LIKE from '../assets/like.png';
import LOGO from "../assets/logo.png";
import COIN1 from '../assets/exchang1.png'
import COIN2 from '../assets/exchang2.png'
import SOCIAL from '../assets/social.png';
import VerifiedIcon from '@mui/icons-material/Verified'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#36393f",
    border: "1px solid #2f3136",
    borderRadius: "10px"
  },
  '&:nth-of-type(even)': {
    backgroundColor: "#2f3136",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const CryptoList = () => {
  const rows = [
    {
      pairInfo: "$door/Sol",
      launchTime: "2h 33m 45s",
      socials: "X",
      bio: "The Door is opened",
      developerPlans: "Original Meme",
      likes: "433",
      comments: "3234"
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
          paddingLeft: "8px"
        }}>
          <Box style={{ marginRight: 10 }}>
            <Typography variant="h6" noWrap style={{ fontWeight: 'bold' }}>CryptoList</Typography>
          </Box>
          <Select
            options={options}
            onChange={(value) => {
              console.log("--->", value)
            }}
            color='black'
            style={{
              width: 160,
              borderRadius: 20,
              padding: "4px 12px",
              marginRight: 10,
              fontSize: "14px"
            }}
            multi
            contentRenderer={({ props, state }) => (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TuneIcon style={{ marginRight: 8 }} />
                Network {state.values.length}
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
          <Select
            options={options}
            onChange={(value) => {
              console.log("--->", value)
            }}
            color='black'
            style={{
              width: 215,
              borderRadius: 20,
              padding: "4px 12px",
              marginRight: 10,
              fontSize: "14px"
            }}
            multi
            contentRenderer={({ props, state }) => (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TuneIcon style={{ marginRight: 8 }} />
                Developer Plans {state.values.length}
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
          <Select
            options={options}
            onChange={(value) => {
              console.log("--->", value)
            }}
            color='black'
            style={{
              width: 150,
              borderRadius: 20,
              padding: "4px 12px",
              marginRight: 10,
              fontSize: "14px"
            }}
            multi
            contentRenderer={({ props, state }) => (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TuneIcon style={{ marginRight: 8 }} />
                Times {state.values.length}
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
          <Select
            options={options}
            onChange={(value) => {
              console.log("--->", value)
            }}
            color='black'
            style={{
              width: 150,
              borderRadius: 20,
              padding: "4px 12px",
              marginRight: 10,
              fontSize: "14px"
            }}
            multi
            contentRenderer={({ props, state }) => (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TuneIcon style={{ marginRight: 8 }} />
                Likes {state.values.length}
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
          <Select
            options={options}
            onChange={(value) => {
              console.log("--->", value)
            }}
            color='black'
            style={{
              width: 171,
              borderRadius: 20,
              padding: "4px 12px",
              marginRight: 10,
              fontSize: "14px"
            }}
            multi
            contentRenderer={({ props, state }) => (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TuneIcon style={{ marginRight: 8 }} />
                Comments {state.values.length}
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
                      fontSize: '14px',
                      backgroundColor: state.values.includes(option) ? '#666' : '#0f0f0f'
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          />
          <Select
            options={options}
            onChange={(value) => {
              console.log("--->", value)
            }}
            color='black'
            style={{
              width: 150,
              borderRadius: 20,
              padding: "4px 12px",
              fontSize: "14px"
            }}
            multi
            contentRenderer={({ props, state }) => (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TuneIcon style={{ marginRight: 8 }} />
                Socials {state.values.length}
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
          <Box key={row.name} sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: index % 2 === 0 ? '#2f3136' : '#26272a',
            border: '1px solid #26272a',
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
            <Box sx={{ width: '13%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: "20px" }}>
              <img src={LOGO} alt="coin" style={{ height: "44px", width: "44px" }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '12px', fontWeight: 'bold' }}>
                <Typography sx={{ fontWeight: 'bold', color: "#B9BBBE" }}>{row.pairInfo}</Typography>
                <Typography sx={{ fontWeight: 'bold', color: "#B9BBBE" }}>Launched</Typography>
              </Box>
            </Box>
            <Box sx={{ width: '12%', color: "#B9BBBE", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <QueryBuilderIcon sx={{ height: 14 }} />
              {row.launchTime}
            </Box>
            <Box sx={{ width: '10%', display: 'flex', justifyContent: 'center' }}>
              <XIcon sx={{ color: 'grey', height: "14px" }} />
              <TelegramIcon sx={{ color: 'grey', height: "14px" }} />
            </Box>
            <Box sx={{ width: '15%', color: "#B9BBBE", display: 'flex', justifyContent: 'center' }}>
              {row.bio}
            </Box>
            <Box sx={{ width: '30%', color: "#B9BBBE", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', paddingRight: 4 }}>
                <VerifiedIcon sx={{ color: 'green' }} />
                {row.developerPlans}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <VerifiedIcon sx={{ color: 'green' }} />
                {row.developerPlans}
              </Box>
            </Box>
            <Box sx={{ width: '10%', color: "#B9BBBE", display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <FavoriteIcon sx={{ color: 'red' }} />
              {row.likes}
            </Box>
            <Box sx={{ width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <CommentIcon />
              <Typography sx={{ fontSize: "14px", color: "#B9BBBE" }}>
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