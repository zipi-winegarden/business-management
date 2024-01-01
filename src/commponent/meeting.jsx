
import ServicesStore from "../store/servicesStore"
import ViewDetails from "./viewDetails"
import AddService from "./addService"
import { observer } from "mobx-react"
import GlobalStore from "../store/globalStore"
import { useEffect ,useState} from "react"
import MeetingStore from "../store/meetingStore"
import moment from "moment";
const Meeting=observer(()=>{
     

    useEffect(()=>{
        MeetingStore.initMeeting()
      },[])
     
      const getColor = (dateTime) => {
        const today = new Date();
        const nextWeek = new Date();
        nextWeek.setDate(today.getDate() + 7);
    
        const meetingDate = new Date(dateTime);
        
        if (meetingDate.toDateString() === today.toDateString()) {
          return 'red';
        }
        if (meetingDate >= today && meetingDate <= nextWeek) {
          return 'orange';
        }
        return 'green';
      };
    return(
     <>
        <div>
      {[...MeetingStore.meetingList].sort((a, b) => moment(a.dateTime).valueOf() - moment(b.dateTime).valueOf())
.map((meeting,index) => (
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
        // <div key={meeting.id} style={{ border:getColor(meeting.dateTime), color: getColor(meeting.dateTime) }}>
        //   <h2>מידע על פגישה</h2>
        //   <p>
        //     ID: {meeting.id}
        //     <br />
        //     סוג שירות: {meeting.serviceType}
        //     <br />
        //     תאריך ושעה: {moment(meeting.dateTime).format("DD/MM/YYYY HH:mm")}
        //     <br />
        //     שם לקוח: {meeting.clientName}
        //     <br />
        //     טלפון לקוח: {meeting.clientPhone}
        //     <br />
        //     דוא"ל לקוח: {meeting.clientEmail}
        //   </p>
          
        // </div>
      ))}
    </div>  
         
     </>


    )
});


export default  Meeting;