import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Button, Divider, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';

import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

import './Landing.css';

export const Landing = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
          <Button
            variant="outlined"
            color="primary"
            endIcon={<NavigateNextRoundedIcon />}
            onClick={handleOpenModal}
          >
            Get Started
          </Button>
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

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            minWidth: 500,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: 4,
            }}
          >
            <Typography variant="h4" sx={{}}>
              Unlock
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #1560BD 30%, #002366 90%)',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
              }}
            >
              valuable
            </Typography>
            <Typography variant="h4" sx={{}}>
              insights!
            </Typography>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link to="/input-description">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  background:
                    'linear-gradient(45deg, #1560BD 30%, #002366 90%)',
                  mt: 4,
                }}
              >
                Take the Quick Survey
              </Button>
            </Link>
            <Link to="/input-form">
              <Button fullWidth variant="outlined" color="primary">
                Dive into the Detailed Survey
              </Button>
            </Link>
          </div>
        </Box>
      </Modal>
    </>
  );
};
