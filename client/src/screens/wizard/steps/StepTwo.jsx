import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MuiPhoneNumber, { MuiTelInput } from 'mui-tel-input';
import { useUrl } from '../../UrlInputForm/UrlContext';

import StepOne from './StepOne';
import { Typography } from '@mui/material';

const StepTwo = () => {
  const { jobPostDetails, setJobPostDetails } = useUrl();
  const [value, setValue] = React.useState(0);
  // You can set initial phone number or leave it empty
  const [phoneNumber, setPhoneNumber] = React.useState('123456789');

  // Handle phone number changes
  const handlePhoneNumberChange = value => {
    setPhoneNumber(value);
    setJobPostDetails(prev => ({
      ...prev,
      contactDetails: value,
    }));
  };

  useEffect(() => {
    if (value == 0) {
      setJobPostDetails(prev => ({
        ...prev,
        contactMethod: 'email',
      }));
    } else if (value == 1) {
      setJobPostDetails(prev => ({
        ...prev,
        contactMethod: 'phone',
      }));
    } else {
      setJobPostDetails(prev => ({
        ...prev,
        contactMethod: 'none',
        contactDetails: 'none',
      }));
    }
  }, [value]);

  const emailData = {
    text: 'Enter your email address',
    type: 'email',
    placeholder: 'janedoe@gmail.com',
    fullWidth: true,
    id: 'contactDetails',
  };

  return (
    <>
      <Stack sx={{ mb: value == 2 ? 0 : 2 }} direction="row" spacing={1}>
        <Chip
          icon={<EmailRoundedIcon />}
          color={value == 0 ? 'primary' : 'default'}
          variant="outlined"
          iconPosition="start"
          label="Email"
          onClick={() => setValue(0)}
          sx={{ px: 1 }}
        />
        <Chip
          icon={<LocalPhoneRoundedIcon />}
          color={value == 1 ? 'primary' : 'default'}
          variant="outlined"
          iconPosition="start"
          label="Phone"
          onClick={() => setValue(1)}
          sx={{ px: 1 }}
        />
        <Chip
          icon={<CloseRoundedIcon />}
          color={value == 2 ? 'primary' : 'default'}
          variant="outlined"
          iconPosition="start"
          label="None"
          onClick={() => setValue(2)}
          sx={{ px: 1 }}
        />
      </Stack>
      {value == 0 && (
        <>
          <StepOne data={emailData} />
        </>
      )}
      {value == 1 && (
        <div>
          <Typography sx={{ mt: 2 }} variant="overline">
            Enter your phone number
          </Typography>
          <MuiTelInput
            fullWidth
            defaultCountry={'us'} // Set the default country
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
      )}
    </>
  );
};

export default StepTwo;
