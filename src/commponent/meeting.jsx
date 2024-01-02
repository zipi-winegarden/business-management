

import { observer } from "mobx-react"

import { useEffect } from "react"
import MeetingStore from "../store/meetingStore"
import moment from "moment";
import Divider from '@mui/material-next/Divider';

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

        <div key={meeting.id} style={{ border:getColor(meeting.dateTime), color: getColor(meeting.dateTime) }}>
          
          
            ID: {meeting.id}
            <br />
            serviceType: {meeting.serviceType}
            <br />
            dateTime: {moment(meeting.dateTime).format("DD/MM/YYYY HH:mm")}
            <br />
            clientName: {meeting.clientName}
            <br />
            clientPhone: {meeting.clientPhone}
            <br />
            clientEmail: {meeting.clientEmail}
         
          <Divider/>
        </div>
      ))}
    </div>  
         
     </>


    )
});


export default  Meeting;