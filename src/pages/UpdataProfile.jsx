import React from 'react'
import Header from '../components/Header/Header'
import ProfileUpdata from '../components/Profile/ProfileUpdata'
import Menubar from 
'../components/Menubar/Menubar'
import Footbar from '../components/Footer/Footbar'
const UpdataProfile = () => {
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
