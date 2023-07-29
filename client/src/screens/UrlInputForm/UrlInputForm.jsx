import React from 'react'

import { Box, TextField, FormControlLabel, Checkbox, Typography } from '@mui/material'

export const UrlInputForm = () => {
  return (
    <Box 
      sx={{marginInline: 11, marginTop: 5}}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Typography variant='h6' sx={{fontWeight: 300}}>
        What's the job you're applying for?
      </Typography>
      <TextField 
          fullWidth 
          autoComplete={false}
          id="job-title" 
          placeholder="Software Developer" 
          variant="standard" 
          InputProps={{ disableUnderline: true }}
          sx={{
            borderBottom: '1px solid white',
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
            fontSize: 'large',
            fontWeight: 300,
          }}
        />
      <TextField
        label="Company"
        variant="outlined"
        sx={{
          marginBlock: 3,
          marginRight: 4,
          width: '47%'
        }}
      />
      <TextField
        label="Field"
        variant="outlined"
        sx={{
          marginBlock: 3,
          width: '50%'
        }}
      />

      <Typography variant='h6' sx={{fontWeight: 300, color: 'gray'}}>
        Paint us a picture of this role's ideal candidate - skills, superpowers, and all!
      </Typography>
      <TextField 
        label="Description"
        variant="outlined"
        multiline
        fullWidth
        minRows={10}
      />
    </Box>
  )
}