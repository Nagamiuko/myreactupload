import React from 'react'
import { useState,useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import config from '../../config.json'
import { AuthContext } from '../context/AuthContext'
import Swal from 'sweetalert2'
import axios from 'axios'
import './signin.css'
const SingIn = () => {
  const [creden, setCreder] = useState({
     username:undefined,
     password:undefined,
  })
  const {user,loading ,err, dispatch} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleChange = (e) =>{
    setCreder((prev) => ({...prev, [e.target.id]:e.target.value}))
  }
const handClick = async (e) =>{
   e.preventDefault()
   dispatch({type: "LOGIN_START"})
   try{
        const res = await axios.post(config.apiUserLogin,creden )
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        if(loading)  return <p>Loading....</p> 
        Swal.fire({
          icon: 'success',
          title: 'ยินดีต้อนรับ',
          text: 'ขอบคุณที่ร่วมเป็นสมาชิกของเรา 😍',
        })
         navigate('/dashboard')
        //  window.location= '/dashboard'
    }catch(err){
       dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
          Swal.fire({
           icon: 'error',
           title: 'ชื่อผู้ใช้ และ รหัสผ่านไม่ถูกต้อง',
           text: 'โปรดตรวจสอบอีกครั้ง!',
           })
        navigate('/')
    }
   }
  return (
    <div>
        <div className='head-h'>
          <div className='log-l'>
                <h1>เข้าสู่ระบบ</h1>
             <div className="set-box-row">
              <label className='font-color-f'>ชื่อผู้ใช้งาน</label>
              <input className='font-pp' type="email"
                id="username" 
                placeholder='ชื่อผู้ใช้งาน'
                onChange={handleChange}
                />
              <label className='font-color-f'>รหัสผ่าน</label>
              <input className='font-pp' type="password" 
                id="password" 
                placeholder='รหัสผ่าน' 
                onChange={handleChange}
                />
                <button className='btn-l' type="submit" dispatch={loading} onClick={handClick}>เข้าสู่ระบบ</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SingIn
