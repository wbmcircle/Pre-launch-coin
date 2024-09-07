import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import './index.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1c1919', 
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;