import BusinessStore from "../store/businessStore";
import { observer } from "mobx-react"
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import ViewDetails from "./viewDetails";
const AdminDetails=(observer(({setEditForm})=>{
  
    const handleClick =  async (e) => {
        e.preventDefault();
        setEditForm(true);
      }



    return(<>
 
      <ViewDetails data={BusinessStore.business}></ViewDetails>
      <Tooltip title="Edit admin details">
      <Fab color="secondary" aria-label="edit">
        <EditIcon onClick={(e) => handleClick(e)} />
      </Fab>
    </Tooltip>
       
 
    </>)
}))
export default AdminDetails
















