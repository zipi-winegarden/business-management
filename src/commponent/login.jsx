

import { useState, useEffect } from 'react';
import GlobalStore from "../store/globalStore"
import TextField from '@mui/material/TextField';
import {Button } from '@mui/material';
import { green, pink } from '@mui/material/colors';
import Alert from '@mui/material/Alert';
export default function Login () {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const handleLogin =  async (e) => {
    e.preventDefault();
    const responseStatus = await fetch("http://localhost:8787/login", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    
    if (responseStatus.status === 200)
        GlobalStore.setIsLogin(true)
    else
        {setError(true)
          setName('');
          setPassword('')}

  }
  return (<>
      <form onSubmit={handleLogin}>
        
        <TextField fullWidth color="secondary" label="name" variant="outlined"  name="uname"  value={name}  onChange={(e) => setName(e.target.value)} />
       
        <TextField  fullWidth color="secondary" label="password" variant="outlined"   name="password"   value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button sx={{ bgcolor: pink[500] }} fullWidth color="secondary"variant="contained" type="submit" size="md"  > Login</Button>
      </form>

      {error&&<Alert severity="error">Name or Pass is Invalid</Alert>}
  </>
  )

};
