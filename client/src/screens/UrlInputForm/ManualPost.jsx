import React, { useState } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const ManualPost = () => {
  // States to make all inputs controlled
  const [jobPostDetails, setJobPostDetails] = useState({
    jobTitle: '',
    company: '',
    jobField: '',
    description: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    console.log(jobPostDetails);
    setJobPostDetails({
      jobTitle: '',
      company: '',
      jobField: '',
      description: '',
    });
  };

  const handleInputChange = event => {
    const { id, value } = event.target;
    setJobPostDetails(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" sx={{ fontWeight: 300 }}>
        What's the job you're applying for?
      </Typography>
      <TextField
        fullWidth
        required
        id="jobTitle"
        placeholder="Enter Job Title"
        variant="standard"
        InputProps={{ disableUnderline: true }}
        sx={{
          borderBottom: '1px solid white',
          fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
          fontSize: 'large',
          fontWeight: 300,
        }}
        onChange={handleInputChange}
        value={jobPostDetails.jobTitle}
      />

      <Typography variant="h6" sx={{ fontWeight: 300, marginBlock: 2 }}>
        Tell us more about your dream company!
      </Typography>
      <TextField
        value={jobPostDetails.company}
        required
        label="Company"
        variant="outlined"
        sx={{
          marginRight: 4,
          width: '47%',
        }}
        id="company"
        onChange={handleInputChange}
      />
      {/* Convert this to drop down? */}
      <TextField
        value={jobPostDetails.jobField}
        required
        label="Field"
        variant="outlined"
        sx={{
          width: '50%',
        }}
        id="jobField"
        onChange={handleInputChange}
      />

      <Typography variant="h6" sx={{ fontWeight: 300, marginBlockStart: 2 }}>
        Paint us a picture of this role's ideal candidate - skills, superpowers,
        and all!
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 300, marginBlockEnd: 1 }}
      >
        Enter information relevant to the candidate, from responsibilities to
        qualifications, to get the best results.
      </Typography>
      <TextField
        value={jobPostDetails.description}
        required
        label="Description"
        variant="outlined"
        multiline
        fullWidth
        id="description"
        minRows={8}
        sx={{
          marginBlockEnd: 3,
        }}
        onChange={handleInputChange}
      />
      <Box
        sx={{
          width: '88.3%',
          display: 'flex',
          position: 'fixed',
          bottom: '16px', // Adjust the distance from the bottom as needed
        }}
      >
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<NavigateNextRoundedIcon />}
        >
          SUBMIT
        </Button>
      </Box>
    </form>
  );
};

export default ManualPost;
