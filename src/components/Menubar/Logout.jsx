import React from 'react'
import './Menubar.css'
import { useNavigate } from 'react-router-dom'
const Logout = ({setPop}) => {
  const navigator = useNavigate()
   const handClick = () =>{
      localStorage.removeItem('user')
      navigator('/')
}
  return (
    <div>
     <div className="pup-up-logout" onClick={setPop.bind(this,false)}>
         <div className="btn-btn"onClick={(e)=> e.stopPropagation()}>
            <div onClick={handClick} className="btn">SignOut</div>
         </div>
      </div>
    </div>
  )
}

export default Logout
