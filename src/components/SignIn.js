import React, { useEffect } from 'react'
import { signIn } from '../firebase/signInAndSignUp'

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
    <div>Hi, signIn</div>
  )
}

export default SignIn