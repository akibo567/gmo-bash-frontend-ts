import { alertTitleClasses } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  id: number
}

export const loginUserInfo = createSlice({
  name: 'login_user',
  initialState: {
    id: 0,
  },
  reducers: {
    setLoginUser: (state: State, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { setLoginUser } = loginUserInfo.actions;

export default loginUserInfo.reducer;