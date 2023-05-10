import React from 'react'
import { useState, useEffect,useContext  } from 'react'
import Header from '../components/Header/Header'
import Menubar from '../components/Menubar/Menubar'
import config from '../config.json'
import axios from 'axios'
import Items from '../components/Myitem/MyItem'
import { useParams } from 'react-router-dom'
import No_Data from '../components/Nodata/No_Data'
import { TitleTab } from '../GenaralTitle'
import Footbar from '../components/Footer/Footbar'
import { AuthContext } from '../components/context/AuthContext'
const MyItem = () => {
   TitleTab('HOME | My Item ')
   const {user} = useContext(AuthContext)
   const [Datas , setData] = useState('')
   const [DatasNull , setDataNull] = useState('')
   const [Loading, setloading] = useState(false)
   useEffect(()=>{
      const fetchData = async () =>{
         const { data } = await axios.get(`${config.apiDataUser}/${user._id}`)
         setloading(true)
         setData(data)
      }
      fetchData()
   },[])
      return (
         <div>
            <Header/>
            <div className="menu-center"><Menubar/></div> <br />
              <Items Data={Datas} Loading={Loading}/>
              <footer>
                <Footbar/>
              </footer>
         </div>
      )
}

export default MyItem
