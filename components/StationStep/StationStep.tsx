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
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {stationData.map((step, index) => (
          <Step key={step.label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(step, index)}>
              <Typography variant="h5">{step.label}</Typography>
            </StepButton>

            <StepContent>
              {/* <Typography>${step.fee}</Typography> */}
              {step.schedule.map((schedule) => (
                <Typography variant="h6">
                  {schedule.time > 0 ? schedule.time : '-'} mins
                </Typography>
              ))}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
