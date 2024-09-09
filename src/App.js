import { Button, CssBaseline } from '@mui/material';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProviderWrapper, useThemeContext } from './contexts/ThemeContext';
import './index.css';
import Home from './pages/Home';

function AppContent() {
  const { toggleTheme } = useThemeContext();

  return (
    <>
      <CssBaseline />
      <Button onClick={toggleTheme} variant="contained" style={{ position: 'absolute', top: 10, right: 20 }}>
        Toggle Theme
      </Button>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

function App() {
  return (
    <ThemeProviderWrapper>
      <AppContent />
    </ThemeProviderWrapper>
  );
}

export default App;