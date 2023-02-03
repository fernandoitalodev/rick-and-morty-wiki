import React,{useState,useEffect} from 'react'
import Cards from '../Cards/Cards'
import InputGroup from '../Filters/InputGroup';
const Episodes =() => {
  const [id,setID]=useState(1)
  const [info,setInfo]=useState([]);
  const[results,setResults]=useState([])
  let {air_date,name,episode}=info
  let api = `https://rickandmortyapi.com/api/episode/${id}`
  
  console.log(info)
  useEffect(()=>{
     (async function(){
      let data= await fetch(api).then((res)=>res.json());
      setInfo(data)


     let a= await Promise.all(
      data.characters.map( ( x)=>{
        return fetch(x).then((res)=> res.json());
      })
     );
     setResults(a)
     })()
     
  },[api]);
   
  return (
    <div className='container'>
      <div className="row mb-4">
        <h1 className="text-center mb-3">
          {episode === "" ? "Unknown" : episode}: {""}
          <span className="text-primary">
           {name === "" ? "Unknown" : name} </span> 
        </h1>
        <h6 className="text-center">
          Air Date {air_date=== "" ? "Unknown" : air_date}
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h5 className="text-center mb-4">
             Pick Episodes
          </h5>
          <InputGroup total={51} setID={setID} name='Episodes' />
         </div>
        <div className="col-lg-8 col-12">
          <div className="row"> 
          <Cards page="/episodes/" results={results}/>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Episodes