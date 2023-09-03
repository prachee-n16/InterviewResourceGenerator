import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';

const IndustryDropdown = () => {
  const [industry, setIndustry] = useState('');

  const handleIndustryChange = event => {
    setIndustry(event.target.value);
  };

  return (
    <FormControl style={{ minWidth: '560px' }}>
      <Typography variant="overline" htmlFor="industry-dropdown">
        Select Industry
      </Typography>
      <Select
        labelId="industry-dropdown"
        id="industry-dropdown"
        value={industry}
        onChange={handleIndustryChange}
      >
        <MenuItem value="">Select an Industry</MenuItem>
        <MenuItem value="technology">Technology</MenuItem>
        <MenuItem value="finance">Finance</MenuItem>
        <MenuItem value="healthcare">Healthcare</MenuItem>
        <MenuItem value="education">Education</MenuItem>
        <MenuItem value="manufacturing">Manufacturing</MenuItem>
        <MenuItem value="retail">Retail</MenuItem>
        <MenuItem value="entertainment">Entertainment</MenuItem>
        <MenuItem value="marketing">Marketing</MenuItem>
        <MenuItem value="transportation">Transportation</MenuItem>
        {/* Add more industries as needed */}
      </Select>
    </FormControl>
  );
};

export default IndustryDropdown;
