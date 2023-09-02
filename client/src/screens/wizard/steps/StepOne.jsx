import React, { useEffect } from 'react';
import { Input, OutlinedInput, Typography } from '@mui/material';
const StepOne = props => {
  const [data, setData] = React.useState({});
  useEffect(() => {
    if (props.data == null) {
      setData({
        placeholder: 'Jane Doe',
        fullWidth: true,
      });
    }
  }, [props, data]);

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
        {...data}
      />
    </div>
  );
};

export default StepOne;
