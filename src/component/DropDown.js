 import axios from "axios";
 import {useState,useEffect} from 'react';
import { Link } from "react-router-dom";

 
 const DropDown=()=>{
  const[dropList,setDropList]=useState();

useEffect(()=>{axios.get('https://dummyjson.com/products/categories')
.then(res=>{setDropList(res.data);
console.log(res.data)})
.catch(error=>console.log('Fetching Error:',error))},[])



    return(
    <div >

  <ul className=" row m-2 p-0" >
  {dropList?.map((item)=>
    <Link to={`/cat/${item}`} class=" col  d-inline p-0" > <span class="badge  text-bg-light m-1">{item}</span></Link>
    )}
  </ul>
</div>
    )}
    export default DropDown;
  