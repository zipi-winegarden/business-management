
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ServicesStore from "../store/servicesStore"
import { observer } from "mobx-react"
import SaveIcon from '@mui/icons-material/Save';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddService = observer(() => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dataForm, setDataForm] = React.useState({
    id: "",
    name: "",
    description: "",
    price: "",
    duration: "",
  })
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataForm({ ...dataForm, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    ServicesStore.EditServices(dataForm)
    setOpen(false)
  }

  return (
    <div>
          <Tooltip title="Add a service">
          <Fab color="secondary" aria-label="add">
        <AddIcon onClick={handleOpen}/>
      </Fab>
    </Tooltip>
     

      
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            
            <TextField fullWidth color="secondary" label="id" variant="outlined" name="id"  onChange={handleChange} />

            <TextField fullWidth color="secondary" label="name" variant="outlined" name="name" onChange={handleChange} />

            <TextField fullWidth color="secondary"  required label="description" variant="outlined"name="description"  onChange={handleChange} />

            <TextField fullWidth color="secondary" label="price" variant="outlined" name="price"  onChange={handleChange} />

            <TextField fullWidth color="secondary" label="duration" variant="outlined" name="duration"  onChange={handleChange} />
           
            <Button fullWidth type="submit" variant="outlined" color="secondary" startIcon={<SaveIcon />}> Save</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
});
export default AddService;