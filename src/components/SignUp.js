import { Box, TextField, CssBaseline, Button, Container, Link, Avatar, Typography } from '@mui/material'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { useSelector, useDispatch } from 'react-redux'
import { changeName, changeEmail, changePassword } from '../redux/authSlice'

const SignUp = () => {
  
  const name = useSelector((state) => state.auth.name)
  const email = useSelector((state) => state.auth.email)
  const password = useSelector((state) => state.auth.password)

  const dispatch = useDispatch()

  const handleNameChange = (e) => {dispatch(changeName(e.currentTarget.value))}
  const handleEmailChange = (e) => {dispatch(changeEmail(e.currentTarget.value))}
  const handlePasswordChange = (e) => {dispatch(changePassword(e.currentTarget.value))}

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
        value={name}
        onChange={handleNameChange}
      />
      <TextField 
        fullWidth 
        margin="normal" 
        label="Email" 
        required
        value={email}
        onChange={handleEmailChange}
      />
      <TextField 
        fullWidth 
        margin="normal" 
        label="Password" 
        required 
        type="password"
        value={password}
        onChange={handlePasswordChange}
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