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
     .post(API_ENDPOINT + "user", {
      "userName": form_data.get('username'),
      "userPass": form_data.get('password'),
    })
    .then((res) => {
      if(res.data.message == "success"){
        alert("ユーザー作成に成功しました");
        navigate('/login');
      }else{
        alert("エラー");
      };
    }).catch(err => {
      alert('通信エラー:'+err);
    });

  };


  const theme = createTheme();
  
  useEffect(() => {

  }, []);

  return (

          <div>
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      新規ユーザー作成
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                          />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign Up
                      </Button>
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Link href="/login" variant="body2">
                            Already have an account? Sign in
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Container>
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