import { Box, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { default as React, useState, useEffect } from 'react';
import LIKE from '../assets/like.png'
import COMMENT from '../assets/comments.png'
import DEVICON from '../assets/check.png'
import SOCIAL from '../assets/social.png'
import COIN from "../assets/logo.png"

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
    }
  ];


  return (
    <Box>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Typography variant="h6" noWrap>CryptoList</Typography>
        <Box>
          <FormControl fullWidth className='filter'>
            <Select
              labelId="simple-select"
              id="simple-select"
              value="Time"
              onChange={() => { }}
            >
              <MenuItem value="Time">Time</MenuItem>
              <MenuItem value="Most Likes">Most Likes</MenuItem>
              <MenuItem value="Least Likes">Least Likes</MenuItem>
              <MenuItem value="With Socials">With Socials</MenuItem>
              <MenuItem value="Without Socials">Without Socials</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl fullWidth className='filter'>
            <Select
              labelId="simple-select"
              id="simple-select"
              value="Time"
              onChange={() => { }}
            >
              <MenuItem value="Time">Time</MenuItem>
              <MenuItem value="Most Likes">Most Likes</MenuItem>
              <MenuItem value="Least Likes">Least Likes</MenuItem>
              <MenuItem value="With Socials">With Socials</MenuItem>
              <MenuItem value="Without Socials">Without Socials</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl fullWidth className='filter'>
            <Select
              labelId="simple-select"
              id="simple-select"
              value="Time"
              onChange={() => { }}
            >
              <MenuItem value="Time">Time</MenuItem>
              <MenuItem value="Most Likes">Most Likes</MenuItem>
              <MenuItem value="Least Likes">Least Likes</MenuItem>
              <MenuItem value="With Socials">With Socials</MenuItem>
              <MenuItem value="Without Socials">Without Socials</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl fullWidth className='filter'>
            <Select
              labelId="simple-select"
              id="simple-select"
              value="Time"
              onChange={() => { }}
            >
              <MenuItem value="Time">Time</MenuItem>
              <MenuItem value="Most Likes">Most Likes</MenuItem>
              <MenuItem value="Least Likes">Least Likes</MenuItem>
              <MenuItem value="With Socials">With Socials</MenuItem>
              <MenuItem value="Without Socials">Without Socials</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl fullWidth className='filter'>
            <Select
              labelId="simple-select"
              id="simple-select"
              value="Time"
              onChange={() => { }}
            >
              <MenuItem value="Time">Time</MenuItem>
              <MenuItem value="Most Likes">Most Likes</MenuItem>
              <MenuItem value="Least Likes">Least Likes</MenuItem>
              <MenuItem value="With Socials">With Socials</MenuItem>
              <MenuItem value="Without Socials">Without Socials</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pair Info</TableCell>
              <TableCell>Launch Time</TableCell>
              <TableCell>Socials</TableCell>
              <TableCell>Bio</TableCell>
              <TableCell>Developer Plans</TableCell>
              <TableCell>Likes</TableCell>
              <TableCell>Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                  <Box style={{ display: 'flex' }}>
                    <img src={COIN} alt="social" width={32} height={32} />
                    {row.pairInfo}
                  </Box>
                </TableCell>
                <TableCell>{row.launchTime}</TableCell>
                <TableCell>
                  <img src={SOCIAL} alt="social" width={16} height={16} />
                  {/* {row.socials} */}
                </TableCell>
                <TableCell>{row.bio}</TableCell>
                <TableCell>
                  <Box style={{ display: "flex" }}>
                    <Box style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                      <img src={DEVICON} alt="devPlan" width={16} height={16} />
                      {row.developerPlans}
                    </Box>
                    <Box style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                      <img src={DEVICON} alt="devPlan" width={16} height={16} />
                      {row.developerPlans}
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <img src={LIKE} alt="like" width={16} height={16} />
                  {row.likes}
                </TableCell>
                <TableCell>
                  <img src={COMMENT} alt="comments" width={16} height={16} />
                  {row.comments}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CryptoList;