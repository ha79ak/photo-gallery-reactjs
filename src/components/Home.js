import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';
import Title from '../components/Title';
import UploadForm from '../components/UploadForm';
import { logout } from '../redux/authSlice';
import Button from '@mui/material/Button';
import { onAuthStateChanged } from 'firebase/auth';
import { fbAuth } from '../firebase/config';

const Home = () => {
  const [enlargedImg, setEnlargedImg] = useState(null)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  const [userEmail, setUserEmail] = useState("")
  useEffect(() =>{
      onAuthStateChanged(fbAuth, (user) => {
        setUserEmail(user.email)
    })
  }, [userEmail])
  return (
    <>
      <Button onClick={handleLogout} sx={{color:"#589a9f"}} variant="outlined">Sign Out</Button>
      <Button sx={{color:"#589a9f"}} variant="outlined"><a href='/sign-up'>Sign Up</a></Button>
      
      <Title />
      { userEmail == "ha79ak@gmail.com" && <UploadForm /> }
      <ImageGrid setEnlargedImg={setEnlargedImg} />
      {enlargedImg && <Modal enlargedImg={enlargedImg} setEnlargedImg={setEnlargedImg} />}
    </>
  )
}

export default Home