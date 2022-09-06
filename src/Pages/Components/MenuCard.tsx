import React from 'react'

type Props = {
  id: number,
  menu_name: string,
  detail_url: string
}

function selectDayMenu(e: any) {
  e.preventDefault();
  console.log('You clicked submit.');
  alert("aadal;dl");
}

function selectDetail(e: any) {
  e.preventDefault();
  console.log('You clicked submit.');
}

const MenuCard = (props: Props) => {

  return (
    <div style={style_Menucard}>
      <div>
        <img src="test_food_picture.jpg" alt="picture" style={style_Menu_Image}/>
      </div>
        <p style={style_Menu_Name}>{props.menu_name}</p>
        <div style={style_Buttons_Container}>
          <button onClick={selectDayMenu}>
            選択
          </button>
          <a target="_blank" href={props.detail_url}>
          <button style={style_Detail_Button}>
            詳細
          </button>
          </a>
        </div>
    </div>


  )
}


const style_Menucard = {
  background: '#ffffff',
  width : '300px',
  height : '200px',
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