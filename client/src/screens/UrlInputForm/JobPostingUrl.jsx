import React, { useState, useEffect } from 'react';
import { TextField, Typography, Snackbar, Alert } from '@mui/material';
import { useUrl } from './UrlContext';

const JobPostingUrl = () => {
  const { url, setUrl, checkURL, setCheckUrl } = useUrl();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  function isValidUrl(str) {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    // Test the URL against the pattern
    return urlPattern.test(str);
  }

  useEffect(() => {
    if (checkURL == true) {
      console.log('run effect');
      handleSubmit();
    }
    setCheckUrl(false);
  }, [checkURL, setCheckUrl]);

  const handleUrlChange = event => {
    setUrl(event.target.value);
    if (openSnackbar === true) setOpenSnackbar(false);
  };

  const handleSubmit = event => {
    event && event.preventDefault();
    //Check if url is valid
    if (isValidUrl(url)) {
      // Do something with the form data, for example, send it to a server
      console.log('Form submitted:', url);
      setErrorMessage(
        `Unable to scrape data from ${url}; Please enter information manually.`
      );
      setOpenSnackbar(true);
      // Reset the form after submission if needed
      setUrl('');
    } else {
      setErrorMessage(`${url} does not correspond to a valid website URL.`);
      setOpenSnackbar(true);
    }
  };

  const handleCloseAlert = (event, reason) => {
    setOpenSnackbar(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" sx={{ fontWeight: 500 }}>
        Submit a link to the job posting.
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 300, marginBlockEnd: 1 }}
      >
        We will try our best to scrape the website and automatically fill out
        the fields for you.
      </Typography>
      <TextField
        fullWidth
        placeholder="www.linkedin.com/jobs/search?keywords=YourJobTitleHere"
        variant="outlined"
        sx={{
          marginBlock: 1,
          marginRight: 4,
        }}
        value={url}
        onChange={handleUrlChange}
      />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="error"
          sx={{ width: '100%' }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default JobPostingUrl;
