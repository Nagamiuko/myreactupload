import React from 'react'
import MyUpload from '../components/CreateUpload/Create'
import Header from '../components/Header/Header'
import Menubar from '../components/Menubar/Menubar'
import { TitleTab } from '../GenaralTitle'
import Footbar from '../components/Footer/Footbar'
const Upload = () => {
  TitleTab('HOME | My Uploads')
  return (
    <div>
       <Header/>
       <div className="menu-center"><Menubar/></div> <br />
       <MyUpload/>
       <footer>
          <Footbar/>
       </footer>
    </div>
  )
}

export default Upload
