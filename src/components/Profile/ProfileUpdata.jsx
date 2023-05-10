import React, { useState,useEffect, useContext, useRef } from 'react'
import './pro.css'
import config from '../../config.json'
import {AuthContext,AuthUpdataContext} from '../context/AuthContext'       
import avatar from '../../assets/avatar/user.png'
import axios from 'axios'
import useFetchUser from '../hooks/UserProfile'
const ProfileUpdata = () => {
   const {user} = useContext(AuthContext)
   const {datauser , loadings ,error} = useFetchUser(`${user._id}`)
   const {userUpdata} = useContext(AuthUpdataContext)
   // const [userdataup , setUserDataUp] = useState({
   //        username:undefined,
   //        password:undefined
   // })
   const [avatarUp , setAvatarUp] = useState([])
   const [image, setFileImage] = useState("")
   const [username, setName] = useState()
   const [password, setPassword] = useState()
   const [passwordOld, setPasswordOld] = useState()
    console.log(username , password)
   const [loading ,setLoading] = useState(false)
   // const change = (event) =>{
   //     setUserDataUp((prev) => ({...prev,[event.target.id]: event.target.value}))
   // }
   const previewFile =(file)=> {
   const reader  = new FileReader()
   reader.readAsDataURL(file)
   reader.onloadend = () =>{
       setFileImage(reader.result)
   }
}
   const handleChange = (e) =>{
      const file = e.target.files[0]
      setAvatarUp(file)
      previewFile(file) 
   }
   const handleSummit = async (e) =>{
      e.preventDefault()
         const data = new FormData();
         data.append("image",avatarUp)
         data.append("username",username)
         data.append("password",password)
        const configs = {
             headers:{
              'content-type':'multipart/form-data',
             },
        }
    try{ 
        if(username == null ){
           alert('Username No Data !' )
        } else if(password == null){
         alert('Old Password No Data !' )
        }
        else{
          await axios.put(`${config.apiUserUpdata}/${user._id}`,data,configs)
          setLoading(true)
          if(loading){
            <div className="lo-lo">
             <p>Loading...</p>
             <div className="main">
               <div className="box"></div>
             </div>
           </div>
           }
          alert('Updata Sucessfylly !')
          window.location = '/my/profile'              
        }
        }catch(err){
          console.log(err)
        }
  }
  return (
    <div className='container-i'>
       <div className="box-bg-pp">
           <div className='row-col'>
               <h2>Setting Profile </h2>
                  <label htmlFor="">Username</label>
                  <small>*ต้องระบุ</small>
                  <input type="text" 
                     id='username'
                     name="username" 
                     // value={datauser.username}
                     placeholder= {datauser.username}
                     onChange={e => setName(e.target.value)}/>
                  <label htmlFor="">Old Password</label>
                  <small>*ต้องระบุ</small>
                  <input type="text" id="comments" placeholder='Old Password...' 
                  onChange={(e)=> setPassword(e.target.value)}/>
                  <label htmlFor="">New Password</label>
                  <input type="text" 
                  id="password"
                  placeholder='New Password...' 
                  onChange={e => setPassword(e.target.value)}/>
                  <button className='btn-p' onClick={handleSummit}>Save</button>
           </div>
                  <div className="img-r">
                    <div className="img-sty">
                     <label className='sty-im' htmlFor='image'>  
                        <img className='img-cover-co' src={image ? image : datauser.avatar_url || avatar}/>
                        <h4 className='h4'>Edit</h4>
                     </label> 
                    </div>
                     <input style={{display:'none'}} type="file" id="image" onChange={e=> handleChange(e)}/>     
                  </div>     
         </div>      
    </div>
  )
}

export default ProfileUpdata
