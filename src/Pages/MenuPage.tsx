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
import {API_ENDPOINT,
   BREAKFAST_TIME, 
   LUNCH_TIME, 
   DINNER_TIME,
   BREAKFAST_MENU_TYPES,
   LUNCH_MENU_TYPES,
   DINNER_MENU_TYPES,
} from '../Setting';

const breakfastFavType = '38-501';
const lunchFavType = '38-502';
const dinnerFavType = '38-503';


const MenuPage = () => {
  const navigate = useNavigate();

  const [tab_value, setTab_value] = useState<string>("1");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [menu_list_breakfast, setMenuListBreakfast] = useState<Recipe[]>([]);
  const [menu_list_lunch, setMenuListLunch] = useState<Recipe[]>([]);
  const [menu_list_dinner, setMenuListDinner] = useState<Recipe[]>([]);


  const tabHandleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab_value(newValue);
  };

  const navigateChange = (event: React.SyntheticEvent, newValue: string) => {
    //alert('メニューを登録しました。');
    navigate('/');
  };

  const user_id = useSelector((state: RootState) => state.login_user_info.id);
  const select_day_start = useSelector((state: RootState) => state.selected_menu_info.selected_day_start);
  
  useEffect(() => {
    if(select_day_start != ""){
      axios.post(API_ENDPOINT + "recipe/list", {
          "breakfast": BREAKFAST_MENU_TYPES,
          "lunch": LUNCH_MENU_TYPES,
          "dinner": DINNER_MENU_TYPES,
      })
      .then((res) => {
        setMenuListBreakfast(res.data[0]);
        setMenuListLunch(res.data[1]);
        setMenuListDinner(res.data[2]);
        console.log(res.data);

        setIsLoading(false);
      }).catch(err => {
        alert('通信エラー:'+err);
      });
    }else{
      navigate('/');
    }
  }, []);

  return (
    <div>
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
                    <Box        sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                      }}>
                            {menu_list_breakfast?.map((output: Recipe, index: number) => {
                              return <MenuCard
                                user_id={user_id}
                                recipe_id={output.recipeId}
                                menu_name={output.recipeName}
                                img_url={output.recipeImage}
                                detail_url={output.recipeUrl}
                                selected_date={select_day_start+" "+BREAKFAST_TIME}
                                setIsLoadingEvent={setIsLoading}
                                navigateChangeEvent={navigateChange}
                                isRecomended={output.recipeCategory==breakfastFavType}
                              />;
                            })}
                      </Box>
                  </TabPanel>
                  <TabPanel value="2">
                    <Box        sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                      }}>
                            {menu_list_lunch?.map((output: Recipe, index: number) => {
                              return <MenuCard
                                user_id={user_id}
                                recipe_id={output.recipeId}
                                menu_name={output.recipeName}
                                detail_url={output.recipeUrl}
                                img_url={output.recipeImage}
                                selected_date={select_day_start+" "+LUNCH_TIME}
                                setIsLoadingEvent={setIsLoading}
                                navigateChangeEvent={navigateChange}
                                isRecomended={output.recipeCategory==lunchFavType}
                              />;
                            })}
                      </Box>
                    </TabPanel>
                  <TabPanel value="3">
                    <Box        sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      p: 1,
                      m: 1,
                      bgcolor: 'palette.grey[500]',
                      borderRadius: 1,
                    }}>
                      {menu_list_dinner?.map((output: Recipe, index: number) => {
                                  return <MenuCard
                                    user_id={user_id}
                                    recipe_id={output.recipeId}
                                    menu_name={output.recipeName}
                                    detail_url={output.recipeUrl}
                                    img_url={output.recipeImage}
                                    selected_date={select_day_start+" "+DINNER_TIME}
                                    setIsLoadingEvent={setIsLoading}
                                    navigateChangeEvent={navigateChange}
                                    isRecomended={output.recipeCategory==dinnerFavType}
                                  />;
                                })}
                    </Box>
                  </TabPanel>
          </TabContext>
        }
    </div>
  );
}

const style_TabPanel = {
  //background: '#dcdcdc'
};

const style_MenuListContainer: React.CSSProperties = {
  /*display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '100%',*/
};


const style_MenuPage = {
  /*flex: 1,
  background: '#dcdcdc'*/
};

export default MenuPage