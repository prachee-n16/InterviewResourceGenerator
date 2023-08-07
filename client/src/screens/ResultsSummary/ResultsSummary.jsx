import React from 'react';
import { useSelector } from 'react-redux';
import { Backdrop, CircularProgress } from '@mui/material';

const ResultsSummary = () => {
  // Replace 'jobPost' with the key of the reducer in your rootReducer
  const jobPostDetails = useSelector(state => state.jobPost);

  // Check if jobPostDetails is not yet defined or null
  if (!jobPostDetails) {
    return (
      <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <div>
      <p>Job Title: {jobPostDetails.url_title}</p>
      <p>Company: {jobPostDetails.url_company}</p>
      <p>Job Field: {jobPostDetails.url_jobField}</p>
      <p>Description: {jobPostDetails.url_description}</p>
    </div>
  );
};

export default ResultsSummary;
