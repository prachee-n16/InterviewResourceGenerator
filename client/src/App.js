// Vendor imports
import React, { createContext, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

// Local Imports
import Navbar from './components/Navbar';
import UrlInputForm from './components/UrlInputForm';
import DataViewer from './components/DataViewer'
import theme from './theme'
import './App.css';

// Create the URL context
const UrlContext = createContext();

const UrlInputFormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '95vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.primary.contrastText,
}));

const DataViewerContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '95vh',
  width: '100vw',
  display: 'flex',
  color: theme.palette.primary.contrastText,
  padding: '2rem',
}));

function App() {
  const [url, setUrl] = useState('');

  // Function to update the URL value
  const updateUrl = (newUrl) => {
    setUrl(newUrl);
  };

  // Create the context value
  const contextValue = {
    url,
    updateUrl,
  };

  return (
    <UrlContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <Navbar/>
        {url === '' ? 
          <UrlInputFormContainer>
            <UrlInputForm/>
          </UrlInputFormContainer>
        : 
          <DataViewerContainer>
            <DataViewer/>
          </DataViewerContainer>
        }
      </ThemeProvider>
    </UrlContext.Provider>
  );
}

export { UrlContext };
export default App;
