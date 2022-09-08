import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import {API_ENDPOINT} from '../../Setting';

import {Recipe} from '../../Types/Recipe';

type Props = {
  user_id: number,
  recipe_id: number,
  menu_name: string,
  detail_url: string,
  img_url: string,
  menu_time: string,
  selected_date: string,
  setIsLoadingEvent: any,
  navigateChangeEvent: any,
  isRecomended: boolean,
}

const MAX_MENU_NAME_LENGTH = 24;

const selectDayMenu = (props: Props) => {
  props.setIsLoadingEvent(true);
  axios
  .post(API_ENDPOINT + "user/recipe", {
      "userId": props.user_id,
      "date": props.selected_date,
      "recipeId": props.recipe_id,
  })
  .then((res) => {
    if(res.data.message == "success"){
      props.navigateChangeEvent();
    }else{
      alert("エラー");
    };
  }).catch(err => {
    alert('通信エラー:'+err);
    props.setIsLoadingEvent(false);
  });
}

const selectAccessDetail = (props: Props) => {
  
}

const sliceMenuName = (name: string) =>{
  if(name.length  >= MAX_MENU_NAME_LENGTH){
    return name.slice( 0, MAX_MENU_NAME_LENGTH -1 ) + "…";
  }else{
    return name;
  }
}

/*function selectDetail(e: any) {
  e.preventDefault();
  console.log('You clicked submit.');
}*/

const MenuCard = (props: Props) => {

  return (

      <div>
          <Card sx={style_Menucard}>
          <CardMedia
            component="img"
            height="180"
            image={props.img_url}
            alt={props.menu_name}
          />
          <CardContent sx={{ marginY: 0, paddingBottom: 0 }}>
            <Typography gutterBottom variant="h5" component="div" sx={style_Menu_Name}>
              {props.isRecomended?<StarIcon/>:""}
              {sliceMenuName(props.menu_name)}
            </Typography>
            <Typography 
              gutterBottom variant="subtitle1"
              component="div"
              sx={{ 
                display: 'flex', 
                justifyContent: 'flex-end',
              }}>
              <AccessTimeFilledIcon/>
              調理時間：{props.menu_time}
            </Typography>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                borderRadius: 1,
              }}
            >
              <Button
                variant="contained"
                size="medium" 
                sx={{ marginLeft: 4.5, marginRight: 5}}
                onClick={() => selectDayMenu(props)}
              >
                  追加
              </Button>
              <Button 
                variant="outlined"
                size="medium"
                sx={{ marginLeft: 4, marginRight: 4.5}}
                href={props.detail_url}
              >
                  詳細
              </Button>
            </Box>
          </CardActions>
        </Card>
      </div>


  )
}




const style_Menucard = {
  background: '#ffffff',
  width : '300px',
  height : '350px',
  //marginBottom : '10px',
  //marginRight : '20px',
  padding : '10px',
};

const style_Menu_Name = {
  fontSize: '20px'
};

const style_Menu_Image = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '200px',
};

const style_Detail_Button = {
  flexGrow: 1
};


const style_Buttons_Container = {
  color: 'blue'
};


export default MenuCard