import React from 'react'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';


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
    },
    {
      title: '牛丼',
      date: '2022-09-23',
      color: 'red',
    },
    {
      title: '卵',
      date: '2022-09-23',
      color: 'black',
    },
    {
      title: 'シェフの気まぐれサラダ',
      date: '2022-09-23',
      color: 'blue',
    },
    {
      title: '牛丼',
      date: '2022-09-24',
      color: 'red',
    },
    {
      title: '卵',
      date: '2022-09-24',
      color: 'black',
    },
    {
      title: 'シェフの気まぐれサラダ',
      date: '2022-09-24',
      color: 'blue',
    },
  )

  return (
    <>
    <div>
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]} 
      headerToolbar={{
        left: 'prev',
        center: 'title',
        right: 'next', 
      }}
      initialView="dayGridMonth" // 初期表示のモードを設定する
      events={menuList}
      contentHeight='auto'
      dateClick={
        function(info: DateClickArg) {
          alert('Clicked on:' + info.dateStr);
        }
      }
      
    />
    </div>
    </>
  )
}

export default Calendar