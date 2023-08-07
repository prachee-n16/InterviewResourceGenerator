import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import StreamRoundedIcon from '@mui/icons-material/StreamRounded';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'white',
        color: '#121212',
        borderBottom: '1px solid lightgray',
        fontWeight: 'bold',
        fontSize: 12,
      }}
    >
      <Toolbar variant="dense">
        <StreamRoundedIcon
          sx={{
            marginLeft: 9,
          }}
        />
        <Typography
          variant="h6"
          sx={{
            marginLeft: 2,
          }}
        >
          upwork.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
