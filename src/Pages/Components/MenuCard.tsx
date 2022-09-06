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
    <div>
      <div>
        <img src="test_food_picture.jpg" alt="picture"  width='100' />
      </div>
    {props.menu_name}
      <button onClick={selectDayMenu}>
        選択
      </button>
      <a target="_blank" href={props.detail_url}>
      <button>
        詳細
      </button>
      </a>
    </div>


  )
}

export default MenuCard