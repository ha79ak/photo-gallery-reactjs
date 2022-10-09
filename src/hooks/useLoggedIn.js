import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { fbAuth } from '../firebase/config';

const useLoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        onAuthStateChanged(fbAuth, (user) => {
            setIsLoggedIn(!!user)
        })
    },[]);

  return isLoggedIn;
}

export default useLoggedIn;