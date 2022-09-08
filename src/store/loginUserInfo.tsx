import { alertTitleClasses } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  id: number
}

export const loginUserInfo = createSlice({
  name: 'login_user_info',
  initialState: {
    id: localStorage.getItem('login_user_id') ? parseInt(localStorage.getItem('login_user_id')!) : 0,
  },
  reducers: {
    setLoginUserId: (state: State, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { setLoginUserId } = loginUserInfo.actions;

export default loginUserInfo.reducer;