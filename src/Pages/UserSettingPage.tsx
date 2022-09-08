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




const UserSettingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user_id = useSelector((state: RootState) => state.login_user_info.id);

  const [newUserName, setNewUserName] = useState<string>("");

  const logOutAction = () =>{
    dispatch(setLoginUserId(0));
    localStorage.removeItem('login_user_id');
    localStorage.removeItem('login_user_name');
    alert('ログアウトしました。');
    navigate('/login');
  }

  const changeNameAction = () =>{
    axios
    .patch(API_ENDPOINT + "user", {
      "userName": newUserName,
    })
    .then((res) => {
      if(res.data.message == "success"){
        alert("ユーザー名変更に成功しました");
      }else{
        alert("エラー");
      };
    }).catch(err => {
      alert('通信エラー:'+err);
    });

  }

  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserName(event.target.value);
  };

  
  useEffect(() => {
    if(!(user_id > 0)){
      navigate('/login');
    }
  }, []);

  return (
    <div style={style_LoginPage}>
      <>
      <div>ユーザー設定</div >
      <div>
      <TextField id="filled-basic" label="newUserName" variant="filled"  value={newUserName} onChange={handleChangeUserName}/>
      </div>

      <div>
          <Button variant="contained" size="medium" 
                  onClick={logOutAction}>
                    ログアウト
                </Button>

                <Button variant="contained" size="medium" 
                  onClick={changeNameAction}>
                    名前変更
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

export default UserSettingPage