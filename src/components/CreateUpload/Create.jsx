import axios from 'axios'
import React,{useRef, useState,useContext} from 'react'
import config from '../../config.json'
import { AuthContext } from '../context/AuthContext'
import { useParams , useNavigate, useLocation} from 'react-router-dom'
import iconF from '../../assets/avatar/user.png'
import DataUrl from '../../url_confin'
import './upload.css'
const Create = () => {
     const navigator = useNavigate()
     const location = useLocation()
     const { user } = useContext(AuthContext)
     const [fileUp, setFileUp] = useState([])
     const [namef , setNamef] = useState("")
     const [comment ,setComment] = useState("")
     const [sourcecode ,setSourcecode] = useState("")
     const [typefile ,setTypeFile] = useState("")
     const [loading ,setLoading] = useState(false)
    // ฟังค์ชัน hook ข้อมูล จาก datalink มาเก็บใว้ในตัวแปร
    const DataImage = {
         imagehtml:DataUrl.imagehtml,
         imagecss:DataUrl.imagecss,
         imagejs:DataUrl.imagejs,
         imagephp:DataUrl.imagephp,
         imagepdf:DataUrl.imagepdf,
         imagepng:DataUrl.imagepng,
         imagejpg:DataUrl.imagejpg,
         imagejsx:DataUrl.imagejsx,
        }
     // ฟังค์ชัน รับข้อมูล จาก useState มาเก็บในตัวแปร
        const newData ={
          userid: user._id,
          name:namef,
          comments:comment,
          sourcecode:sourcecode,
          typefile:typefile,
        }
     // ฟังค์ชัน เลือกประเภท ของ ไอคอนไฟล์
        switch (typefile){
           case 'html': newData.iconfile = DataImage.imagehtml 
           break;
           case 'php': newData.iconfile = DataImage.imagephp
           break;
           case 'css': newData.iconfile = DataImage.imagecss
           break;
           case 'js': newData.iconfile = DataImage.imagejs
           break;
           case 'jsx': newData.iconfile = DataImage.imagejsx
           break;
           case 'pdf': newData.iconfile = DataImage.imagepdf
           break;
           case 'png': newData.iconfile = DataImage.imagepng
           break;
           case 'jpg': newData.iconfile = DataImage.imagejpg
           break;
        }
  // ฟังค์ชัน อัพไฟล์
  const handleSummit = async (e) =>{
        e.preventDefault()
           const data = new FormData();
           data.append("image",fileUp)
           data.append("name",newData.name)
           data.append("userid",newData.userid)
           data.append("comments",newData.comments)
           data.append("sourcecode",newData.sourcecode)
           data.append("typefile",newData.typefile)
           data.append("iconsfile",newData.iconfile)
          const configs = {
               headers:{
                'content-type':'multipart/form-data',
               },
          }
      try{ 
          if(newData.name == ''){
             alert(' Missing information')
          }else{
            await axios.post(config.apiUserCreateData,data,configs)
            setLoading(true)
            if(loading){
              <div className="lo-lo">
               <p>Loading...</p>
               <div className="main">
                 <div className="box"></div>
               </div>
             </div>
             }
            alert('Upload Sucessfylly !')
            navigator(`/my-items`)                
          }
          }catch(err){
            console.log(err)
          }
    }
  return (
    <div className='container-i'>
        <div className="by-body">
          <div className="form-sty">
              <form className='row-col' onSubmit={handleSummit}  >
                   <strong>Please select your file type.</strong>
                   <select className="form-control" id='value' onChange={(e)=> setTypeFile(e.target.value)} >
                        <option value="">Type File</option>
                        <option value="html">html</option>
                        <option value="php">php</option>
                        <option value="css">css</option>
                        <option value="js">js</option>
                        <option value="jsx">jsx</option>
                        <option value="pdf">pdf</option>
                        <option value="png">png</option>
                        <option value="jpg">jpg</option>
                    </select><br />
                  {typefile == 'html'?(
                      <>
                        <label htmlFor="">File Name</label>
                        <small>*ต้องระบุ</small>
                        <input type="text" id="name" placeholder='Name...' onChange={(e)=> setNamef(e.target.value)}/>
                        <label htmlFor="">Comments</label>
                        <input type="text" id="comments" placeholder='Comments...' 
                        onChange={(e)=> setComment(e.target.value)}/>
                        <label htmlFor="">Source Codes</label>
                        <small>*ต้องระบุ</small>
                        <textarea  onChange={(e)=> setSourcecode(e.target.value)} placeholder='Paste code...'/>
                        <label htmlFor="">Example Imgae (ตัวอย่างภาพแสดงผล)</label>
                        <small>*ถ้ามี</small>
                        <input type="file" id="image"onChange={(e)=>setFileUp(e.target.files[0])}/>
                      </>
                   ):''
                  }
                  {typefile == 'php'?(
                      <>
                        <label htmlFor="">File Name</label>
                        <small>*ต้องระบุ</small>
                        <input type="text" id="name" placeholder='Name...' onChange={(e)=> setNamef(e.target.value)}/>
                        <label htmlFor="">Comments</label>
                        <input type="text" id="comments" placeholder='Comments...' 
                        onChange={(e)=> setComment(e.target.value)}/>
                        <label htmlFor="">Source Codes</label>
                        <small>*ต้องระบุ</small>
                        <textarea onChange={(e)=> setSourcecode(e.target.value)} placeholder='Paste code...'/>
                        <label htmlFor="">Example Imgae (ตัวอย่างภาพแสดงผล)</label>
                        <small>*ถ้ามี</small>
                        <input type="file" id="image"onChange={(e)=>setFileUp(e.target.files[0])}/>
                      </>
                   ):''
                  }
                  {typefile == 'css'?(
                      <>
                        <label htmlFor="">File Name</label>
                        <small>*ต้องระบุ</small>
                        <input type="text" id="name" placeholder='Name...' onChange={(e)=> setNamef(e.target.value)}/>
                        <label htmlFor="">Comments</label>
                        <input type="text" id="comments" placeholder='Comments...' 
                        onChange={(e)=> setComment(e.target.value)}/>
                        <label htmlFor="">Source Codes</label>
                        <small>*ต้องระบุ</small>
                        <textarea onChange={(e)=> setSourcecode(e.target.value)} placeholder='Paste code...'/>
                        <label htmlFor="">Example Imgae (ตัวอย่างภาพแสดงผล)</label>
                        <small>*ถ้ามี</small>
                        <input type="file" id="image"onChange={(e)=>setFileUp(e.target.files[0])}/>
                      </>
                   ):''
                  }
                  {typefile == 'js'?(
                      <>
                        <label htmlFor="">File Name</label>
                        <small>*ต้องระบุ</small>
                        <input type="text" id="name" placeholder='Name...' onChange={(e)=> setNamef(e.target.value)}/>
                        <label htmlFor="">Comments</label>
                        <input type="text" id="comments" placeholder='Comments...' 
                        onChange={(e)=> setComment(e.target.value)}/>
                        <label htmlFor="">Source Codes</label>
                        <small>*ต้องระบุ</small>
                        <textarea onChange={(e)=> setSourcecode(e.target.value)} placeholder='Paste code...'/>
                        <label htmlFor="">Example Imgae (ตัวอย่างภาพแสดงผล)</label>
                        <small>*ถ้ามี</small>
                        <input type="file" id="image"onChange={(e)=>setFileUp(e.target.files[0])}/>
                      </>
                   ):''
                  }
                  {typefile == 'jsx'?(
                      <>
                        <label htmlFor="">File Name</label>
                        <small>*ต้องระบุ</small>
                        <input type="text" id="name" placeholder='Name...' onChange={(e)=> setNamef(e.target.value)}/>
                        <label htmlFor="">Comments</label>
                        <input type="text" id="comments" placeholder='Comments...' 
                        onChange={(e)=> setComment(e.target.value)}/>
                        <label htmlFor="">Source Codes</label>
                        <small>*ต้องระบุ</small>
                        <textarea onChange={(e)=> setSourcecode(e.target.value)} placeholder='Paste code...'/>
                        <label htmlFor="">Example Imgae (ตัวอย่างภาพแสดงผล)</label>
                        <small>*ถ้ามี</small>
                        <input type="file" id="image"onChange={(e)=>setFileUp(e.target.files[0])}/>
                      </>
                      
                   ):''
                  }
                  {typefile == 'pdf'?(
                     <>
                        <label htmlFor="">File Name</label>
                        <small>*ต้องระบุ</small>
                        <input type="text" id="name" placeholder='Name...' onChange={(e)=> setNamef(e.target.value)}/>
                        <label htmlFor="">Comments</label>
                        <input type="text" id="comments" placeholder='Comments...' 
                        onChange={(e)=> setComment(e.target.value)}/>
                        <label htmlFor="">File PDF</label>
                        <small>*ต้องระบุ</small>
                        <input type="file" id="image"onChange={(e)=>setFileUp(e.target.files[0])}/>
                     </>
                  ):''
                  }
                  {typefile == 'png'?(
                     <>
                        <label htmlFor="">File Name</label>
                        <small>*ต้องระบุ</small>
                        <input type="text" id="name" placeholder='Name...' onChange={(e)=> setNamef(e.target.value)}/>
                        <label htmlFor="">Comments</label>
                        <input type="text" id="comments" placeholder='Comments...' 
                        onChange={(e)=> setComment(e.target.value)}/>
                        <label htmlFor="">File PNG</label>
                        <small>*ต้องระบุ</small>
                        <input type="file" id="image"onChange={(e)=>setFileUp(e.target.files[0])}/>
                     </>
                  ):''
                  }
                  {typefile == 'jpg'?(
                     <>
                        <label htmlFor="">File Name</label>
                        <small>*ต้องระบุ</small>
                        <input type="text" id="name" placeholder='Name...' onChange={(e)=> setNamef(e.target.value)}/>
                        <label htmlFor="">Comments</label>
                        <input type="text" id="comments" placeholder='Comments...' 
                        onChange={(e)=> setComment(e.target.value)}/>
                        <label htmlFor="">File JPG</label>
                        <small>*ต้องระบุ</small>
                        <input type="file" id="image"onChange={(e)=>setFileUp(e.target.files[0])}/>
                     </>
                  ):''
                  }
                  <button className='btn-p'type='submit'>push</button>
              </form>
          </div>         
        </div>
    </div>
  )
}

export default Create
