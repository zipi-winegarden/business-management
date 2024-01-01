import GlobalStore from "../store/globalStore"
import { useState } from "react"
import BusinessStore from "../store/businessStore"
import { observer } from "mobx-react";
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const FormEditDetails=observer(({ setEditForm })=> {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [owner, setOwner] = useState("")
  const [logo, setLogo] = useState("")
  const [description, setDescription] = useState("")
  const style = {
    width: 250,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    BusinessStore.EditBusiness({id, name, address, phone, owner, logo, description})
    setEditForm(false);
  }

  return (
    <>
      <Box sx={style}>
      <form onSubmit={handleSubmit}>
       
        <TextField fullWidth color="secondary" variant="outlined" label="id"  name="id"  onChange={(e) => setId(e.target.value)} />

        <TextField fullWidth color="secondary" variant="outlined" label="name"  name="name"  onChange={(e) => setName(e.target.value)} />

        <TextField fullWidth color="secondary" variant="outlined" label="address"  name="address"  onChange={(e) => setAddress(e.target.value)} />

        <TextField fullWidth color="secondary" variant="outlined" label="phone"  name="phone"  onChange={(e) => setPhone(e.target.value)} />

        <TextField fullWidth color="secondary" variant="outlined" label="owner"  name="owner" onChange={(e) => setOwner(e.target.value)} />

        <TextField fullWidth color="secondary" variant="outlined" label="logo"  name="logo" onChange={(e) => setLogo(e.target.value)} />

        <TextField fullWidth color="secondary" variant="outlined" label="description"  name="description" onChange={(e) => setDescription(e.target.value)} />

        <Button fullWidth type="submit"  variant="outlined" color="secondary"  startIcon={<SaveIcon />}> Save</Button>

      </form>
      </Box>
    </>
  )
})
export default FormEditDetails;
