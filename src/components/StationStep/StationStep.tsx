import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';
import { StepContent } from '@mui/material';
import { useStationFetch } from '../../hooks/useStationFetch';

export default function HorizontalNonLinearStepper({ steps }) {
  const {
    stationData,
    setStationData,
    station,
    setStation,
    activeStep,
    setActiveStep,
    completed,
    setCompleted,
  } = useStationFetch(steps);

  const handleStep = (data, step: number) => () => {
    setActiveStep(step);
    setStation(steps[step]);
  };

  return (
    <Box sx={{ maxWidth: 425 }}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {stationData.map((step, index) => (
          <Step
            key={step.label}
            completed={completed[index]}
            sx={
              activeStep === index
                ? { backgroundColor: '#F8B6B4' }
                : { backgroundColor: 'white' }
            }
          >
            <StepButton color="inherit" onClick={handleStep(step, index)}>
              <Typography fontSize="2rem" color="black">
                {step.label}
              </Typography>
            </StepButton>

            <StepContent>
              <Box sx={{ mb: 2 }}>
                <div>
                  {/* <Typography>${step.fee}</Typography> */}
                  {step.schedule.map((schedule) => (
                    <Typography fontSize="1.5rem" color="primary">
                      {schedule.time > 0 ? schedule.time : '-'} 分鐘
                    </Typography>
                  ))}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
