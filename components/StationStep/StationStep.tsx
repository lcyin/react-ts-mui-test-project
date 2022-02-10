import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StepContent } from '@mui/material';

export default function HorizontalNonLinearStepper({ onClick, steps }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const handleStep = (data, step: number) => () => {
    setActiveStep(step);
    onClick(data);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
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
