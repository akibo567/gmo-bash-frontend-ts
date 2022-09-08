import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { TEXT_COLOR } from '../../Setting';

import { useSelector } from 'react-redux';

import { RootState } from '../../store';

const Header = () => {
  const user_id = useSelector((state: RootState) => state.login_user_info.id);

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'none', lg: 'flex' },
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
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex', lg: 'none' },
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
                    display: { xs: 'none', md: 'none', lg: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 70,
                    letterSpacing: '.3rem',
                    color: TEXT_COLOR,
                    textDecoration: 'none',
                  }}
                  >
                  {user_id}
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/setting"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex', lg: 'none' },
                    fontFamily: 'monospace',
                    fontWeight: 70,
                    letterSpacing: '.3rem',
                    color: TEXT_COLOR,
                    textDecoration: 'none',
                  }}
                  >
                  {user_id}
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
                    {user_id}
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