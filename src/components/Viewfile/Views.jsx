import React from 'react'
import './StyleView.css'
import './loading.css'
import { useNavigate, useParams } from 'react-router-dom'
// import { Viewer , Worker } from '@react-pdf-viewer/core'
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
const Views = ({DataView,Loading}) => {
    const navigator = useNavigate()
    // const newplugin = defaultLayoutPlugin()
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
  return (
    <div className='container'>
      {/* <button onClick={()=> navigator('/item-all')} className='btn-black'>Black</button> */}
       <div className="box-view-b">
          <div className="m-h">
           { DataView.typefile == 'png' || DataView.typefile == 'jpg'?(
            <div className="row">
               Name: {DataView.name+'.'+DataView.typefile} <br />
               Comments: {DataView.comments}
               <img src={DataView.url} alt="" />
            </div>
            ):<div className="row">
                  Name: {DataView.name+'.'+DataView.typefile} <br />
                  Comments: {DataView.comments}<br/>
                  Source Codes: <textarea style={{outline:'none'}} name="" id="viewtext" placeholder='socrce_code' value={DataView.source_code}/>
              </div>
           }
         </div>
       </div> 
    </div>
  )
}

export default Views
