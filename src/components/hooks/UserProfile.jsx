import axios from "axios";
import { useEffect , useState } from "react";
import config from '../../config.json'
const useFetchUser = (userid) =>{
    const [datauser, setDataUser] = useState([])
    const [loadings, setLoading] = useState(false)
    const [error, setError] = useState([])

    useEffect(() => {
         const fetchData = async () =>{
            setLoading(true)
            try{
              const res = await axios.get(`${config.apiUserProfile}/${userid}`)
              setDataUser(res.data)
            }catch(err){
              setError(err)
            }
            setLoading(false)
         }
       fetchData()
    },[userid])
    const  reFetch  = async () =>{
      setLoading(true)
      try{
        const res = await axios.get(`${config.apiUserProfile}/${userid}`)
        setDataUser(res.data)
      }catch(err){
        setError(err)
      }
      setLoading(false)
   }
   return {datauser , loadings , error ,setDataUser }
}
export default useFetchUser