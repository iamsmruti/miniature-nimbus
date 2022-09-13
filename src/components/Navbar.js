import * as React from 'react';

import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Tooltip, MenuItem
} from '@mui/material'

import NewspaperIcon from '@mui/icons-material/Newspaper';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link, useNavigate } from 'react-router-dom';
import { notifySuccess } from './Notifiers';
import { ToastContainer } from 'react-toastify';

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate()

  const handleLogout = () => {
    notifySuccess('Logged out !')
    localStorage.removeItem('token')
    localStorage.removeItem('isLoggedIn')
    navigate('/login')
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NewspaperIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              NewsTank
            </Typography>

            <Box sx={{mr: 2, display: {md: 'none', xs: 'block'}}}>
              <IconButton href='/'>
                <KeyboardBackspaceIcon sx={{color: 'white'}}/>
              </IconButton>
            </Box>

            <Link to="/table-view">
              <Typography sx={{ fontWeight: 600, mr: 1 }}>Table View</Typography>
            </Link>

            <Box sx={{ flexGrow: 0, ml: 'auto' }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /></>
  );
};
export default Navbar;