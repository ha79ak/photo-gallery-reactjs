import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';
import Title from '../components/Title';
import UploadForm from '../components/UploadForm';

const Home = () => {
  const [enlargedImg, setEnlargedImg] = useState(null)
  return (
    <>
      <div>Home..</div>

      <Title />
      <UploadForm />
      <ImageGrid setEnlargedImg={setEnlargedImg} />
      {enlargedImg && <Modal enlargedImg={enlargedImg} setEnlargedImg={setEnlargedImg} />}
    </>
  )
}

export default Home