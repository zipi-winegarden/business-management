import { useState, useEffect } from "react";

import * as React from 'react';

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { observer } from "mobx-react"
import MyDatePicker from "./MyDatePicker";
import MeetingStore from "../store/meetingStore"
import { TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Box from "@mui/material/Box"
import "../App.css"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddMeeting = observer(({ serviceType }) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  const [service, setService] = useState({

    serviceType,
    dateTime: "",
    clientName: "",
    clientPhone: "",
    clientEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({
      ...service,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
MeetingStore.setIsAdd(false)
    e.preventDefault();
   await MeetingStore.editMeeting(service)
   console.log("MeetingStore.isAdd: ",MeetingStore.isAdd)
   if(MeetingStore.isAdd)
        setOpen(false)
    e.target.reset();
  }

  return (
    <div>
      <Button onClick={handleOpen}>Schedule a business meeting</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}

      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>

            <TextField
              label="serviceType"
              name="serviceType"
              value={serviceType}
              disabled={true}
              color="secondary"
              fullWidth
             
            />
            <MyDatePicker
            color="secondary"
            fullWidth
              name="dateTime"
              onChange={(date) => {
                setService((prevService) => ({
                  ...prevService,
                  dateTime: date,
                }));
              }}
            />

            <TextField
            fullWidth
              label="clientName"
              name="clientName"
              onChange={handleChange}
              color="secondary"
            />
            <TextField
            fullWidth
              label="clientPhone"
              name="clientPhone"
              onChange={handleChange}
              color="secondary"
            />
            <TextField
            fullWidth
              label="clientEmail"
              name="clientEmail"
              onChange={handleChange}
              color="secondary"
            />
            <Button fullWidth type="submit" variant="outlined" color="secondary" startIcon={<SendIcon />}>Send</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
});
export default AddMeeting;