import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import './nav-styles.scss';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);
  let manageActive = (currentPath === '/manage' ? true : false);

  if (currentPath === '/manage') {
    manageActive = true;
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setCurrentPath(window.location.pathname);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {
                !manageActive && (
                <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/manage">
                  <Typography textAlign="center">Manage Books</Typography>
                </Link>
              </MenuItem>
              )}
              {
                manageActive && (
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/">
                      <Typography textAlign="center">Back to Books</Typography>
                    </Link>
                  </MenuItem>
                )
              }
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {
            !manageActive && (
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/manage">
                  <Typography textAlign="center">Manage Books</Typography>
                </Link>
              </MenuItem>
              )}
              {
                manageActive && (
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/">
                      <Typography textAlign="center">Back to Books</Typography>
                    </Link>
                  </MenuItem>
                )
              }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
