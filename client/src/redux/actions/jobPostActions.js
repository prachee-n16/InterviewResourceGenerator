export const saveJobPostDetails = jobPostDetails => {
  return {
    type: 'SAVE_JOB_POST_DETAILS',
    payload: jobPostDetails,
  };
};
