import { Box, TextField, CssBaseline, Button, Container, Link, Avatar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { signUp } from '../firebase/signInAndSignUp'

import LockOutlinedIcon from "@mui/icons-material/LockOutlined"

const SignUp = () => {

    // useEffect(() => {
    //     signUp("Hakan", "ha79ak@gmail.com", "hEllo1!World")
    //     .then(() => {
    //         console.log("Kullanici hesap acti")
    //     })
    //     .catch((e) => {
    //         console.log("Hata!.. ", (e));
    //     })
    // }, [])
  return (
    <>
    <CssBaseline />
    <Container maxWidth="xs">
    <Box
      component="form"
      sx={{mt: 4}}
    >
      <Avatar sx={{ mx:"auto", bgcolor:"#589a9f"}}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5" sx={{textAlign: "center"}}>Sign Up</Typography>
      <TextField 
        fullWidth 
        margin="normal" 
        label="Name" 
        required 
        autoComplete="name" 
        autoFocus
      />
      <TextField 
        fullWidth 
        margin="normal" 
        label="Email" 
        required 
      />
      <TextField 
        fullWidth 
        margin="normal" 
        label="Password" 
        required 
        type="password" 
      />
      <Button 
        type='Submit' 
        variant="contained" 
        fullWidth 
        sx={{mt: 2, bgcolor:"#589a9f", "&:hover": {backgroundColor: '#efb6b2'}}}
      >Sign Up
      </Button>
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2
      }}
    >
      <Link sx={{color:"#589a9f", "&:hover": {color: '#efb6b2'}}}>Already have an account? Sign In</Link>
      </Box>
    </Box>
  </Container>
  </>
  )
}

export default SignUp