import React, { useState, useEffect } from "react";
import ServicesStore from "../store/servicesStore";
import ViewDetails from "./viewDetails";
import AddMeeting from "./addMeeting"
import { observer } from "mobx-react";
import BusinessStore from "../store/businessStore";
import MeetingStore from "../store/meetingStore";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material-next/Divider';
import Avatar from '@mui/material/Avatar';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {  green } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
const User = observer(() => {
  const [service, setService] = useState({});
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    BusinessStore.initBusinessData();
    ServicesStore.initServices();
    MeetingStore.setIsAdd(false)
  }, []);

  const handleClick = (service) => {
    setService(service);
    setShowForm(true);
  };

  return (<>
    <div>
    <Box sx={{minWidth: 275  ,display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
      <Card variant="outlined">{Object.entries(BusinessStore.business).map(([key, value]) => (
        <CardContent><Typography sx={{ mb: 1.5 }} color="text.secondary" key={key}>{key}: {value}</Typography></CardContent>
      ))}</Card>
    </Box>
    
 
   
  

    </div>
    <div>
      {ServicesStore.servicesList.map((s,index) => (
        <>
        <Button variant="contained" color="success"
          key={index}
          onClick={() => handleClick(s)
          }
        >
          <List sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>
               
                    <><ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: green[500] }}>
                                <SupportAgentIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={index}
                         secondary=
                         { <ViewDetails  data={{
                          name: s.name,
                          description: s.description
                        }} />}/>
                        
                    </ListItem>
                        <Divider variant="inset" component="li" /></>
                
            </List>
         
        </Button>
        <br/>
        </>
      ))}
      {showForm && (
        <AddMeeting serviceType={service.description} />
      )
      }
      { MeetingStore.isAdd&&<Alert >Your appointment has been successfully added</Alert>
      }
    </div>

  </>);
});

export default User;
