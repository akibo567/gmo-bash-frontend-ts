import React from 'react'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


const Calendar = () => {
  let menuList = [];

  menuList.push(
    {
      title: '牛丼',
      date: '2022-09-22',
      color: 'red',
    },
    {
      title: '卵',
      date: '2022-09-22',
      color: 'black',
    },
    {
      title: 'シェフの気まぐれサラダ',
      date: '2022-09-22',
      color: 'blue',
    }
  )

  return (
    <>
    <div>
    <FullCalendar
      plugins={[dayGridPlugin]} // pluginsにdayGridPluginを設定する
      headerToolbar={{
        left: 'prev',
        center: 'title',
        right: 'next', 
      }}
      initialView="dayGridMonth" // 初期表示のモードを設定する
      events={menuList}
    />
    </div>
    </>
  )
}

export default Calendar