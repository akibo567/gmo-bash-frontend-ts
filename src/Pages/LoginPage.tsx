import React, { useState, useEffect } from "react";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'


import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



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

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginAction = () =>{
    axios
    .get(API_ENDPOINT + "user?userName=" + userName + "&userPass=" + password)
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
      alert('通信エラー:'+err);
    });

  }

  const signUpAction = () =>{
    axios
    .post(API_ENDPOINT + "user", {
      "userName": userName,
      "userPass": password,
    })
    .then((res) => {
      if(res.data.message == "success"){
        alert("ユーザー作成に成功しました");
      }else{
        alert("エラー");
      };
    }).catch(err => {
      alert('通信エラー:'+err);
    });

  }

  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  
  useEffect(() => {

  }, []);

  return (
    <div style={style_LoginPage}>
      <>
      <div>
      <TextField id="filled-basic" label="userName" variant="filled"  value={userName} onChange={handleChangeUserName}/>
      </div>
      <div>
      <TextField id="filled-basic" label="password" variant="filled"  value={password} onChange={handleChangePassword}/>
      </div>
      <div>
      <Button variant="contained" size="medium" 
              onClick={loginAction}>
                ログイン
            </Button>

            <Button variant="contained" size="medium" 
              onClick={signUpAction}>
                新規登録
            </Button>
      </div>
      </>
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