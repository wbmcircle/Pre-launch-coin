import TuneIcon from '@mui/icons-material/Tune';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { default as React } from 'react';
import Select from 'react-dropdown-select';
import DEVICON from '../assets/check.png';
import COMMENT from '../assets/comments.png';
import LIKE from '../assets/like.png';
import COIN from "../assets/logo.png";
import SOCIAL from '../assets/social.png';

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
      <Box style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>
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
            width: 215,
            borderRadius: 20,
            padding: "8px 12px",
            marginRight: 10
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
            padding: "8px 12px",
            marginRight: 10
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
            padding: "8px 12px",
            marginRight: 10
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
                    backgroundColor: state.values.includes(option) ? '#666' : '#0f0f0f'
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        />
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
                    <Box style={{ display: 'flex', flexDirection: 'column' }}>
                      <Box>
                        {row.pairInfo}
                      </Box>
                      <Box>
                        Launched
                      </Box>
                    </Box>
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
                    <Box style={{ display: 'flex', flexDirection: "column", alignItems: 'center', paddingRight: 4 }}>
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
                  <Box style={{ display: 'flex', justifyContent: "space-between" }}>
                    <img src={LIKE} alt="like" width={16} height={16} />
                    {row.likes}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box style={{ display: 'flex', justifyContent: "space-between" }}>
                    <img src={COMMENT} alt="comments" width={16} height={16} />
                    {row.comments}
                  </Box>
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