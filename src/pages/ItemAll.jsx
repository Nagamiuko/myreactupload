import React from 'react'
import Header from '../components/Header/Header'
import Menubar from '../components/Menubar/Menubar'
import Item from '../components/ItemAll/ItemAll'
import { useState, useEffect } from 'react'
import config from '../config.json'
import axios from 'axios'
import { TitleTab } from '../GenaralTitle'
import Footbar from '../components/Footer/Footbar'
const ItemAll = () => {
   TitleTab('HOME | All Item')
   const [Datas , setData] = useState('')
   const [Loading, setloading] = useState(false)
   useEffect(()=>{
      const fetchData = async () =>{
         const { data } = await axios.get(config.apiUrl) 
            setloading(true)
            setData(data)
      }
      fetchData()
   },[])
//     const Filter = (Datas) =>{
//      setQury(Datas.filter(f => f.name.toLowerCase().includes(qury)))
//   }
  return (
    <div>
       <Header/>
      <div className="menu-center"><Menubar/></div><br/>
      {/* <div className="search-bar">
            <input className='search-input' type="text" placeholder='Search...' onChange={(e) => setQury(e.target.value)} />
         </div> <br /> */}
      <Item Loading={Loading} Data={Datas}/>
       <footer>
         <Footbar/>
       </footer>
    </div>

  )
}

export default ItemAll
