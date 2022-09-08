import React, { useState, useEffect } from "react";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



import MenuCard from './Components/MenuCard';
import {Recipe} from '../Types/Recipe';
import {RootState} from '../store';
import {API_ENDPOINT,
   BREAKFAST_TIME, 
   LUNCH_TIME, 
   DINNER_TIME,
   BREAKFAST_MENU_TYPES,
   LUNCH_MENU_TYPES,
   DINNER_MENU_TYPES,
} from '../Setting';
import { AnyIfEmpty } from "react-redux";
import { setLoginUserId } from '../store/loginUserInfo';




const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form_data = new FormData(event.currentTarget);
     axios
     .get(API_ENDPOINT + "user?userName=" + form_data.get('username') + "&userPass=" + form_data.get('password'))
     .then((res) => {
       if(res.data.userId > 0){
         localStorage.setItem('login_user_id', res.data.userId);
         dispatch(setLoginUserId(res.data.userId));
         alert("ログイン完了しました。");
         navigate('/');
       }else{
         alert(res.data.message);
       };
     }).catch(err => {
       alert('ログインに失敗しました。');
       console.log(err);
     });

  };

  const theme = createTheme();
  
  useEffect(() => {

  }, []);

  return (

      <div>
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              　ログイン
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="UserName"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        </ThemeProvider>
      </div>
  );
}

const style_TabPanel = {
  background: '#dcdcdc'
};

const style_MenuListContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
};


const style_LoginPage = {
  flex: 1,
  //background: '#dcdcdc'
};

export default LoginPage