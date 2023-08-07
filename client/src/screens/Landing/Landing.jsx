import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

import './Landing.css';

export const Landing = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center', // Center vertically
          height: '90vh', // Use full viewport height
          ml: 12,
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #1560BD 30%, #002366 90%)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
            }}
          >
            Generate resources <br></br>
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              color: '#121212',
            }}
          >
            at the speed of lightning!
          </Typography>
          {/* This needs to be updated with a description */}
          <Typography
            variant="subtitle1"
            sx={{ width: '700px', marginBlock: 2, color: 'gray' }}
          >
            Are you preparing for a job interview and seeking valuable resources
            to enhance your chances of success? This all-in-one website is
            designed to provide comprehensive support for interview preparation.
            With upwork, you'll gain access to a wealth of information, company
            insights, targeted interview questions, and curated reading
            materials.
          </Typography>
          <Link to="input-description">
            <Button
              variant="outlined"
              color="primary"
              endIcon={<NavigateNextRoundedIcon />}
            >
              Get Started
            </Button>
          </Link>
        </Box>
      </Box>
      <Box>
        <ul class="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Box>
    </>
  );
};
