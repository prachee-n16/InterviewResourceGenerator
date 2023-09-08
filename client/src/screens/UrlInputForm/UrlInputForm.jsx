import React from 'react';

import { Box, Divider, Typography } from '@mui/material';
// Need much better names here
import JobPostingUrl from './JobPostingUrl';
import ManualPost from './ManualPost';
import { UrlProvider } from './UrlContext';

//TODO: This entire page needs to use app colors + look consistent with Landing page

export const UrlInputForm = () => {
  return (
    <UrlProvider>
      <Box sx={{ marginInline: 11, marginTop: 3 }} noValidate>
        <JobPostingUrl />
        <Divider sx={{ marginBlock: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 300 }}>
            or
          </Typography>
        </Divider>
        <ManualPost />
      </Box>
    </UrlProvider>
  );
};
