import React from 'react'
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
            height="140"
            image={props.img_url}
            alt={props.menu_name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={style_Menu_Name}>
              {props.isRecomended?<StarIcon/>:""}
              {props.menu_name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div" sx={style_Menu_Name}>
              <AccessTimeFilledIcon/>
              {props.menu_time}
            </Typography>
          </CardContent>
          <CardActions>
            <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              p: 1,
              m: 1,
              borderRadius: 1,
            }}
            >
              <Button variant="contained" size="medium" 
                onClick={() => selectDayMenu(props)}>
                  追加
              </Button>

              <a target="_blank" href={props.detail_url}>
                <Button variant="outlined"size="medium">詳細</Button>
              </a>
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