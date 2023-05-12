import React, { useContext} from 'react'
import Header from '../components/Header/Header'
import Menubar from '../components/Menubar/Menubar'
import { TitleTab } from '../GenaralTitle'
import './Home-style.css'
import Footbar from '../components/Footer/Footbar'
import Charts from '../components/Chart/ChartsBar'
import useFetchFileData from '../components/hooks/FileData'
import { AuthContext } from '../components/context/AuthContext'
const HomPage = () => {
  TitleTab('HOME | Dashboards')
  const {user} = useContext(AuthContext)
  const { datafile } = useFetchFileData(user._id)
  const data = {
     labels:['html','php','css','js','jsx','pdf','png','jpg'],
     datasets:[
       {
        label:[datafile.map(item => item.typefile)],
        data:[0,0],
        backgroundColor:'#161e83'
       }
    ]
  }
    return (
    <div>
      <Header/>
      <div className="menu-center"><Menubar/></div> <br />
         <div className="container">
            こんにちは
            <Charts datach={data}/>
         </div>
         <footer>
          <Footbar/>
        </footer>
    </div>
  )
}

export default HomPage
