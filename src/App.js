import { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { fbAuth, fbSignOut } from './firebase/config';

function App() {
  const [enlargedImg, setEnlargedImg] = useState(null)
  // const kullanici = fbAuth
  // kullanici && console.log("KULLANICI: ", kullanici.currentUser.email);
  // const handleSignOut = () => {
  //   fbSignOut(fbAuth).then(() => {console.log("Signout basarili..")}).catch((error) => {console.log("Signout Failed.. ", error)})
  // }
  return (
    <div className="App">
      
      <Title />
      {/* {kullanici && kullanici.currentUser.email == "ha79ak@gmail.com" && <SignUp />}
      {kullanici && <button
      onClick={
        handleSignOut
      }
      >Signout</button>} */}
      {/* <SignIn /> */}
      <UploadForm />
      <ImageGrid setEnlargedImg={setEnlargedImg} />
      {enlargedImg && <Modal enlargedImg={enlargedImg} setEnlargedImg={setEnlargedImg} />}
    </div>
  );
}

export default App;
