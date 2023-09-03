import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const InterviewPrepTime = () => {
  const [timeframe, setTimeframe] = useState('');

  const handleChange = event => {
    setTimeframe(event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Timeframe for Interview Prep</InputLabel>
      <Select
        value={timeframe}
        onChange={handleChange}
        label="Timeframe for Interview Prep"
      >
        <MenuItem value="1 day">1 day</MenuItem>
        <MenuItem value="1 week">1 week</MenuItem>
        <MenuItem value="1-2 months">1-2 months</MenuItem>
        <MenuItem value="3-4 months">3-4 months</MenuItem>
        <MenuItem value="6 months +">6 months +</MenuItem>
      </Select>
    </FormControl>
  );
};

export default InterviewPrepTime;
