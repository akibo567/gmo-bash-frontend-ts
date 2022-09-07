import React, { useState, useEffect } from "react";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import MenuCard from './Components/MenuCard';
import {Recipe} from '../Types/Recipe';
import {RootState} from '../store';
import {API_ENDPOINT} from '../Setting';



const MenuPage = () => {
  const navigate = useNavigate();

  const [tab_value, setTab_value] = useState<string>("1");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [menu_list, setMenu_list] = useState<Recipe[]>([]);

  const tabHandleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab_value(newValue);
  };

  const navigateChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate('/');
  };

  
  useEffect(() => {
    axios.get(API_ENDPOINT + `recipe_return_1`)
    .then(res => {
      setIsLoading(false);
      setMenu_list(res.data);
    }).catch(err => {
      alert('通信エラー:'+err);
    });
  }, []);
  return (
    <div style={style_MenuPage}>
      {useSelector((state: RootState) => state.selected_menu_info.selected_day_start)}
      {isLoading?
      //ロード中に表示する画面
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      :
      //ロード完了時に表示する画面
      <TabContext value={tab_value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={tabHandleChange} aria-label="時間帯を選択">
            <Tab label="朝" value="1" />
            <Tab label="昼" value="2" />
            <Tab label="夜" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <div style={style_MenuListContainer}>
                  {menu_list.map((output: Recipe, index: number) => {
                    return <MenuCard
                      user_id={11}
                      recipe_id={output.recipeId}
                      menu_name={output.recipeName}
                      detail_url={output.recipeUrl}
                      selected_date="1999-09-19"
                      setIsLoadingEvent={setIsLoading}
                      navigateChangeEvent={navigateChange}
                    />;
                  })}
                </div>
        </TabPanel>
        <TabPanel value="2">
          Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
        }
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


const style_MenuPage = {
  flex: 1,
  background: '#dcdcdc'
};

export default MenuPage