import React ,{useState , useEffect} from 'react'
import Header from '../components/Header/Header'
import Menubar from '../components/Menubar/Menubar'
import { useParams } from 'react-router-dom'
import Views from '../components/Viewfile/Views'
import config from '../config.json'
import axios from 'axios'
const ViewItem = () => {
   const {fileid} = useParams()
   const [Loading, setloading] = useState(false)
   const [Datas , setData] = useState('')
   useEffect(()=>{
      const fetchData = async () =>{
         const { data } = await axios.get(`${config.apiDataViews}/${fileid}`)
         setloading(true)
         setData(data)
      }
      fetchData()
   },[])
   console.log(fileid)
  return (
    <div>
      <Header/>
      <div className="menu-center"><Menubar/></div> <br />
       <Views DataView={Datas} Loading={Loading}/>
    </div>
  )
}

export default ViewItem
