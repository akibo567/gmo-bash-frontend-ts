import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { TEXT_COLOR } from '../../Setting';

import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import zisui from './zisui.png' 
import { width } from '@mui/system';

const Header = () => {
  const user_id = useSelector((state: RootState) => state.login_user_info.id);
  const user_name = useSelector((state: RootState) => state.login_user_info.name);


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
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/setting"
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
                    component="a"
                    href="/setting"
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
              </div> : ""
            }
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}

export default Header