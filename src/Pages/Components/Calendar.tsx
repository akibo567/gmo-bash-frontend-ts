import React, { useState, useEffect } from 'react';

import FullCalendar, { DateSelectArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { EventList } from '../../Types/EventList';
import { Event } from '../../Types/Event';

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Calendar = () => {
  // ダミーデータ
  const dummyEventList: EventList = {
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
          recipeMaterials: ["牛肉", "玉ねぎ"],  
        },
      },
      {
        title: "カレー",
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
          recipeMaterials: ["じゃがいも", "カレールー"],  
        },
      },
      {
        title: "サラダ",
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
          recipeMaterials: ["キャベツ", "玉ねぎ"],  
        },
      },
      {
        title: "油淋鶏",
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
          recipeMaterials: ["鶏肉", "ねぎ", "キャベツ"],  
        },
      },
    ]
  };

  const [materialList, setMaterialList] = useState([] as string[]);

  const handleDateSelect = (selectionInfo: DateSelectArg) => {
    setMaterialList([]);

    const startDate = new Date(selectionInfo.startStr);
    const endDate = new Date(selectionInfo.endStr);
    const dateList = [];
    
    for(let date = startDate; date < endDate; date.setDate(date.getDate()+1)) {
      dateList.push(formatDate(date));
    }

    const materials: string[] = [];
    dateList.map((date: string) => {
      const eventList = dummyEventList.result.filter((event: Event) => event.date == date);
      eventList.map((event) => {
        const recipeMaterials: string[] = event.recipe.recipeMaterials;
        recipeMaterials.map((material) => {
          if(!materials.includes(material)) {
            materials.push(material);
          }
        });
      });
    });
    // console.log(materials);
    setMaterialList(materials);
  }

  const displayRecipeMaterial = () => {
    return (
      materialList.map((material: string) => (
          <StyledTableRow key={material}>
            <StyledTableCell component="th" scope="row" align='center'>{material}</StyledTableCell>
          </StyledTableRow>
      ))
    )
  }

  // 日付をYYYY-MM-DDの書式で返すメソッド
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = ('00' + (date.getMonth()+1)).slice(-2);
    const day = ('00' + date.getDate()).slice(-2);
    return (`${year}-${month}-${day}`);
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
          events={dummyEventList.result}
          contentHeight='auto'
          selectable={true}
          select={handleDateSelect}
        />
      </div>
      <Button 
        variant="contained" 
        disableElevation
        size='large'
        fullWidth
        sx={{
          textAlign: 'center',
          marginTop: 5,
        }}>
        レシピ選択
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, marginTop: 5}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>食材一覧</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayRecipeMaterial()}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        fontSize={32}
        sx={{marginTop: 4}}>
        合計金額  10万円
      </Typography>
    </>
  )
}

export default Calendar