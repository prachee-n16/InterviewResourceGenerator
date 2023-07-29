// VENDOR Imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

// local imports
import Navbar from './components/Navbar';
import { Landing } from './screens/Landing/Landing';
import { UrlInputForm } from './screens/UrlInputForm/UrlInputForm';
// style imports
import theme from './assets/styles/theme';
import './App.css';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/input-description" element={<UrlInputForm />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
