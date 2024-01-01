import { Outlet,Link } from "react-router-dom"
import BusinessData from "./BusinessData"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';
export default function BusinessAdmin(){
    
    return(<>
    <BusinessData />
    <br/>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
    <ButtonGroup color="secondary"  aria-label="medium secondary button group">
    <Button variant="outlined" key="services"startIcon={<AssignmentIcon />}><Link   color="inherit" to="./services">services</Link></Button>
    <Button variant="outlined"key="meeting"  endIcon={<GroupsIcon />}><Link  color="inherit" to="./meeting">meeting</Link></Button>
    </ButtonGroup>
    </Box>
    <Outlet/>
   
    </>)
}
