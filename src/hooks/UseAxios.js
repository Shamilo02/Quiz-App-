import axios from 'axios';
import {useState , useEffect } from 'react'

axios.defaults.baseURL = "https://opentdb.com";
const UseAxios = ({url}) => {
    const [response, Setresponse] = useState(null);
    const [error, Seterror] = useState("");
    const [loading, Setloading] = useState(true); 

    useEffect(() => {
       const fetchData = () => {
        axios.get(url)
        .then(res => Setresponse(res.data))
        .catch(err => Seterror(err))
        .finally(() => Setloading(false))
        }
        fetchData(); 
    }, [url])
    
    return {
        response,loading,error
    }
}

export default UseAxios; 