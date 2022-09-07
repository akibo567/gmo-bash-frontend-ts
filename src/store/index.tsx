import { configureStore } from '@reduxjs/toolkit';
import selectMenuInfo from './selectMenuInfo';
import loginUserInfo from './loginUserInfo'



export const store = configureStore({
  reducer: {
    selected_menu_info: selectMenuInfo,
    login_user_info: loginUserInfo,
  },
});

export type RootState = ReturnType<typeof store.getState>
