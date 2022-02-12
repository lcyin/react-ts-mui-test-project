import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const iconMap = {
  menu: <MenuIcon />,
  back: <ArrowBackIosIcon />,
};

export default function ButtonAppBar({ title, icon }) {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 425 }}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {iconMap[icon]}
          </IconButton>
          <Typography
            fontSize="2rem"
            align="center"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
