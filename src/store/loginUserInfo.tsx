import { alertTitleClasses } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  id: number,
  name: string,
}

export const loginUserInfo = createSlice({
  name: 'login_user_info',
  initialState: {
    id: localStorage.getItem('login_user_id') ? parseInt(localStorage.getItem('login_user_id')!) : 0,
    name: localStorage.getItem('login_user_name') ? localStorage.getItem('login_user_name') : "",
  },
  reducers: {
    setLoginUserId: (state: any, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    setLoginUserName: (state: any, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setLoginUserId, setLoginUserName } = loginUserInfo.actions;

export default loginUserInfo.reducer;