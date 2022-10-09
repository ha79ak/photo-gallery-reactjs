import { Box, TextField, CssBaseline, Button, Container, Link, Avatar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { signIn } from '../firebase/signInAndSignUp'

import LockOutlinedIcon from "@mui/icons-material/LockOutlined"

const SignIn = () => {

    // useEffect(() => {
    //     signIn("ha79ak@gmail.com", "hEllo1!World")
    //     .then(() => {
    //         console.log("Kullanici giris yapti")
    //     })
    //     .catch((e) => {
    //         console.log("Giriste Hata!.. ", (e));
    //     })
    // }, [])
  return (
    <>
    <CssBaseline />
    <Container maxWidth="xs">
    <Box
      component="form"
      sx={{mt: 4}}
      // style={{
      //   display: "flex",
      //   flexDirection: "column"
      // }}
    >
      <Avatar sx={{ mx:"auto", bgcolor:"#589a9f"}}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5" sx={{textAlign: "center"}}>Sign In</Typography>
      <TextField 
        fullWidth 
        margin="normal" 
        label="Email" 
        required 
        autoComplete="email" 
        autoFocus
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
        sx={{mt: 2, bgcolor:"#589a9f" }}
      >Sign In
      </Button>
    <Box 
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 2
      }}
    >
      <Link sx={{color:"#589a9f"}}>Forgot Password?</Link>
      <Link sx={{color:"#589a9f"}}>Don't have an account ? Sign Up</Link>
      </Box>
    </Box>
  </Container>
  </>
  )
}

export default SignIn