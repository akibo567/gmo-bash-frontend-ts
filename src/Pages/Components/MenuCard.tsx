import React from 'react'
import axios from 'axios';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {API_ENDPOINT} from '../../Setting';

type Props = {
  user_id: number,
  recipe_id: number,
  menu_name: string,
  detail_url: string,
  selected_date: string,
  setIsLoadingEvent: any,
  navigateChangeEvent: any,
}

const selectDayMenu = (props: Props) => {
  props.setIsLoadingEvent(true);
  axios
  .post(API_ENDPOINT + "success", {
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
            image="test_food_picture.jpg"
            alt={props.menu_name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={style_Menu_Name}>
            {props.menu_name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="medium" 
              onClick={() => selectDayMenu(props)}>
                追加
            </Button>

            <a target="_blank" href={props.detail_url}>
              <Button variant="outlined"size="medium">詳細</Button>
            </a>
          </CardActions>
        </Card>
      </div>


  )
}




const style_Menucard = {
  background: '#ffffff',
  width : '300px',
  height : '300px',
  marginBottom : '10px',
  marginRight : '20px',
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