import React from 'react'

// MUI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import StreamRoundedIcon from '@mui/icons-material/StreamRounded';
import { Typography } from '@mui/material';

const Navbar = () => {
  return (
    <nav id="navbar">
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <StreamRoundedIcon fontSize="small" sx={{ mr: 1 }}/>
                    <Typography sx={{fontWeight: 'bold'}}>
                        upwork
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    </nav>
  )
}

export default Navbar