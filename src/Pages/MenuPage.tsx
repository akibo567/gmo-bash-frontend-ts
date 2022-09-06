import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
  },
  {
    id : 15,
    menu_name : "ホルモンパスタ",
    detail_url : "https://www.yahoo.jp/"
  }

]

const MenuPage = () => {
  return (
    <div style={style_MenuPage}>
      <Tabs>
        <TabList>
          <Tab>朝</Tab>
          <Tab>昼</Tab>
          <Tab>夜</Tab>
        </TabList>

        <TabPanel>
          <h2>朝</h2>
        </TabPanel>
        <TabPanel>
          <h2>昼</h2>
        </TabPanel>
        <TabPanel style={style_TabPanel}>
          <h2>夜</h2>
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
      </Tabs>
      <NavLink to="/">
          <p>カレンダー</p>
      </NavLink>
    </div>
  )
}

const style_TabPanel = {
  background: '#dcdcdc'
};

const style_MenuListContainer = {
  display: 'flex'
};


const style_MenuPage = {
  background: '#dcdcdc'
};


export default MenuPage