import React, { useState, useEffect } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Divider,
  Typography,
  IconButton,
  Button,
  Input,
  OutlinedInput,
} from '@mui/material';
import stepsData from './data/wizardSteps.json';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

const steps = [
  {
    label: 'Personal Information',
  },
  {
    label: 'Company Information',
  },
  {
    label: 'Job Details',
  },
  {
    label: 'Interview Type',
  },
  {
    label: 'Preparation Resources',
  },
  {
    label: 'Review',
  },
];
const JobPostingWizard = () => {
  const [activeStep, setActiveStep] = useState(stepsData[0].activeStep);
  const [activeStepData, setActiveStepData] = useState(stepsData[0].activeStep);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key == 'Enter') {
        console.log('ENTER');
        setActiveStepData(prev => prev + 1);
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <Box display="flex">
      <Box
        sx={{
          flex: '0.3',
          display: 'flex',
          alignItems: 'center', // Center vertically
          height: '90vh', // Use full viewport height
          ml: 12,
        }}
      >
        <Stepper
          orientation="vertical"
          variant="elevation"
          activeStep={activeStep}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box
        sx={{
          flex: '1',
          display: 'flex',
          alignItems: 'center', // Center vertically
          height: '90vh', // Use full viewport height
          ml: 12,
        }}
      >
        <Divider orientation="vertical" light sx={{ mt: 2, mr: 5 }} />
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <Avatar
              sx={{
                bgcolor: blue[700],
                mr: 1,
                width: '32px',
                height: '32px',
              }}
            >
              {activeStep + 1}
            </Avatar>
            <Typography variant="overline">
              {steps[activeStep].label}
            </Typography>
          </div>
          <Typography variant="h1" sx={{ width: '100%', fontSize: 60 }}>
            {stepsData[activeStepData].title}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: 24 }} gutterBottom>
            {stepsData[activeStepData].subtitle}
          </Typography>

          {stepsData[activeStepData].inputField && (
            <div>
              <OutlinedInput
                fullWidth
                sx={{
                  fontSize: '20px',
                  mt: 2,
                }}
                placeholder={stepsData[activeStepData].inputField.placeholder}
              />
            </div>
          )}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              marginTop: '40px',
            }}
          >
            <Button
              sx={{
                mr: 2,
                background: 'linear-gradient(45deg, #1560BD 30%, #002366 90%)',
                color: 'white',
              }}
              variant="outlined"
              onClick={() => setActiveStepData(prev => prev + 1)}
            >
              {stepsData[activeStepData].buttonText
                ? stepsData[0].buttonText
                : 'NEXT'}
            </Button>
            <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
              press
            </Typography>
            <Typography
              variant="overline"
              sx={{ fontSize: 12, fontWeight: 'bold', ml: 0.5 }}
            >
              ENTER
            </Typography>

            <KeyboardDoubleArrowRightRoundedIcon fontSize="small" />
          </div>
        </div>
      </Box>
      <Box sx={{ position: 'absolute', bottom: 10, right: 10 }}>
        <IconButton
          disableFocusRipple
          size="medium"
          sx={{
            borderRadius: '5px',
            background: 'linear-gradient(45deg, #1560BD 30%, #002366 90%)',
            color: 'white',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)', // Increase the scale for a growth effect
            },
            mr: 1,
          }}
          onClick={() => setActiveStepData(prev => prev - 1)}
        >
          <NavigateBeforeRoundedIcon />
        </IconButton>
        <IconButton
          disableFocusRipple
          size="medium"
          sx={{
            borderRadius: '5px',
            background: 'linear-gradient(45deg, #1560BD 30%, #002366 90%)',
            color: 'white',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)', // Increase the scale for a growth effect
            },
          }}
          onClick={() => setActiveStepData(prev => prev + 1)}
        >
          <NavigateNextRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default JobPostingWizard;
