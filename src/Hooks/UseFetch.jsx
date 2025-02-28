
import {useEffect, useState} from 'react'

export const UseFetch = (apiPath,queryTerm ="" ) => {

const[data,setData] = useState([])
const key = import.meta.env.VITE_API_KEY
 
 const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;

 useEffect(()=>{
   async function fetchMovie(){
     fetch(url).then((res)=>res.json()).then((jsonData)=>setData(jsonData.results))
   }
   fetchMovie()
},[url])
 return{data}
}








































































































