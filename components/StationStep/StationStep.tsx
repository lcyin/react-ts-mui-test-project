import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StepContent } from '@mui/material';

const steps = [
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Cheung Sha Wan Station',
    fee: '8.8',
    schedule: [
      {
        time: 0,
      },
      {
        time: 10,
      },
      {
        time: 20,
      },
    ],
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              <Typography variant="h5">{step.label}</Typography>
            </StepButton>

            <StepContent>
              <Typography>${step.fee}</Typography>
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
