// Vendor imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

// Local Imports
import Navbar from './components/Navbar';
import UrlInputForm from './components/screens/UrlInputForm';
import DataViewer from './components/screens/DataViewer'
import {UrlInputFormContainer, DataViewerContainer} from './utilities/containers'

// Styles
import theme from './theme'
import './App.css';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={
              <UrlInputFormContainer>
                <UrlInputForm />
              </UrlInputFormContainer>
            } 
          />
          <Route exact path="/" element={
              <DataViewerContainer>
                <DataViewer />
              </DataViewerContainer>
            } 
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;