import {useEffect, useState} from 'react'
import './Search.css'
const URL='https://api.spoonacular.com/recipes/complexSearch'
const API_KEY='562c43799aeb427b9edee18656867907'
export default function Search({foodData,setFooData}){
  const [query,setquery]=useState('pizza')
  useEffect(()=>{
    async function fetchFood(){
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
      const data = await res.json()
      console.log(data.results)
      setFooData(data.results)
    }
    fetchFood()
  },[query])
  return(
    <div className='SearchContainer'>
    {query}
    <input className='input' type='text' value={query} onChange={(e)=>setquery(e.target.value)}/>
    </div>

  );
}