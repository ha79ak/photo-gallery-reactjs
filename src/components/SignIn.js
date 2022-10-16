import { Box, TextField, CssBaseline, Button, Container, Link, Avatar, Typography } from '@mui/material'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { useSelector, useDispatch } from 'react-redux'
import { changeEmail, changePassword, login } from '../redux/authSlice'

const SignIn = () => {

  const email = useSelector((state) => state.auth.email)
  const password = useSelector((state) => state.auth.password)

  const isLoading = useSelector((state) => state.auth.isLoading)
  const error = useSelector((state) => state.auth.error)

  const dispatch = useDispatch()

  const handleEmailChange = (e) => {dispatch(changeEmail(e.currentTarget.value))}
  const handlePasswordChange = (e) => {dispatch(changePassword(e.currentTarget.value))}

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({email, password}))
  }
  return (
    <>
    <CssBaseline />
    <Container maxWidth="xs">
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{mt: 4}}
    >
      <Avatar sx={{ mx:"auto", bgcolor:"#589a9f"}}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5" sx={{textAlign: "center"}}>Sign In</Typography>
      {error && <Typography sx={{textAlign: "center", color:"error.main"}}>{error}</Typography>}
      <TextField 
        fullWidth 
        margin="normal" 
        // label="Email"
        placeholder='Email'
        required 
        autoComplete="email" 
        autoFocus
        value={email}
        onChange={handleEmailChange}
        error={error}
      />
      <TextField 
        fullWidth 
        margin="normal" 
        // label="Password"
        placeholder='Password'
        required 
        type="password"
        value={password}
        onChange={handlePasswordChange}
        error={error}
      />
      <Button 
        type='Submit' 
        variant="contained" 
        fullWidth 
        sx={{mt: 2, bgcolor:"#589a9f", "&:hover": {backgroundColor: '#efb6b2'}}}
      >{isLoading ? "Loading..." : "Sign In"}
      </Button>
    <Box 
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 2
      }}
    >
      <Link sx={{color:"#589a9f", "&:hover": {color: '#efb6b2'}}}>Forgot Password?</Link>
      <Link sx={{color:"#589a9f", "&:hover": {color: '#efb6b2'}}}>Don't have an account ? Sign Up</Link>
      </Box>
    </Box>
  </Container>
  </>
  )
}

export default SignIn