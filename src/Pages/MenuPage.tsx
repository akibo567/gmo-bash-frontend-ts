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
  }

]

const Home = () => {
  return (
    <>
      <div>メニュー</div>
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
        <TabPanel>
          <h2>夜</h2>
          {dummy_data_2.map((output, index) => {
            return <MenuCard
              id={output.id}
              menu_name={output.menu_name}
              detail_url={output.detail_url}
            />;
          })}
        </TabPanel>
      </Tabs>
      <NavLink to="/">
          <p>カレンダー</p>
      </NavLink>
    </>
  )
}

export default Home