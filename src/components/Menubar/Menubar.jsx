import React, { useState } from 'react'
import avatar from '../../assets/avatar/user.png'
import './Menubar.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthUpdataContext } from '../context/AuthUpdataContext'
import Logout from './Logout'
const Menubar = () => {
   const navigator = useNavigate()
   const [pop, setPop] = useState(false)
   const { users } = useContext(AuthUpdataContext)
  return (
    <div>
      <div className="box-bg-mm">
         <nav>
            <ul>
               <button onClick={()=> navigator(`/dashboard`)}>Dashboard</button>
               <button  onClick={()=> navigator(`/my-items`)}>My Item</button>
               <button onClick={()=> navigator('/item-all')}>All Item</button>
               <button onClick={()=> navigator(`/my/profile`)}>Set Profile</button>
               <button onClick={()=> navigator(`/my-upload`)}>My Uploads</button>
            </ul>
         </nav>
         <div className="box-u-r">
             <button onClick={setPop.bind(this,true)} className="sty-us">
                 <img src={users.avatar_url ? users.avatar_url:avatar } alt="" width={35} height={35}/>
                <h4 style={{marginLeft:'5px'}}>: {users.username}</h4>
             </button>
              <div>
                { pop &&  <Logout setPop={setPop}/>}
              </div>
         </div>
      </div>
    </div>
  )
}

export default Menubar
