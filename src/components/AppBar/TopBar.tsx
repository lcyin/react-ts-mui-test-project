import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const iconMap = {
  menu: <MenuIcon />,
  back: <ArrowBackIosIcon />,
};
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#E11A14',
    },
  },
});
export default function ButtonAppBar({ title, icon }) {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 425 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="primary" position="static">
          <Toolbar>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {iconMap[icon]}
          </IconButton> */}
            <Link to="/">
              <HomeIcon color="action" />
            </Link>
            <Typography
              fontSize="2rem"
              align="center"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
