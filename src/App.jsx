import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Index from './pages/Index';
import './App.css';

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Box>
  );
}

export default App;