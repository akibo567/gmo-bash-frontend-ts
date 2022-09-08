import Calendar from './Components/Calendar';
import { Navigate, useLocation } from "react-router-dom";
import { useSelector} from 'react-redux';
import { RootState } from '../store';

const TopPage = () => {
  const user_id = useSelector((state: RootState) => state.login_user_info.id);
  

  return (
    <>
      {(!(user_id > 0))?
        <Navigate to="/login"/>
      :
        <Calendar></Calendar>}
    </>
  )
}

export default TopPage