import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const FamiliarityRanking = () => {
  const [ranking, setRanking] = useState('very-familiar');

  const handleRankingChange = event => {
    setRanking(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="familiarity"
        name="familiarity"
        value={ranking}
        onChange={handleRankingChange}
      >
        <FormControlLabel
          value="very-familiar"
          control={<Radio />}
          label="Very Familiar"
        />
        <FormControlLabel
          value="familiar"
          control={<Radio />}
          label="Familiar"
        />
        <FormControlLabel value="neutral" control={<Radio />} label="Neutral" />
        <FormControlLabel
          value="unfamiliar"
          control={<Radio />}
          label="Unfamiliar"
        />
        <FormControlLabel
          value="not-familiar"
          control={<Radio />}
          label="Not Familiar"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default FamiliarityRanking;
