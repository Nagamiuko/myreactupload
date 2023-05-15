import React, { useState } from 'react'
import './file.css'
import './loading.css'
import './Search.css'
import { useNavigate } from 'react-router-dom'
import FileDownload from 'js-file-download'
const ItemAll = ({Data , Loading ,Search }) => {
  const [Query , setQuery] = useState('')
  const navigator = useNavigate()
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
                      {Data.filter(da=> da.name.toLowerCase().includes(Query)||da.user.username.toLowerCase().includes(Query)).map((da,i)=>(
                          <tr key={da._id}>   
                              <td>{i+1}</td>
                              <td>
                                <div className="user-avatar">
                                {da.user.username} <img src={da.user.avatar_url} alt="" width={45} height={45} style={{borderRadius:'50px'}}/></div>
                              </td>
                              <td>
                                <div className="icon-sty">
                                    <img src={da.iconsfile} alt="" width={40} height={40}/>
                                </div>
                              </td>
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
                                <button onClick={()=> navigator(`/my-view/${da._id}/${da.name}`)} className='btn-v'>View</button>
                              </td>
                          </tr>
                      ))} 
                    </tbody>         
                </table>
              </div>      
          </div>
    </div>
  )
}

export default ItemAll
