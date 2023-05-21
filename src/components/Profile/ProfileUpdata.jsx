import React, { useState, useContext } from 'react'
import './pro.css'
import config from '../../config.json'
import {AuthUpdataContext} from '../context/AuthUpdataContext'       
import { AuthContext } from '../context/AuthContext'
import avatar from '../../assets/avatar/user.png'
import axios from 'axios'
const ProfileUpdata = () => {
   const {users , loading ,dispatchup } = useContext(AuthUpdataContext)
   const {user,dispatch} = useContext(AuthContext)
   const [avatarUp , setAvatarUp] = useState([])
   const [image, setFileImage] = useState("")
   const [username, setName] = useState([user.username])
   const [password, setPassword] = useState()

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
         const res =  await axios.put(`${config.apiUserUpdata}/${user._id}`,data,configs)
         dispatchup({type: "UPDATA_SUCCESS" , payload: res.data})
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
                  <input type="text" 
                     value={username}
                     placeholder= "username"
                     onChange={e => setName(e.target.value)}
                     />
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
                        <img className='img-cover-co' src={image ? image : user?.avatar_url || avatar}/>
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
