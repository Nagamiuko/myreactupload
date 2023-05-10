import React, { useState } from 'react'
import avatar from '../../assets/avatar/user.png'
import './Menubar.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Logout from './Logout'
import useFetchUser from '../hooks/UserProfile'
const Menubar = () => {
   const navigator = useNavigate()
   const [pop, setPop] = useState(false)
   const { user } = useContext(AuthContext)
   const {datauser, loadings , error} = useFetchUser(`${user._id}`)
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
                 <img src={datauser.avatar_url ? datauser.avatar_url:avatar } alt="" width={25} height={25}/>
                <h4 style={{marginLeft:'5px'}}>: {datauser.username}</h4>
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
