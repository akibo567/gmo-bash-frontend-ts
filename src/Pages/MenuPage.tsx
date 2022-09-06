import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import MenuCard from './Components/MenuCard';

const a : string = 'hoge';

const dummy_data = ["Araki", "Ibata", "Fukutome", "Woods", "Alex", "Tatsunami"];

const dummy_data_2 =

[
  {
    id : 10,
    menu_name : "焦がしバター醤油",
    detail_url : "https://www.google.com/"
  },
  {
    id : 15,
    menu_name : "ホルモンパスタ",
    detail_url : "https://www.yahoo.jp/"
  },
  {
    id : 15,
    menu_name : "あああああああああああああああああああああああああああああああああ",
    detail_url : "https://www.yahoo.jp/"
  },
  {
    id : 15,
    menu_name : "ホルモンパスタ",
    detail_url : "https://www.yahoo.jp/"
  },
  {
    id : 15,
    menu_name : "ホルモンパスタ",
    detail_url : "https://www.yahoo.jp/"
  },
  {
    id : 15,
    menu_name : "ホルモンパスタ",
    detail_url : "https://www.yahoo.jp/"
  },
  {
    id : 15,
    menu_name : "ホルモンパスタ",
    detail_url : "https://www.yahoo.jp/"
  }

]

const MenuPage = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div style={style_MenuPage}>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="時間帯を選択">
            <Tab label="朝" value="1" />
            <Tab label="昼" value="2" />
            <Tab label="夜" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <div style={style_MenuListContainer}>
                  {dummy_data_2.map((output, index) => {
                    return <MenuCard
                      id={output.id}
                      menu_name={output.menu_name}
                      detail_url={output.detail_url}
                    />;
                  })}
                </div>
        </TabPanel>
        <TabPanel value="2">
          Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>

      <NavLink to="/">
          <p>カレンダー</p>
      </NavLink>
    </div>
  )
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


const style_MenuPage = {
  flex: 1,
  background: '#dcdcdc'
};


export default MenuPage