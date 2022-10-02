import React, { useEffect } from 'react'
import { signUp } from '../firebase/signInAndSignUp'

const SignUp = () => {

    useEffect(() => {
        signUp("Hakan", "ha79ak@gmail.com", "hEllo1!World")
        .then(() => {
            console.log("Kullanici hesap acti")
        })
        .catch((e) => {
            console.log("Hata!.. ", (e));
        })
    }, [])
  return (
    <div>signUp</div>
  )
}

export default SignUp