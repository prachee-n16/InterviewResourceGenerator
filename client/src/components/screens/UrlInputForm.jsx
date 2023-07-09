import React from 'react'

import { Typography, TextField } from '@mui/material'
import './UrlInputForm.css'
import { borderColor } from '@mui/system'

const UrlInputForm = () => {
  return (
    <form className='wrapper'>
      <div>
        <Typography variant='h6' sx={{fontWeight: 300, marginBottom: '20px'}}>
          What's the job you're applying for?
        </Typography>
        <TextField 
          fullWidth 
          autoComplete={false}
          id="job-title" 
          placeholder="Job Title" 
          variant="standard" 
          InputProps={{ disableUnderline: true }}
          sx={{
            borderBottom: '1px solid white',
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
            fontSize: 'large',
            fontWeight: 300,
          }}
        />
      </div>
      <div>
        <TextField
            id="job-department" 
            label="Department" 
            variant="filled" 
            sx={{
              fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
              fontSize: 'large',
              fontWeight: 300,
              marginTop: '32px'
            }}
            InputLabelProps={{
              shrink: false,
            }}
          />
      </div>
    </form>
  )
}

export default UrlInputForm