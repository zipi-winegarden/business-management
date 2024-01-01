import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import MeetingStore from '../store/meetingStore';

export default function MyDatePicker({ onChange }) {
  const handleDateChange = (date) => {
    onChange(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker
          label="Basic date time picker"
          disablePast={true}
          onChange={handleDateChange}
          className={!MeetingStore.isAdd ? 'error-border' : ''}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}



