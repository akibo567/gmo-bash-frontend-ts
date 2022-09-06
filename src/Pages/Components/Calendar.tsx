import FullCalendar, { DateSelectArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventList } from '../../Types/EventList';
import { Event } from '../../Types/Event';


const Calendar = () => {
  const eventList: EventList = {
    result: [
      {
        title: "牛丼",
        date: "2022-09-22",
        color: "red",
        recipe: {
          recipeId: 1,
          recipeName: '牛丼',
          recipeImage: "image",
          recipeUrl: "url",
          recipeCost: "100",
          recipeIndication: "5分",
          recipeCategory: "昼",
          recipeMaterials: ["ブロッコリー", "白菜"],  
        },
      },
      {
        title: "牛丼",
        date: "2022-09-22",
        color: "blue",
        recipe: {
          recipeId: 1,
          recipeName: '牛丼',
          recipeImage: "image",
          recipeUrl: "url",
          recipeCost: "100",
          recipeIndication: "5分",
          recipeCategory: "昼",
          recipeMaterials: ["ブロッコリー", "白菜"],  
        },
      },
      {
        title: "牛丼",
        date: "2022-09-23",
        color: "red",
        recipe: {
          recipeId: 1,
          recipeName: '牛丼',
          recipeImage: "image",
          recipeUrl: "url",
          recipeCost: "100",
          recipeIndication: "5分",
          recipeCategory: "昼",
          recipeMaterials: ["ブロッコリー", "白菜"],  
        },
      },
      {
        title: "牛丼",
        date: "2022-09-23",
        color: "green",
        recipe: {
          recipeId: 1,
          recipeName: '牛丼',
          recipeImage: "image",
          recipeUrl: "url",
          recipeCost: "100",
          recipeIndication: "5分",
          recipeCategory: "昼",
          recipeMaterials: ["ブロッコリー", "白菜"],  
        },
      },
      {
        title: "牛丼",
        date: "2022-09-24",
        color: "red",
        recipe: {
          recipeId: 1,
          recipeName: '牛丼',
          recipeImage: "image",
          recipeUrl: "url",
          recipeCost: "100",
          recipeIndication: "5分",
          recipeCategory: "昼",
          recipeMaterials: ["ブロッコリー", "白菜"],  
        },
      },
    ]
  };

  const handleDateSelect = (selectionInfo: DateSelectArg) => {
    const selectDate: string = selectionInfo.startStr;
    const result = eventList.result.filter((event: Event) => event.date === selectDate);
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
      events={eventList.result}
      contentHeight='auto'
      selectable={true}
      select={handleDateSelect}
    />
    </div>
    </>
  )
}

export default Calendar