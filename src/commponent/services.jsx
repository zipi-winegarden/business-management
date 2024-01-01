import ServicesStore from "../store/servicesStore"
import ViewDetails from "./viewDetails"
import AddService from "./addService"
import { observer } from "mobx-react"
import GlobalStore from "../store/globalStore"
import { useEffect } from "react"
import Divider from '@mui/material-next/Divider';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {  pink } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const Services = observer(() => {
    useEffect(() => {
        ServicesStore.initServices()
    }, [])
    return (
        <>

            <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
                {ServicesStore.servicesList.map((service, index) => (
                    <><ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: pink[500] }}>
                                <AssignmentIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={index}
                         secondary=
                         {<ViewDetails key={index} data={service}/> }/>
                        
                    </ListItem>
                        <Divider variant="inset" component="li" /></>
                ))}
            </List>
            
            {GlobalStore.isLogin && <AddService></AddService>}


        </>


    )
});


export default Services;

