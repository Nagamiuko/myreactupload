import React from 'react'
import SingIn from '../components/Login/SignIn'
import { TitleTab } from '../GenaralTitle'
const Login = () => {
  TitleTab(' HOME | Login')
  return (
    <div>
     <SingIn/>
    </div>
  )
}

export default Login
