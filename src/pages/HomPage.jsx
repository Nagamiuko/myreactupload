import React, { useState , useContext} from 'react'
import Header from '../components/Header/Header'
import Menubar from '../components/Menubar/Menubar'
import { TitleTab } from '../GenaralTitle'
import './Home-style.css'
import Footbar from '../components/Footer/Footbar'
import Charts from '../components/Chart/ChartsBar'
import config from '../config.json'
import axios from 'axios'
import useFetchFileData from '../components/hooks/FileData'
import { AuthContext } from '../components/context/AuthContext'
const HomPage = () => {
  TitleTab('HOME | Dashboards')
  const {user} = useContext(AuthContext)
  const [number , setNumber] = useState([])
  const { datafile , loadings , error} = useFetchFileData(user._id)
   let Num = 1
   let Num2 = 2
  const data = {
     labels:['html','php','css','js','jsx','pdf','png','jpg'],
     datasets:[
       {
        label:[datafile.map(item => item.typefile)],
        data:[Num,Num2],
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
