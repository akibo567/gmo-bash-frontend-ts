import { alertTitleClasses } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  selected_day_start: string
}

export const selectMenuInfo = createSlice({
  name: 'selected_menu_info',
  initialState: {
    selected_day_start: "",
  },
  reducers: {
    setSelectDayStart: (state: State, action: PayloadAction<string>) => {
      state.selected_day_start = action.payload;
    },
  },
});

export const { setSelectDayStart } = selectMenuInfo.actions;

export default selectMenuInfo.reducer;