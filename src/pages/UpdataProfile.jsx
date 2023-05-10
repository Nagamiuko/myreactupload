import React from 'react'
import Header from '../components/Header/Header'
import ProfileUpdata from '../components/Profile/ProfileUpdata'
import Menubar from 
'../components/Menubar/Menubar'
import Footbar from '../components/Footer/Footbar'
import { TitleTab } from '../GenaralTitle'
const UpdataProfile = () => {
  TitleTab('HOME | Updata Profile')
  return (
    <div>
      <Header/>
      <div className="menu-center"><Menubar/></div> <br />
      <ProfileUpdata/>
      <footer>
          <Footbar/>
       </footer>
    </div>
  )
}

export default UpdataProfile
