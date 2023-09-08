import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import the useDispatch hook
import { useUrl } from './UrlContext';

import {
  Box,
  Backdrop,
  TextField,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

import { saveJobPostDetails } from '../../redux/actions/jobPostActions';

const ManualPost = () => {
  const { url, setCheckUrl } = useUrl();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // States to make all inputs controlled
  const [jobPostDetails, setJobPostDetails] = useState({
    jobTitle: '',
    company: '',
    jobField: '',
    description: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    if (url != '') {
      setCheckUrl(true);
    } else {
      setJobPostDetails({
        jobTitle: '',
        company: '',
        jobField: '',
        description: '',
      });
      setIsLoading(true);

      try {
        const response = await fetch('http://127.0.0.1:8000/find-job-posting', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jobPostDetails),
          mode: 'cors',
        });

        if (response.ok) {
          // Request was successful, handle the response if needed
          const data = await response.json();
          console.log('Response from the backend API:', data);

          dispatch(saveJobPostDetails(data));

          navigate('/summarize-results');
        } else {
          // Request failed, handle the error if needed
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
      setIsLoading(false);
    }
  };

  const handleInputChange = event => {
    const { id, value } = event.target;
    setJobPostDetails(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          What's the job you're applying for?
        </Typography>
        <TextField
          fullWidth
          required={url == '' ? true : false}
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
          required={url == '' ? true : false}
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
          required={url == '' ? true : false}
          label="Field"
          variant="outlined"
          sx={{
            width: '50%',
          }}
          id="jobField"
          onChange={handleInputChange}
        />

        <Typography variant="h6" sx={{ fontWeight: 300, marginBlockStart: 2 }}>
          Paint us a picture of this role's ideal candidate - skills,
          superpowers, and all!
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
          required={url == '' ? true : false}
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
      <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default ManualPost;
