import React from 'react'
import SingIn from '../components/Login/SignIn'
import { TitleTab } from '../GenaralTitle'
import Header from '../components/Header/Header'
import Footbar from '../components/Footer/Footbar'
const Login = () => {
  TitleTab(' HOME | Login')
  return (
    <div>
     <header>
      <Header/>
      </header> 
      <SingIn/>
       <footer>
        <Footbar/>
       </footer>
    </div>
  )
}

export default Login
