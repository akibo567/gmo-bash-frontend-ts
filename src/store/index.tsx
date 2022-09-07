import { configureStore } from '@reduxjs/toolkit';
import selectMenuInfo from './selectMenuInfo';


export const store = configureStore({
  reducer: {
    selected_menu_info: selectMenuInfo,
  },
});

export type RootState = ReturnType<typeof store.getState>
