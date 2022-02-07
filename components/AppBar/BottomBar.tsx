import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GradeOutlinedIcon from '@mui/icons-material/Grade';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="secondary"
        position="fixed"
        sx={{ top: 'auto', bottom: 0 }}
      >
        <Toolbar>
          <Box
            sx={{
              '& > :not(style)': {
                m: 2,
              },
            }}
          >
            <IconButton color="inherit">
              <HomeIcon />
            </IconButton>
            <IconButton>
              <GradeOutlinedIcon />
            </IconButton>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}