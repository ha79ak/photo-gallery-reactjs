import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';
import Title from '../components/Title';
import UploadForm from '../components/UploadForm';
import { logout } from '../redux/authSlice';

const Home = () => {
  const [enlargedImg, setEnlargedImg] = useState(null)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <>
      <button onClick={handleLogout}>Sign Out</button>

      <Title />
      <UploadForm />
      <ImageGrid setEnlargedImg={setEnlargedImg} />
      {enlargedImg && <Modal enlargedImg={enlargedImg} setEnlargedImg={setEnlargedImg} />}
    </>
  )
}

export default Home