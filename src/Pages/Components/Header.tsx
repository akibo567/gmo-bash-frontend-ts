import React, { useState, ChangeEvent, MouseEvent } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { TEXT_COLOR } from '../../Setting';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../store';

import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import zisui from './zisui.png' 
import { width } from '@mui/system';

import { setLoginUserId } from '../../store/loginUserInfo';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user_id = useSelector((state: RootState) => state.login_user_info.id);
  const user_name = useSelector((state: RootState) => state.login_user_info.name);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(setLoginUserId(0));
    localStorage.removeItem('login_user_id');
    localStorage.removeItem('login_user_name');
    alert('ログアウトしました。');
    navigate('/login');
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
          <img src={zisui} style={{width: 32, marginRight: 8}}/>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex', lg: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: TEXT_COLOR,
                textDecoration: 'none',
              }}
              >
              自炊Health
            </Typography>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none', lg: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: TEXT_COLOR,
                  textDecoration: 'none',
                }}
                >
                自炊Health
            </Typography>

            { user_id > 0 ?
              <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex', lg: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 70,
                    letterSpacing: '.3rem',
                    color: TEXT_COLOR,
                    textDecoration: 'none',
                  }}
                  >
                  {user_name}
                </Typography>
                
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      mr: 2,
                      display: { xs: 'flex', md: 'none', lg: 'none' },
                      flexGrow: 1,
                      fontFamily: 'monospace',
                      fontWeight: 70,
                      letterSpacing: '.3rem',
                      color: TEXT_COLOR,
                      textDecoration: 'none',
                    }}
                    >
                    <AccountCircleIcon
                      sx={{
                        marginX: 1,
                        marginY: 1,
                      }}
                    >
                    </AccountCircleIcon>
                    {user_name}
                </Typography>
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
              </div> : ""
            }
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}

export default Header