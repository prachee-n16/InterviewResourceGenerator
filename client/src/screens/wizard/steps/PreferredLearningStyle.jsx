import React, { useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography, FormControlLabel } from '@mui/material';
import { useUrl } from '../../UrlInputForm/UrlContext';

const PreferredLearningStyle = () => {
  const { setJobPostDetails } = useUrl();
  const [selectedValues, setSelectedValues] = React.useState({
    video: false,
    article: false,
    interactive: false,
    other: false,
  });

  useEffect(() => {
    setJobPostDetails(prev => ({
      ...prev,
      preferredLearningStyle: selectedValues,
    }));
  }, [selectedValues]);

  const handleChange = name => event => {
    setSelectedValues({
      ...selectedValues,
      [name]: event.target.checked,
    });
  };

  return (
    <FormControl>
      <FormLabel id="preferred-learning-style">
        Choose your preferred learning style
      </FormLabel>
      <FormControlLabel
        control={
          <Checkbox
            name="video"
            checked={selectedValues.video}
            onChange={handleChange('video')}
          />
        }
        label={
          <Typography variant="body1">Watching Educational Videos</Typography>
        }
      />
      <FormControlLabel
        control={
          <Checkbox
            name="article"
            checked={selectedValues.article}
            onChange={handleChange('article')}
          />
        }
        label={
          <Typography variant="body1">Reading Articles and Texts</Typography>
        }
      />
      <FormControlLabel
        control={
          <Checkbox
            name="interactive"
            checked={selectedValues.interactive}
            onChange={handleChange('interactive')}
          />
        }
        label={
          <Typography variant="body1">
            Interactive experiences i.e. Mock Interviews
          </Typography>
        }
      />
      <FormControlLabel
        control={
          <Checkbox
            name="other"
            checked={selectedValues.other}
            onChange={handleChange('other')}
          />
        }
        label={
          <Typography variant="body1">
            I prefer other learning methods
          </Typography>
        }
      />
    </FormControl>
  );
};

export default PreferredLearningStyle;
