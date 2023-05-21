import React, { useContext, useState } from 'react'
import './file.css'
import './loadings.css'
import { useNavigate } from 'react-router-dom'
import config from '../../config.json'
import axios from 'axios'
import FileDownload from 'js-file-download'
import { AuthContext } from '../context/AuthContext'
const ItemAll = ({Data , Loading , NoData ,setData }) => {
  const {user} = useContext(AuthContext)
  const navigator = useNavigate()
  const [Query , setQuery] = useState('')
   if(!Loading){
      return (
         <div className="lo-lo">
             <p>Loading...</p>
              <div className="main">
                <div className="box"></div>
              </div>
         </div>
      )
    } 
  const handleDelete = async (da) =>{
    try{
      setData(Data.filter((f)=> f._id !== da._id))
       await axios.delete(`${config.apiUserDataDelete}/${user._id}/${da._id}`)
    }catch(err){
     
    }
  }
return(
   <div>  
          <div className="search-bar">
              <input className='search-input' type="text" placeholder='Search...' onChange={(e)=> setQuery(e.target.value)} />
           </div> <br />
           <div className="container-box">
             <div className="item-my-file">
              <table id="customers">
                <tbody>
                  <tr>
                      <th>No.</th>
                      <th>User At</th>
                      <th>Icon</th>
                      <th>File Name</th>
                      <th>Type File</th>
                      <th>Comments</th>
                      <th>Data</th>
                      <th>Tools</th>
                  </tr>
                      { Data.filter(da=> da.name.toLowerCase().includes(Query)||da.user.username.toLowerCase().includes(Query)).map((da,index)=>(
                          <tr key={da._id}>   
                              <td>{index+1}</td>
                              <td>{da.user.username}</td>
                              <td><img src={da.iconsfile} alt="" width={40} height={40}/></td>
                              <td>{da.name}</td>
                              <td>{da.typefile}</td>
                              <td>{da.comments}</td>
                              <td>{da.dateUpload}</td>
                              <td>
                                 {
                                    da.typefile == 'pdf'?(
                                        <>
                                           <button className='btn-d-pdf' onClick=  {()=>FileDownload(da.url)}>
                                             DownPDF
                                            </button>
                                        </>):
                                        <> 
                                            <button className='btn-d' onClick={()=>FileDownload(da.source_code,`${da.name +'.'+ da.typefile}`)}>Down
                                            </button>
                                        </>
                                   }
                                  <button className='btn-e' onClick={() => navigator('/my-edit')}>Edit</button>
                                  <button onClick={()=> navigator(`/my-view/${da._id}/${da.name}`)} className='btn-v'>View</button>
                                  <button onClick={() => handleDelete(da)} className='btn-de'>Delete</button>
                              </td>
                          </tr>   
                      ))}
                     </tbody>
                </table>
              </div>      
          </div>
    </div>
  )
  // console.log(da)
}

export default ItemAll
