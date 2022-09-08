import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import FullCalendar, { DateSelectArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { Event } from '../../Types/Event';
import { useNavigate } from 'react-router-dom';
import { setSelectDayStart } from '../../store/selectMenuInfo';
import { useDispatch, useSelector} from 'react-redux'

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

import { API_ENDPOINT, BREAKFAST_TIME, DINNER_TIME, BREAKFAST_COLOR, LUNCH_COLOR, DINNER_COLOR } from '../../Setting';
import { FunctionStringToInt, formatDate } from '../../Helper';
import { RootState } from '../../store';

import "./Calendar.css";
import listPlugin from '@fullcalendar/list';

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
  const user_id = useSelector((state: RootState) => state.login_user_info.id);

  const [userEventList, setUserEventList] = useState<Event[]>([] as Event[]);
  const [materialList, setMaterialList] = useState([] as string[]);
  const [sumRecipeCost, setSumRecipeCost] = useState(0 as number);

  let sumCost = 0;

  const is_user_login = (user_id > 0);

  const options: AxiosRequestConfig = {
    url: `${API_ENDPOINT}/user/recipe`,
    method: "GET",
    withCredentials: false,
    params: {
      userId: user_id,
      start: "2022-08-01 00:00:00",
      end: "2022-10-10 00:00:00",
    }
  };

  //API通信を行う箇所
  useEffect(() => {
    if(!(user_id > 0)){
      navigate('/login');
    }else{
      axios(options)
        .then((res: AxiosResponse<Event[]>) => {
          const data: Event[] = res.data;
          // dateの表示形式を変更するためにdataをupdateDataに更新する
          const updateData: Event[] = [];
          data.map((event: Event) => {
            const tmp: string = event.date.substring(11);
            const updateEvent: Event = {
              title: event.title,
              date: event.date.slice(0, event.date.indexOf(" ")),
              color: (tmp === BREAKFAST_TIME) ? BREAKFAST_COLOR : ((tmp === DINNER_TIME) ? DINNER_COLOR : LUNCH_COLOR),
              recipe: event.recipe
            }
            updateData.push(updateEvent);
          })
          setUserEventList(updateData);
        })
        .catch((e: AxiosError<{ error: string }>) => {
          // エラー処理
          console.log(e.message);
        });
    }
  });

  const handleDateSelect = (selectionInfo: DateSelectArg) => {
    setMaterialList([] as string[]);
    setSumRecipeCost(0 as number);
    sumCost = 0;

    dispatch(setSelectDayStart(selectionInfo.startStr));

    const startDate = new Date(selectionInfo.startStr);
    const endDate = new Date(selectionInfo.endStr);
    const dateList = [];
    
    for(let date = startDate; date < endDate; date.setDate(date.getDate()+1)) {
      dateList.push(formatDate(date));
    }

    const materials: string[] = [];
    dateList.map((date: string) => {
      const eventList = userEventList.filter((event: Event) => event.date === date);
      eventList.map((event) => {
        // 食費の計算
        sumCost += FunctionStringToInt(event.recipe.recipeCost);
        setSumRecipeCost(sumCost);

        // レシピの材料を取得
        const recipeMaterials: string[] = event.recipe.recipeMaterials;
        recipeMaterials.map((material) => {
          if(!materials.includes(material)) {
            materials.push(material);
          }
        });
      });
    });
    setMaterialList(materials);
  }

  // レシピの材料を表示
  const displayRecipeMaterial = () => {
    return (
      materialList.map((material: string) => (
          <StyledTableRow key={material}>
            <StyledTableCell component="th" scope="row" align='center'>{material}</StyledTableCell>
          </StyledTableRow>
      ))
    )
  }

  //TODO 画面外クリック時に選択初期化処理をはさむ
  // const handleDateUnSelect = (unSelectionInfo : DateUnselectArg) => {
    //setSelectDayStart("");
    //console.log(unSelectionInfo.jsEvent.target.type);
    //let target = unSelectionInfo.jsEvent.target as HTMLElement;    // <-- ココ！
    //console.log(target.type);

  // }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickAddRecipe = () => {
    navigate('/MenuPage');
  }  

  return (
    <>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, listPlugin]} 
          headerToolbar={{
            left: 'prev',
            center: 'title',
            right: 'next'
          }}
          footerToolbar={{
            left: 'dayGridMonth',
            right: 'listMonth'
          }}
          initialView="dayGridMonth" // 初期表示のモードを設定する
          events={userEventList}
          contentHeight='auto'
          selectable={true}
          select={handleDateSelect}
          // unselect={handleDateUnSelect}
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
        合計金額  {sumRecipeCost}円
      </Typography>
    </>
  )
}

export default Calendar