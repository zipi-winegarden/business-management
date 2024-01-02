import BusinessStore from "../store/businessStore";
import { observer } from "mobx-react"
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import ViewDetails from "./viewDetails";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const AdminDetails=(observer(({setEditForm})=>{
  
    const handleClick =  async (e) => {
        e.preventDefault();
        setEditForm(true);
      }



    return(<>
   <Box sx={{minWidth: 275  ,display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
      <Card variant="outlined">{Object.entries(BusinessStore.business).map(([key, value]) => (
        <CardContent><Typography sx={{ mb: 1.5 }} color="text.secondary" key={key}>{key}: {value}</Typography></CardContent>
      ))}</Card>
    </Box>
      
      <Tooltip title="Edit admin details">
      <Fab color="secondary" aria-label="edit">
        <EditIcon onClick={(e) => handleClick(e)} />
      </Fab>
    </Tooltip>
       
 
    </>)
}))
export default AdminDetails
















