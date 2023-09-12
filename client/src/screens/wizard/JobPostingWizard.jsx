import React, { useState, useEffect } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Divider,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import the useDispatch hook
import { saveJobPostDetails } from '../../redux/actions/jobPostActions';
import { useUrl } from '../UrlInputForm/UrlContext';
import stepsData from './data/wizardSteps.json';
import { KeysToComponentMap } from './data/wizardStepsComponent';

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
    label: 'Job Details',
  },
  {
    label: 'Company Information',
  },
  {
    label: 'Interview Details',
  },
  {
    label: 'Review',
  },
];
const JobPostingWizard = () => {
  const { jobPostDetails, setJobPostDetails } = useUrl();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = useState(stepsData[0].activeStep);
  const [activeStepData, setActiveStepData] = useState(stepsData[0].activeStep);
  const [componentName, setComponentName] = useState('default');
  const Component = KeysToComponentMap[componentName];

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key == 'Enter' && stepsData[activeStepData].end == null) {
        console.log('ENTER');
        setActiveStepData(prev => prev + 1);
      }
      if (event.key == 'ArrowRight' && stepsData[activeStepData].end == null) {
        console.log('Right Arrow');
        setActiveStepData(prev => prev + 1);
      }
      if (event.key == 'ArrowLeft' && stepsData[activeStepData].start == null) {
        console.log('Left Arrow');
        setActiveStepData(prev => prev - 1);
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (stepsData[activeStepData].activeStep != activeStep) {
      setActiveStep(stepsData[activeStepData].activeStep);
    }
    if (stepsData[activeStepData].component != null) {
      setComponentName(stepsData[activeStepData].component);
    } else {
      setComponentName('default');
    }
  }, [activeStepData, activeStep]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/find-job-posting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobPostDetails),
        mode: 'cors',
      });
      if (response.ok) {
        // Request was successful, handle the response if needed
        const data = await response.json();
        console.log('Response from the backend API:', data);

        dispatch(saveJobPostDetails(data));

        navigate('/summarize-results');
      }
    } catch (error) {}
  };

  return (
    <Box display="flex">
      {/* SIDE STEPPING GRAPHIC */}
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
              {stepsData[activeStepData].activeStep + 1}
            </Avatar>
            <Typography variant="overline">
              {steps[stepsData[activeStepData].activeStep].label}
            </Typography>
          </div>
          <Typography variant="h1" sx={{ width: '100%', fontSize: 60 }}>
            {stepsData[activeStepData].title}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: 24 }} gutterBottom>
            {stepsData[activeStepData].subtitle}
          </Typography>
          <Component {...stepsData[activeStepData].props} />
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
              onClick={
                stepsData[activeStepData].end == null
                  ? () => setActiveStepData(prev => prev + 1)
                  : handleSubmit
              }
            >
              {stepsData[activeStepData].buttonText != null
                ? stepsData[activeStepData].buttonText
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

      {/* NEXT/PREV STEP BUTTONS */}
      <Box sx={{ position: 'absolute', bottom: 10, right: 10 }}>
        {stepsData[activeStepData].start == null && (
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
        )}
        {stepsData[activeStepData].end == null && (
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
            onClick={
              stepsData[activeStepData].end == null
                ? () => setActiveStepData(prev => prev + 1)
                : () => {}
            }
          >
            <NavigateNextRoundedIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default JobPostingWizard;
