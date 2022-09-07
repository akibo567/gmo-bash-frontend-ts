import React, { useState } from "react";
import FullCalendar, { DateSelectArg, DateUnselectArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventList } from '../../Types/EventList';
import { Event } from '../../Types/Event';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { setSelectDayStart } from '../../store/selectMenuInfo';
import { useSelector, useDispatch } from 'react-redux'





const Calendar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //const [calSelectDayStart, setCalSelectDayStart] = useState<string>("");

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

  const materialList: string[] = [];

  const handleDateSelect = (selectionInfo: DateSelectArg) => {
    dispatch(setSelectDayStart(selectionInfo.startStr));
    const selectDate: string = selectionInfo.startStr;
    const result = eventList.result.filter((event: Event) => event.date === selectDate);
    result.map((event) => {
      const recipeMaterials: string[] = event.recipe.recipeMaterials;
      recipeMaterials.map((material) => materialList.push(material));
    });
  }

  //TODO 画面外クリック時に選択初期化処理をはさむ
  const handleDateUnSelect = (unSelectionInfo : DateUnselectArg) => {
    //setSelectDayStart("");
    //console.log(unSelectionInfo.jsEvent.target.type);
    //let target = unSelectionInfo.jsEvent.target as HTMLElement;    // <-- ココ！
    //console.log(target.type);

  }

  const handleClickRecipeMaterial = () => {
    console.log(materialList);
  }
  const handleClickAddRecipe = () => {
    navigate('/MenuPage');
    //alert(selectDayStart);
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
          unselect={handleDateUnSelect}
          //unselectAuto={true}
        />
      </div>
      <Button 
        onClick={handleClickAddRecipe}
        variant="contained" 
        disableElevation
        size='large'
        fullWidth
        sx={{
          textAlign: 'center',
          marginTop: 2,
        }}>
        レシピ選択
      </Button>
      <Button 
        onClick={handleClickRecipeMaterial}
        variant="contained" 
        disableElevation
        size='large'
        fullWidth
        sx={{
          textAlign: 'center',
          marginTop: 2,
        }}>
        材料を表示
      </Button>
    </>
  )
}

export default Calendar