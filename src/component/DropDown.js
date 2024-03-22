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
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
  {dropList?.map((item)=>
    <Link  to={`/cat/${item}`} class="dropdown-item" > <li>{item}</li></Link>
    )}
  </ul>
</div>
    )}
    export default DropDown;