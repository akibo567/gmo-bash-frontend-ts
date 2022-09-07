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

  let materialList: string[] = [];

  const handleDateSelect = (selectionInfo: DateSelectArg) => {
    materialList = [];
    const selectDate: string = selectionInfo.startStr;
    const result = eventList.result.filter((event: Event) => event.date === selectDate);
    result.map((event) => {
      const recipeMaterials: string[] = event.recipe.recipeMaterials;
      recipeMaterials.map((material) => materialList.push(material));
    });
  }

  const handleClickRecipeMaterial = () => {
    console.log(materialList);
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
      <Button 
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, marginTop: 10}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>食材一覧</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {materialList.map((material) => (
              <StyledTableRow key={material}>
                <StyledTableCell component="th" scope="row" align='center'>{material}</StyledTableCell>
              </StyledTableRow>
            ))}
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