import React, { useEffect } from 'react';
import { Input, OutlinedInput, Typography } from '@mui/material';
import { useUrl } from '../../UrlInputForm/UrlContext';

const StepOne = props => {
  const { setJobPostDetails } = useUrl();
  const [inputValue, setInputValue] = React.useState('');

  // Handle changes to the input value
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (props.data.id) {
      setJobPostDetails(prev => ({
        ...prev,
        [props.data.id]: inputValue,
      }));
    }
  }, [inputValue, setJobPostDetails]);

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
        value={inputValue} // Set the input value from state
        onChange={handleInputChange} // Handle input changes
      />
    </div>
  );
};

export default StepOne;
