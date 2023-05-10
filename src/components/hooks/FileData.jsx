import axios from "axios";
import { useEffect , useState } from "react";
import config from '../../config.json'
const useFetchFileData = (fileid) =>{
    const [datafile, setDataFile] = useState([])
    const [loadings, setLoading] = useState(false)
    const [error, setError] = useState([])

    useEffect(() => {
         const fetchData = async () =>{
            setLoading(true)
            try{
              const res = await axios.get(`${config.apiDataUser}/${fileid}`)
              setDataFile(res.data)
            }catch(err){
              setError(err)
            }
            setLoading(false)
         }
       fetchData()
    },[fileid])
    const  reFetch  = async () =>{
      setLoading(true)
      try{
        const res = await axios.get(`${config.apiDataUser}/${fileid}`)
        setDataFile(res.data)
      }catch(err){
        setError(err)
      }
      setLoading(false)
   }
   return {datafile , loadings , error }
}
export default useFetchFileData