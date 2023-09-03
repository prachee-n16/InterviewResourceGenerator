import React, { useEffect } from 'react';
import { Input, OutlinedInput, Typography } from '@mui/material';
const StepOne = props => {
  return (
    <div>
      <Typography sx={{ mt: 2 }} variant="overline">
        {props.data && props.data.text}
      </Typography>
      <OutlinedInput
        sx={{
          fontSize: '20px',
        }}
        {...props.data}
      />
    </div>
  );
};

export default StepOne;
