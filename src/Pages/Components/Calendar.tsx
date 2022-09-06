import FullCalendar, { DateSelectArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


const Calendar = () => {
  let menuList: any = [];

  menuList.push(
    {
      title: '牛丼',
      date: '2022-09-22',
      color: 'red',
      money: '100',
      material: 'ブロッコリー, 白菜'
    },
    {
      title: '卵',
      date: '2022-09-22',
      color: 'black',
      money: '100',
      material: 'ブロッコリー, 白菜'
    },
    {
      title: 'シェフの気まぐれサラダ',
      date: '2022-09-22',
      color: 'blue',
      money: '100',
      material: 'ブロッコリー, 白菜'
    },
    {
      title: '牛丼',
      date: '2022-09-23',
      color: 'red',
      money: '100',
      material: 'ブロッコリー, 白菜'
    },
    {
      title: '卵',
      date: '2022-09-23',
      color: 'black',
      money: '100',
      material: 'ブロッコリー, 白菜'
    },
    {
      title: 'シェフの気まぐれサラダ',
      date: '2022-09-23',
      color: 'blue',
      money: '100',
      material: 'ブロッコリー, 白菜'
    },
    {
      title: '牛丼',
      date: '2022-09-24',
      color: 'red',
      money: '100',
      material: 'ブロッコリー, 白菜'
    },
    {
      title: '卵',
      date: '2022-09-24',
      color: 'black',
      money: '100',
      material: 'ブロッコリー, 白菜'
    },
    {
      title: 'シェフの気まぐれサラダ',
      date: '2022-09-24',
      color: 'blue',
      money: '100',
      material: 'ブロッコリー, 白菜'
    },
  )

  const handleDateSelect = (selectionInfo: DateSelectArg) => {
    const selectDate: string = selectionInfo.startStr;
    const result = menuList.filter((menu: any) => menu.date === selectDate);
    console.log(result);
}

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
      selectable={true}
      select={handleDateSelect}
    />
    </div>
    </>
  )
}

export default Calendar